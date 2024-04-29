import React from 'react'
import "./style.scss"
import Sidebar from '../../components/Buyurtmalarim/Sidebar/Sidebar'
import BuyurtmaRoyhat from '../../components/Buyurtmalarim/BuyurtmaRoyhati/BuyurtmaRoyhat'
const Buyurtmalarim = () => {
  return (
    <div className='buyurtmalarim'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='buyurtmaRoyhat'>
        <BuyurtmaRoyhat/>
      </div>
    </div>
  )
}

export default Buyurtmalarim