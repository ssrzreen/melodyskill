import React from 'react'
import '../Contents/Contents.css'
import { RightOutlined } from '@ant-design/icons'
import Foodicon from '../../image/foodicon.png'
import Harticon from '../../image/harticon.png'
import Activeicon from '../../image/activeicon.png'
import Righticon from '../../image/righticon.png'

function Contents() {
    return (
        <div className='contentscontainer'>
            <h1>THE LUXURY HOTEL</h1>
            <div className='leftSide'>
                <div className='contents'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                </div>
            </div>

            <a href=''>Read More<RightOutlined /></a>

            <h2>Staycation offers available</h2>
            <h3>Get special benefits for your stay</h3>

            <div className='detailcontainer'>
                <div className='detailp'>
                    <p><img src={Foodicon} />Food and Drinks</p>
                    <p1><img src={Righticon} />Room service 24-hour</p1> <br />
                    <p1><img src={Righticon} />Coffee shop</p1><br />
                    <p1><img src={Righticon} />Room service</p1>
                </div>
                <div className='detailp'>
                <p><img src={Harticon} /> Wellness</p>
                    <p1><img src={Righticon} />Salon</p1> <br />
                    <p1><img src={Righticon} />Fitness center</p1><br />
                </div>
                <div className='detailp'>
                <p><img src={Activeicon} />Activities</p>
                    <p1><img src={Righticon} />Swimming Pool</p1>
                </div>
            </div>
        </div>
    )
}

export default Contents