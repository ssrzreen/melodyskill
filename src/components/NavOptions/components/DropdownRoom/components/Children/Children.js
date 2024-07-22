import React, { useState } from 'react'
import '../Children/Children.css'
function Children() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div className='drop-down-children-container'>
                <h1>Children</h1>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <h2>{counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    )
}

export default Children