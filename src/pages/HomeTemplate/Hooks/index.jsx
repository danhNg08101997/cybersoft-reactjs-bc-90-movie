import React, {useCallback, useEffect, useState} from 'react';
import Fruit from './fruit.jsx';

function Hooks() {
    const [count, setCount] = useState(0);
    const [fruits, setFruits] = useState([{id: 1, name: 'Apple'}, {id: 2, name: 'Banana'}, {id: 3, name: 'Orange'}]);

    const handleDelete = (id) => {
        setFruits((prevState) => prevState.filter((fruit)=>fruit.id !== id));
    }
    const memoizedCallback = useCallback( handleDelete, []);

    return (
        <div>
            <h1>Hooks</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {fruits?.map((fruit) =>
                <Fruit key={fruit.id} fruit={fruit} onDelete={memoizedCallback}/>
            )}
        </div>
    );
}

export default Hooks;