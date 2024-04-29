
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TbToolsKitchen2 } from "react-icons/tb";
import "./style.scss"
export default function SidebarCategory() {
    const [link, setLink] = useState([
        { id: 1, title: "Statistika", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 2, title: "Qo’shish", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 3, title: "Foydalanuvchilar", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 4, title: "Buyurtmalar", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 5, title: "Hisob kitob", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 6, title: "Yordam", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
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
                    return <Link to="" key={index} onClick={() => activeLink(item.id)} className={id === item.id ? " product_btn-active" : "product_btn"}>{item.icon} <h5> {item.title}</h5></Link>
                })
            }
        </div>
    )
}
