import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const footer = () => {
    return (
        <div className='footer'>
            <div className='footer_menu'>
                <div className='footer_left'>
                    <div className='footer_logo'>
                        <h1>Logo</h1>
                        <h6>Elektronika</h6>
                    </div>
                    <ul>
                        <li>
                            <Link>Menu</Link>
                            <Link>Asosiy bolim</Link>
                            <Link>Product</Link>
                            <Link>Aloqa</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer_right'>
                    <div>
                        <h2>Ma'lumot</h2>
                        <div className='footer_boxes'>
                            <div className='footer_box'>
                                <span><CiLocationOn /></span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sit obcaecati ad aliquid!</p>
                            </div>
                            <div className='footer_box' >
                                <span><FaPhoneAlt /></span>
                                <p>+998 00 000 20 00</p>
                            </div>
                            <div className='footer_box'>
                                <span><FaRegMessage /></span>
                                <p>elekteonika.uz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icon'>
                <div className=' footer_icon'>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default footer