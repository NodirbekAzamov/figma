
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import "./style.scss"
import { HiOutlineCube } from 'react-icons/hi';
import { LiaWalletSolid } from 'react-icons/lia';
export default function SidebarCategory() {
    const [link, setLink] = useState([
        { id: 1, title: "Statistika", icon: <HiOutlineSquares2X2 className='text-[23px] h-full' /> },
        { id: 2, title: "Qo’shish", icon: <CiCirclePlus className='text-[23px] h-full' /> },
        { id: 3, title: "Foydalanuvchilar", icon: <LuUserCircle className='text-[23px] h-full' /> },
        { id: 4, title: "Buyurtmalar", icon: <HiOutlineCube className='text-[23px] h-full' /> },
        { id: 5, title: "Hisob kitob", icon: <LiaWalletSolid  className='text-[23px] h-full' /> },
        { id: 6, title: "Yordam", icon: <LuBadgeHelp className='text-[23px] h-full' /> },
    ])
    const [id, setId] = useState(1)
    const activeLink = (id) => {
        sessionStorage.setItem("buyurtma_id", id);
        setId(id);
        window.location.reload()
    }
    useEffect(() => {
        const id = +sessionStorage.getItem("buyurtma_id");
        if (id) {
            setId(id);
        } else {
            setId(1)
        }
    }, [])
    return (
        <div className='product_btns'>
            {
                link.map((item, index) => {
                    return <Link to="" key={index} onClick={() => activeLink(item.id)} className={id === item.id ? " product_btn-active " : "product_btn"}>{item.icon} <h5> {item.title}</h5></Link>
                })
            }
        </div>
    )
}
