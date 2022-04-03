import React from 'react'
import "./Workshop.css"
import Card1 from './Card1'
import Footer from './Footer'
function Workshop() {
  return (
    <div className='work'>
        <div className="work1">
            <h1 style={{alignSelf:'center', justifyContent:'center'}}>Our Previous Hackathons</h1>
        </div>
        
      <div className="work_card">
        <Card1
          title="Bangalore 2019"
          imgurl="https://cdn5.vectorstock.com/i/thumb-large/27/09/hackathon-signs-round-design-template-thin-line-vector-28032709.jpg"
          body="91 Springboard "
          className="card_sub"
        />
        <Card1
          title="Singapore 2018"
          imgurl="https://content.techgig.com/thumb/msid-82406199,width-460,resizemode-4/Why-freshers-must-attend-a-hackathon.jpg?75831"
          body=" ETH Singapore"
          className="card_sub"
        />
        <Card1
          title="Mumbai 2017"
          imgurl="https://cdn5.vectorstock.com/i/thumb-large/27/09/hackathon-signs-round-design-template-thin-line-vector-28032709.jpg"
          body="IIT Mumbai "
          className="card_sub"
        />
        </div>
        {/* <div className="work_card1">
    
        <Card1
          title="Mumbai 2017"
          imgurl="https://content.techgig.com/thumb/msid-82406199,width-460,resizemode-4/Why-freshers-must-attend-a-hackathon.jpg?75831"
          body=" L&T Tech, Powai "
          className="card_sub"
        />
        <Card1
          title="New Delhi 2015"
          imgurl="https://cdn5.vectorstock.com/i/thumb-large/27/09/hackathon-signs-round-design-template-thin-line-vector-28032709.jpg"
          body="91 Springboard "
          className="card_sub"
        />
        </div> */}

        <div className="theme">
            <h1>Themes of Blockchain Hackathons</h1>
            <p>The themes in which you can register</p>
            <div className="theme_topic">
              <p className="para">DeFi</p>
              <p className="para">DAOs</p>
              <p className="para">NFTs </p>
              <p className="para">Metaverse </p>
              <p className="para">L1 & L2 bridges </p>
              <p className="para"> Gaming </p>


            </div>
        </div>
        <Footer />
      
    </div>
  )
}

export default Workshop