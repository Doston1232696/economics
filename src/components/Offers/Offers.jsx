import React from 'react'
import "./Offers.css"
import exlusive_image from "../../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <>
    <div className='offers'>
        <div className='offers-left'>
            <h1 className='title1'>Exclusive</h1>
            <h1>Offers For you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CHECK Now</button>
        </div>
        <div className='offers-right'>
            <img src={exlusive_image} alt="" />
        </div>

    </div>
    
    </>
  )
}

export default Offers