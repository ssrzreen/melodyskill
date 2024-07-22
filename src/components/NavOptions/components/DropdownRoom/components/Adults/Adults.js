import React, { useState } from 'react'
import '../Adults/Adults.css'
function Adults() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div className='drop-down-adults-container'>
                <h1>Adults</h1>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <h2>{counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    )
}

export default Adults