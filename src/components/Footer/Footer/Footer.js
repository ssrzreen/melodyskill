import React from 'react'
import Logo from '../../../image/Logo.png'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
function Footer() {
    return (
        <div className='footercontainer'>
            <img src={Logo} />
            <div className='navbar'>
                <div className='rightSide'>
                    <div className='navitems'>
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/hotels"><btn>Hotels</btn> </Link>
                        <Link to="/flights"><btn>Flights</btn></Link>
                        <Link to="/airport"><btn>Airport Transfer</btn></Link>
                        <Link to="/car"><btn>Car Rental</btn></Link>
                        <Link to="/things"><btn>Things to Do</btn></Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer