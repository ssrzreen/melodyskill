import React, { useRef } from 'react'
import '../PhotoHotel/Photo.css'
import all1 from '../../image/all1.png'
import all2 from '../../image/all2.png'
import all3 from '../../image/all3.png'
import all4 from '../../image/all4.png'
import all5 from '../../image/all5.png'
import all6 from '../../image/all6.png'
import { Link } from 'react-router-dom'
import Img1 from '../../image/img1.png'
import Img2 from '../../image/img2.png'
import Img3 from '../../image/img3.png'
import Img4 from '../../image/img4.png'
import Img5 from '../../image/img5.png'
import Img6 from '../../image/img6.png'
import Img7 from '../../image/img7.png'
import Img8 from '../../image/img8.png'


function Photo() {
    let imageContainerRef = useRef(null);
    const images = [all1, all2, all3, all4, all5, all6]
    const prev = () => imageContainerRef.current.scrollLeft -= 350
    const next = () => imageContainerRef.current.scrollLeft += 350

    return (
        <div className='photocontainer'>
            <h1>PHOTO BY HOTEL</h1>
            <div className='content'>
                <div className='prev' onClick={prev}></div>
                <div className='slide-panel' ref={imageContainerRef}>
                    {images.map(image => { return (<img src={image} />) })}
                </div>
                <div className='next' onClick={next}></div>
            </div>

            <div className='menubar'>
                <div className='leftSide'>
                    <Link to=""><btn>All Photos</btn> </Link>
                    <Link to=""><btn>Bedroom(6)</btn></Link>
                    <Link to=""><btn>Lobby(2)</btn></Link>
                </div>
                <div className='imgcontainer'>
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img4} />
                </div>
                <div className='imgcontainer'>
                    <img src={Img5} />
                    <img src={Img6} />
                    <img src={Img7} />
                    <img src={Img8} />
                </div>
            </div>
        </div>
    )
}

export default Photo