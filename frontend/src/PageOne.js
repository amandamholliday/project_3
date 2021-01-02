import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import PlaceholderForm from './PlaceholderForm';

function PageOne() {
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
  
  // Delete
  const deletePlaceholder = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/placeholder/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': token
        }
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
            <h1>List</h1>
            <PlaceholderForm updatePlaceholder={setPlaceholder} placeholder={placeholder} />
            <ul>
            {
              placeholder.map(placeholder => {
                return (
                <li key={placeholder._id}>{`${placeholder.title}`}<br/>{`${placeholder.url}`}<br />
                <button onClick={
                  (event) => {
                    deletePlaceholder(placeholder._id)
                  }
                }>DELETE {placeholder.title} </button>
                </li>
                )
              })
            }
            </ul>
          </header>
        </div>
    )
}

export default PageOne;