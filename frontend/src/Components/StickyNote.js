import React from 'react';
import '../App.css';
import { useRef } from 'react';


function StickyNote(props) {
    const placeholder = props.placeholder;
    const subjectInput = useRef(null);
    const noteInput = useRef(null);
    console.log(placeholder);
    // Update
  const updateSticky = async (id) => {
    const subject = subjectInput.current.value;
    const note = noteInput.current.value;
    const body = JSON.stringify({
        subject, note
    })
    try {
      const response = await fetch(`https://motivation-machine.herokuapp.com/api/placeholder/${props.sticky._id}`, {
        method: 'PUT',
        headers : {
            'Content-type': 'application/json'
        },
        body: body
      })
      const data = await response.json();
      placeholder.map((element)=> {
          if  (element._id === props.sticky._id) {
              return data;
          } else {
              return element;
          }
      })
    //   event.currentTarget.reset()
      props.setPlaceholder(placeholder);
    } catch(error) {
      console.error(error)
    }
  }
    return (
        <div key={props.sticky._id} className="stickynote">
                    <b>{`${props.sticky.subject}`}</b><br/>
                    {`${props.sticky.note}`}<br />
                <button onClick={
                  (event) => {
                    props.deletePlaceholder(props.sticky._id)
                  }
                }>Delete</button>
                {/* <button onClick={
                    (event) => {
                        updatePlaceholder(props.sticky._id)
                    }
                }>Edit </button> */}
            <form onSubmit={(event)=>{
                event.preventDefault();
                // console.log(props.sticky._id);
                updateSticky(props.sticky._id)
                event.currentTarget.reset();
            }}>
            Subject: <input type="text" ref={subjectInput} /><br />
            Note: <input type="text" ref={noteInput} /><br />
            <input type="submit" value="Edit"/>
            </form>
        </div>
    )
}

export default StickyNote;