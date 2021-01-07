import React from 'react';
import '../App.css';


function StickyNote(props) {
    const placeholder = props.placeholder;
    return (
        <p key={placeholder._id} className="stickynote">
                    <b>{`${placeholder.subject}`}</b><br/>
                    {`${placeholder.note}`}<br />
                <button onClick={
                  (event) => {
                    props.deletePlaceholder(placeholder._id)
                  }
                }>Delete</button>
                <button onClick={
                    (event) => {
                        props.updatePlaceholder(placeholder._id)
                    }
                }>Edit </button>
        </p>
    )
}

export default StickyNote;