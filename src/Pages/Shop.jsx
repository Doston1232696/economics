import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollection/NewCollections'
import NewLatter from '../components/NewLater/NewLatter'



const Shop = () => {
  return (
   <>
   <div>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewLatter/>
    
    
   </div>
   
   
   </>
  )
}

export default Shop