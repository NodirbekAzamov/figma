import React, { useEffect, useState } from 'react'
import "./product.scss"
import { FaMinus } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { product } from './Mahsulot/Mahsulot';
import SidebarCategory from './SidebarCategory/SidebarCategory';
import { FaCartArrowDown } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from 'react-icons/ci';


const Product = () => {
  const [count, setCount] = useState(1);
  const [filtr, setFiltr] = useState(false)
  const changeFiltr = () => {
    setFiltr(prev => !prev)
  }
  return (
    <div>
      <div className='product1'>
        <div className='product_search'>
          <span><CiSearch className=' text-[18px] ' /></span>
          <input type="text" placeholder='Qidiruv...' />
        </div>
        <div className="change">
          <h6 onClick={changeFiltr}>Filtr <span><SlArrowDown className='text-[10px]' /></span></h6>
          <Link to={"/buyurtmalarim"} className=' text-[26px] '><FaCartArrowDown /></Link>
        </div>
        <div className={`${filtr ? "active" : "none"} filtr`}>
          <SidebarCategory />
        </div>
      </div>
      <div className='product'>
        <div className='product_sidebar'>
          <SidebarCategory />
        </div>
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
    </div>
  )
}

export default Product