import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import "./navbar.scss"
const Nabar = () => {
    const navLink = [
        {id: 1, path: "/", text: "Asosiy Bo'lim"},
        {id: 2, path: "/aboutUs", text: "Biz haqimizda"},
        {id: 3, path: "/mijonUchun", text: "Muhsulot kategoryasi"},
        {id: 4, path: "/aloqa", text: "Aloqa"},
    ]
    const [activeLink, setActiveLink] = useState(1)
    const url =  window.location.href.split("/")[3]
    console.log(url);
    useEffect(()=> {
        const id = +sessionStorage.getItem("navLink")
        if (id) {
            setActiveLink(id)
        }else {
            setActiveLink(1)
        }
    },[])
    const changeLink = (id) => {
        setActiveLink(id)
        sessionStorage.setItem("navLink", id)
    }
    return (
        // <div className=' w-full'>
        <div className='navbar'>
            <Link to={'/'}  className='navbar_logo' onClick={window.location.reload}>Logo</Link>
            <div className='navbar_link '>
                <ul className={`navbar_ul`}>
                    <li className={url === "buyurtmalarim" ? "none" : ""}>

                    {
                        navLink?.map((item,index)=> {
                            return <Link className={item?.id === activeLink ? "border-b-[2px] border-b-[#443085] font-[600] text-black" : ""} key={index} to={item?.path} onClick={()=>changeLink(item?.id)}>{item?.text}</Link>
                        })
                    }
                    </li>
                    <li>
                        <Link to={""} className='text-black text-capitalize'>{url}</Link>
                    </li>
                </ul>

                <div className='navbar_search'>
                    <span><CiSearch className=' text-[16px] mt-[2px]'/></span>
                    <input type="text" placeholder='Qidiruv...' />
                </div>
                <HiOutlineUserCircle className=' text-[30px]' />
                <Link to="/buyurtmalarim" onClick={window.location.reload}><SlBasket className=' text-[26px] ' /></Link>
            </div>
        </div>
        // </div>
    )
}

export default Nabar