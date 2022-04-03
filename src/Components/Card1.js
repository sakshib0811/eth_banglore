import React from 'react'
import "./Card1.css"

function Card({title,imgurl,body}) {
  return (
      <div className='card_header'>

<div className='card_container'>
        <div className='image_container'>
            <img src={imgurl} className="image1"></img>
        </div>
        <div className='crad_content'>
            <div className='card_title'>
                <h3 className='h3'>{title}</h3>
            </div>
            <div className='card_body'>
                <p className='p1'>{body}</p>
            </div>
        </div>
       
    </div>

      </div>
   
  )
}

export default Card