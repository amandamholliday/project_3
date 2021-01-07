import React, {useState, useEffect} from 'react';
import '../App.css';

function Pagetwo() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState({});

    const fetchItems = async () => {
        const response = await fetch('http://api.icndb.com/jokes/random');
        const data = await response.json();
        setItem(data);
    };

    return (
        <div>
            <h1>Inspire me with some knowledge:</h1>
            <ul>~currently work in progress~</ul>
            {/* <h1>{item.value.joke}</h1> */}
            {/* {items.map(item => {
                return (
                <h1>{item.value.joke}</h1>
                )
            })} */}
        </div>
    )
}

export default Pagetwo;