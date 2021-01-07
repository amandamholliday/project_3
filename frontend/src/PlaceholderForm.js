import { useRef, useEffect } from 'react';

export default (props) => {
    const subjectInput = useRef(null);
    const noteInput = useRef(null);
    const createPlaceholder = async (event) => {
        // event.preventDefault();
        const subject = subjectInput.current.value; 
        const note = noteInput.current.value;
        const body = JSON.stringify({
            subject, note
        });
        event.currentTarget.reset();
        try {
            const response = await fetch('https://motivation-machine.herokuapp.com/api/placeholder', {
              method: 'POST',
              headers : {
                  'Content-type': 'application/json'
              },
              body: body
            })
            const data = await response.json();
            // event.currentTarget.reset();
            props.updatePlaceholder([...props.placeholder.data]);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form onSubmit={createPlaceholder}>
            Subject: <input type="text" ref={subjectInput} /><br />
            Note: <input type="text" ref={noteInput} /><br />
            <input type="submit" value="Add"/>
        </form>
    )
}