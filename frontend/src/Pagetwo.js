import React, {useState, useEffect} from 'react';
import './App.css';

function Pagetwo() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://api.icndb.com/jokes/random');
        const items = await data.json();
        console.log(items);
        // setItems(items);
    };

    return (
        <div>
            {items.map(item => (
                <h1>{item}</h1>
            ))}
        </div>
    )
}

export default Pagetwo;