import React, { useEffect, useState } from 'react'
import "./product.scss"
import { FaMinus } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { product } from './Mahsulot/Mahsulot';
import SidebarCategory from './SidebarCategory/SidebarCategory';


const Product = () => {
  const [count, setCount] = useState(1);

  return (
    <div className='product'>
      <SidebarCategory />
      <div className='product_cards'>
        {
          product.map((item, index) => {
            return <div key={index} className='product_card'>
              <div className='product_img'>
                <img src={item.img} alt="img" />
              </div>

              <div className=' px-[15px]'>
                <h4>{item.name}</h4>
                <div className='product_price'>
                  <h6>{item.price}</h6>
                  <p>{item.discount}</p>
                </div>
                <div className=' product_footer'>
                  <div className=' counter'>
                    <button onClick={() => decrement(item.id)}><FaMinus /></button>
                    <span>{count}</span>
                    <button onClick={() => increment(item.id)}><GrAdd /></button>
                  </div>
                  <h6>KPI+1</h6>
                  <Link to={`/singlePage/${item.id}`} className='batafsil'>Batafsil</Link>
                </div>
              </div>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default Product