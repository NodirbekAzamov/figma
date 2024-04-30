import React, { useEffect, useState } from 'react'
import { product } from './Mahsulot/Mahsulot'
import SidebarCategory from './SidebarCategory/SidebarCategory'
import "./singlePage.scss"

import Img from "../../assets/choynak2.png"
import { FaCartArrowDown, FaMinus } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr'
import { CiSearch } from 'react-icons/ci'
import { SlArrowDown } from 'react-icons/sl'
const SinglePage = () => {
  const [count, setCount] = useState(1);
  const id = +window.location.href.split("/")[4]
  const product2 = product.find((item) => item.id === id)

  const [img, setImg] = useState([
    { id: 1, img: Img },
    { id: 2, img: Img },
    { id: 3, img: Img },
    { id: 4, img: Img },
  ])
  const decrement = (id) => {

  }
  const increment = (id) => {

  }

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
        <h6 onClick={changeFiltr}>Filtr <span><SlArrowDown className='text-[10px]' /></span></h6>
        <span><FaCartArrowDown /></span>
        <div className={`${filtr ? "active" : "none"} filtr`}>
          <SidebarCategory />
        </div>
      </div>

      <div className=' px-[50px] py-[20px] d-flex items-start gap-[90px]'>
        <div className='sidebar'>
          <SidebarCategory />
        </div>
        <div className='singlePage'>

          <div className='single_img'>
            <h6>Mahsulot haqida</h6>
            <div className='single_left'>
              {
                img.map((item, index) => {
                  return <div className='imgs' key={index}>
                    <img src={item.img} alt="img" />
                  </div>
                })
              }
            </div>
            <h6>O’xshash vositalar</h6>
          </div>

          <div className='single_right'>
            <div className='single_right-img'>
              <img src={product2.img} alt="img" />
            </div>

            <div className='right'>
              <h3>{product2.name}</h3>
              <p>{product2.desc}</p>
              <div className='right_price'>
                <div className=' d-flex flex-col gap-[5px]'>
                  <h6>{product2.price}</h6>
                  <p>Sotuvchi</p>
                  <p>Omborda</p>
                </div>
                <div className=' d-flex flex-col gap-[5px]'>
                  <p className=' text'>{product2.discount}</p>
                  <p>{product2.Sotuvchi}</p>
                  <p>{product2.Omborda}</p>
                </div>
                <button className=' bg-[#EE1515] px-[20px] py-[4px] text-[#fff] rounded-[5px]'>Aksiya</button>
              </div>

              <div className=' counter'>
                <button onClick={() => decrement()}><FaMinus /></button>
                <span>{count}</span>
                <button onClick={() => increment()}><GrAdd /></button>
              </div>
              <button className='right_btn'>Xarid qilish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage