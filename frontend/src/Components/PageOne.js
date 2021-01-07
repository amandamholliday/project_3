import { useState, useEffect } from 'react';
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PlaceholderForm from '../PlaceholderForm';
import StickyNote from './StickyNote';

function PageOne() {

    // const pageStyle = {
    //     background: 'pink'
    // };

    const [placeholder, setPlaceholder] = useState([])
    const [token, setToken] = useState('');

  // Read
  const fetchPlaceholder = async () => {
    try{
      const response = await fetch('http://localhost:3000/placeholder');
      const data = await response.json();
      setPlaceholder(data)
    }catch (error) {
      console.error(error)
    }
  }

  // Update
  const updatePlaceholder = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/placeholder/${id}`, {
        method: 'UPDATE',
      })
      const data = await response.json();
      const filteredPlaceholder = placeholder.filter(placeholder => placeholder._id !== data._id)
      setPlaceholder(filteredPlaceholder);
    } catch(error) {
      console.error(error)
    }
  }

  // Delete
  const deletePlaceholder = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/placeholder/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json();
      const filteredPlaceholder = placeholder.filter(placeholder => placeholder._id !== data._id)
      setPlaceholder(filteredPlaceholder);
    } catch(error) {
      console.error(error)
    }
  }
  useEffect(()=> {
    fetchPlaceholder()
    if(window.localStorage.getItem('token')){
      setToken(window.localStorage.getItem('token'))
    }
  }, [])

    return (
        <div>
            <header className="App-header">
            <h1>Write a note!</h1>
            <PlaceholderForm updatePlaceholder={updatePlaceholder} placeholder={placeholder} />
            <ul className="notes">
            {
              placeholder.map(placeholder => {
                return (
                  <StickyNote placeholder={placeholder} updatePlaceholder={updatePlaceholder}
                    deletePlaceholder={deletePlaceholder}
                  />
                )
              })
            }
            </ul>
          </header>
        </div>
    )
}

export default PageOne;

                {/* <p key={placeholder._id} className="stickynote">
                    <b>{`${placeholder.subject}`}</b><br/>
                    {`${placeholder.note}`}<br />
                <button onClick={
                  (event) => {
                    deletePlaceholder(placeholder._id)
                  }
                }>Delete</button>
                <button onClick={
                    (event) => {
                        updatePlaceholder(placeholder._id)
                    }
                }>Edit </button>
                </p> */}