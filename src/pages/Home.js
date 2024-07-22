import React from 'react'
import Body from '../components/Body/Body'
import MenuBar from '../components/MenuBar/MenuBar'
import Contents from '../components/Contents/Contents'
import DetailsRoom from '../components/DetailsRoom/Room1/DetailsRoom'
import DetailsBusiness from '../components/DetailsRoom/Room2/DetailsBusiness'
import Map from '../components/Map/Map'
import '../pages/Home.css'

function Home() {
  return (
    <div className='App'>
      <Body />
      <MenuBar />
      <Contents />
      <DetailsRoom />
      <DetailsBusiness />
      <Map />
      </div>
  )
}

export default Home