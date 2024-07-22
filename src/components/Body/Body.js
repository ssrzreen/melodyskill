import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import Img1 from '../../image/R1.png'
import Img2 from '../../image/img2.png'
import Img3 from '../../image/img3.png'
import Img5 from '../../image/img5.png'
import Img8 from '../../image/img8.png'
import { CameraOutlined } from '@ant-design/icons'
import '../Body/Body.css'
import { useNavigate } from 'react-router-dom'
import MenuBar from '../MenuBar/MenuBar'
import Contents from '../Contents/Contents'
import DetailsRoom from '../DetailsRoom/Room1/DetailsRoom'
import DetailsBusiness from '../DetailsRoom/Room2/DetailsBusiness'
import Map from '../Map/Map'
function Body() {
    const navigate = useNavigate();
    return (
        <div className='bodycontainer'>
            <div className='header'>
                <a href=''><p>Home</p></a>
                <RightOutlined />
                <a href=''><p>Hotels</p></a>
                <RightOutlined />
                <a href=''><p>THE LUXURY HOTEL</p></a>
            </div>
            <h2>THE LUXURY HOTEL</h2>
            <p>The Luxury Hotel ,Pattaya,Chonburi,Thailand.</p>

            {/* <div className='ButtonContainer'>
            </div> */}
            <div className='img'>
                <img src={Img1} />
                <button onClick={() => navigate("/photo")} className='PhotoButton'>
                    <CameraOutlined />
                    See all photos
                </button>

                <div className='imgcontainer'>
                    <img src={Img5} />
                    <img src={Img2} />
                </div>
                <div className='imgcontainer'>
                    <img src={Img3} />
                    <img src={Img8} />
                </div>
            </div>
        </div>

    )
}

export default Body