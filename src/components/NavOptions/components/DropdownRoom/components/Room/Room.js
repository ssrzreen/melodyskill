import React, { useState } from 'react'
import '../Room/Room.css'
function Room() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div className='drop-down-room-container'>
                <h1>Room</h1>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <h2>{counter}</h2>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>

    )
}

export default Room