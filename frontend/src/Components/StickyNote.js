import React from 'react';
import '../App.css';
import { useRef } from 'react';


function StickyNote(props) {
    const placeholder = props.placeholder;
    const subjectInput = useRef(null);
    const noteInput = useRef(null);

    // Update
  const updatePlaceholder = async (id) => {
    const subject = subjectInput.current.value;
    const note = noteInput.current.value;
    const body = JSON.stringify({
        subject, note
    })
    try {
      const response = await fetch(`http://localhost:3000/placeholder/${placeholder._id}`, {
        method: 'PUT',
        headers : {
            'Content-type': 'application/json'
        },
        body: body
      })
      const data = await response.json();
      console.log(data);
    //   placeholder.map((element)=> {
    //       if  (element._id === id) {
    //           return data;
    //       } else {
    //           return element;
    //       }
    //   })
      // event.currentTarget.reset()
      console.log(props);
      props.setPlaceholder(data);
    } catch(error) {
      console.error(error)
    }
  }
    return (
        <div key={placeholder._id} className="stickynote">
                    <b>{`${placeholder.subject}`}</b><br/>
                    {`${placeholder.note}`}<br />
                <button onClick={
                  (event) => {
                    props.deletePlaceholder(placeholder._id)
                  }
                }>Delete</button>
                {/* <button onClick={
                    (event) => {
                        updatePlaceholder(placeholder._id)
                    }
                }>Edit </button> */}
            <form onSubmit={(event)=>{
                event.preventDefault();
                console.log(placeholder._id);
                updatePlaceholder(placeholder._id)
            }}>
            Subject: <input type="text" ref={subjectInput} /><br />
            Note: <input type="text" ref={noteInput} /><br />
            <input type="submit" value="Edit"/>
            </form>
        </div>
    )
}

export default StickyNote;