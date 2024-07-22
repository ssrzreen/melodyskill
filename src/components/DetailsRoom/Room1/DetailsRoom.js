import React from 'react'
import '../Room1/DetailsRoom.css'
import Img49 from '../../../image/R49.png'
import { FaUser } from "react-icons/fa6";
import { RightOutlined } from '@ant-design/icons';

function DetailsRoom() {
    return (
        <div className='detailscontainer'>
            <h1>ROOMS</h1>
            <h2>Superior Modern</h2>
            <div className='details'>
                <img src={Img49} />
                <div className='detail'>
                    <h3>Room Option(s)</h3>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>
                </div>
                <div className='detail'>
                    <h3>Guest(s)</h3>
                    <div className='detail2'>
                        <p>2 <FaUser /><FaUser /></p>
                    </div>
                </div>

                <div className='detail'>
                    <h3>Price/room/night</h3>
                    <p>฿1,358</p>
                </div>
                <button className='SeeButton'>Choose</button>
            </div>
            <a href=''>See room details<RightOutlined /></a>
        </div>
    )
}

export default DetailsRoom