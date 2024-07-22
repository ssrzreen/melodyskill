import React from 'react'
import '../Map/Map.css'

function Map() {
    return (
        <div className='mapcontainer'>
            <h1>WHERE'S THE LUXURY HOTEL</h1>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9315655749663!2d100.53777683453423!3d13.726735144410645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2ee21744e3%3A0x33118df433473755!2sUrban%20House!5e0!3m2!1sth!2sth!4v1721628674542!5m2!1sth!2sth"
                    width="1000"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>
    )
}

export default Map