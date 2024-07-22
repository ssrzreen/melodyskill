import React from 'react'
import { Link } from 'react-router-dom'
import '../MenuBar/MenuBar.css'
function MenuBar() {
    return (
        <div className='menubar'>
            <div className='leftSide'>
                <Link to=""><btn>Overview</btn> </Link>
                <Link to=""><btn>Rooms</btn></Link>
                <Link to=""><btn>Location</btn></Link>
            </div>
            <div className='rightSide'>
                <div className='navitems'>
                </div>
                <div className='ButtonContainer'>
                    <h1>฿1,358</h1>
                    <button className='ViewButton'>View This Deal</button>
                </div>
            </div>
        </div>
    )
}

export default MenuBar