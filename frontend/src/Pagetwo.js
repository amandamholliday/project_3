import React, {useState, useEffect} from 'react';
import './App.css';

function Pagetwo() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://v2.jokeapi.dev/');
        const items = await data.json();
        console.log(items);
        // setItems(items.items);
    } 

    return (
        <div>
            {items.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )
}

export default Pagetwo;