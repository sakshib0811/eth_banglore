import React from 'react'
import "./Home.css"
import Spon from './Spon'
function Home() {
  return (
    <div>
    <div className='home'>
    <p className='sub_upper_title'>July 13th, 2022</p>
    <p className='heading'>The Ethereum Blockchain Hackathon 2022</p>
    <p className='sub_title'>Countdown is finished!</p>
    <p className='sub_title'>Welcome to India's First ever Ethereum Blockchain Hackathon at IIT Mumbai.</p>
    <button className='btn'>Register here</button>
    <Spon />
    </div>
    
    </div>
  )
}

export default Home