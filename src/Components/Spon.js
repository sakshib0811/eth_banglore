import React from 'react'
import "./Spon.css"
function Spon() {
  return (
      <div>
        <div className='spon'>
            <h1 className='spon_title'>Sponsored By</h1>
            <p>This Awesome event is Sponsored by the following partners. </p>
        </div>
        <div className='spon_names'>

            <div className='spon_name_title'>
                <div className='spon_name_row row1'>
                    <h1>Consensya</h1>
                    <p>Ethereum Foundation</p>
                </div>
                <div className='spon_name_row'>
                <h1>Consensya</h1>
                    <p>Ethereum Foundation</p>
                </div>
                <div className='spon_name_row'>
                    <h1>Consensya</h1>
                    <p>Ethereum Foundation</p>
                </div>
                <div className='spon_name_row'>
                    <h1>Consensya</h1>
                    <p>Ethereum Foundation</p>
                </div>
                
            </div>

        </div>
      </div>
    
  )
}

export default Spon