import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import "./navbar.scss"
const Nabar = () => {
    return (
        // <div className=' w-full'>
        <div className='navbar'>
            <h2  className='navbar_logo'>Logo</h2>
            <div className='navbar_link '>
                <ul className='navbar_ul'>
                    <li>
                        <Link to="/">Asosiy Bo'lim</Link>
                        <Link to="/aboutUs">Biz haqimizda</Link>
                        <Link to="/mijonUchun">Muhsulot kategoryasi</Link>
                        <Link to="/aloqa">Aloqa</Link>
                    </li>
                </ul>
                <div className='navbar_search'>
                    <span><CiSearch className=' text-[16px] mt-[2px]'/></span>
                    <input type="text" placeholder='Qidiruv...' />
                </div>
                <HiOutlineUserCircle className=' text-[30px]' />
                <Link to="/buyurtmalarim"><SlBasket className=' text-[26px] ' /></Link>
            </div>
        </div>
        // </div>
    )
}

export default Nabar