import React from 'react'
import "./Prize.css"
import img from "./img/card.jpg"
function Prize() {
  return (
    <div className='prize'>
        <div className='card'>
            <div className='card__body'>
                <img src={img}></img>
                <h2>Hurry up, Secure Your Seat!</h2>
                <p>We are the proud organisers of India’s first ever Ethereum blockchain Hackathon sponsored by Consensys, Ethereum Foundation, hosted at IIT Mumbai. </p>
                <button className='card__btn'>Click hear to Register</button>
            </div>
        </div>
        <div className='about'>
            <h1 className='spon_title'>Participate in the Hackathon</h1>
            <p className='p1'>If you would like to take part in our event, please fill in your details in this Event Registration Form below and you will be automatically registered. Event registration must be completed at least seven (7) days prior to the event.
            <br />
            <br />
            <br />
            <br />
            Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.</p>
        </div>
        
    </div>
  )
}

export default Prize