import React, { useState } from 'react'
import "./product.scss"
import { TbToolsKitchen2 } from "react-icons/tb";
import Img from "../../assets/choynak_img.jpg"
import { FaMinus } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Product = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([
    { id: 1, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 2, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 3, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 4, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 5, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 6, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 7, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
    { id: 8, name: "Elekt choynak 1litr", img: `${Img}`, Sotuvchi: "Chakana savdo", Omborda: "120 dona", price: "99,000so'm", discount: "129,000so'm", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ad minima soluta sequi dolorem delectus" },
  ])



  const increment = (id) => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (id) => {
    setCount(prevCount => prevCount - 1);
    
  };
  
  return (
    <div className='product'>
      <div className='product_btns'>
        <Link to="/" className='product_btn'><TbToolsKitchen2 className='text-[23px] h-full' /><h5> Elektor Choynak</h5></Link>
        <Link to="" className='product_btn'><TbToolsKitchen2 className='text-[23px] h-full' /><h5> Aksessuarlar</h5></Link>
        <Link to="" className='product_btn'><TbToolsKitchen2 className='text-[23px] h-full' /><h5> Oshhona buyumlari</h5></Link>
        <Link to="" className='product_btn'><TbToolsKitchen2 className='text-[23px] h-full' /><h5>Maishi texnika</h5></Link>
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
                    <button onClick={()=>decrement(item.id)}><FaMinus /></button>
                    <span>{count}</span>
                    <button onClick={()=>increment(item.id)}><GrAdd /></button>
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