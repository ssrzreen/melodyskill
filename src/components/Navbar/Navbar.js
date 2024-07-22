import React from 'react'
import Logo from '../../image/Logo.png'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} />
            </div>
            <div className='rightSide'>
                <div className='navitems'>
                    {/* <Link to="/">Home</Link> */}
                    <Link to="/hotels"><btn>Hotels</btn> </Link>
                    <Link to="/flights"><btn>Flights</btn></Link>
                    <Link to="/airport"><btn>Airport Transfer</btn></Link>
                    <Link to="/car"><btn>Car Rental</btn></Link>
                    <Link to="/things"><btn>Things to Do</btn></Link>
                    
                </div>
                <div className='ButtonContainer'>
                    <button className='LoginButton'>Login</button>
                    <button className='RegisButton'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar