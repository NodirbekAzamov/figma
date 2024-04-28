import React from 'react'
import Spark_img from "../../assets/spark_img.webp"
import "./aboutUs.scss"
const Aloqa = () => {
  return (
    <div className='aboutUs'>
      <img src={Spark_img} alt="img" />
      <h6> <span className=' text-[red]'>Aksiyada</span> ishtirok etib <span className=' text-[#462c72]'>Spark</span> avtomobilini yutib oling!</h6>
      <button>Batafsil</button>
    </div>
  )
}

export default Aloqa