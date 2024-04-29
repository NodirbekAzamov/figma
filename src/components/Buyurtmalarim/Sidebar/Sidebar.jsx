import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import "./style.scss"
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_menu'>
                <IoSettingsOutline className=' text-[20px]'/>
                <h6>Yordam</h6>
            </div>
        </div>
    )
}
