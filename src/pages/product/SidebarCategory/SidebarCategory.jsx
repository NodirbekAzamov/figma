import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TbToolsKitchen2 } from "react-icons/tb";
import "./style.scss"
export default function SidebarCategory() {
    const [link, setLink] = useState([
        { id: 1, title: "Elektor Choynak", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 2, title: "Aksessuarlar", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 3, title: "Oshhona buyumlari", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
        { id: 4, title: "Maishi texnika", icon: <TbToolsKitchen2 className='text-[23px] h-full' /> },
    ])
    const [id, setId] = useState(1)
    const activeLink = (id) => {

        sessionStorage.setItem("id", id);
        setId(id);
    }
    useEffect(() => {
        const id = +sessionStorage.getItem("id");
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
