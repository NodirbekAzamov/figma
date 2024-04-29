import React from 'react'
import InputMask from "react-input-mask";

import "./aloqa.scss"
const Aloqa = () => {
    return (
        <div className='aloqa'>
            <h2>Mijoz Uchun</h2>
            <div className='aloqa_boxes'>
                <div className='aloqa_box'>
                    <label htmlFor="">Ism familiya</label>
                    <input type="text" />
                    
                </div>
                <div className='aloqa_box'>
                    <label htmlFor="">Telifon nomer</label>
                    <input type="text" />
                </div>
                <div className='aloqa_box'>
                    <label htmlFor="">Ism Pasvord seriya va raqam</label>
                    <input type="text" />
                </div>
                <div className='aloqa_box'>
                    <label htmlFor="">JSHIR</label>
                    <input type="text" />
                </div>
                <div className='aloqa_box'>
                    <label htmlFor="">Karta nomer</label>
                    {/* <input type="text" placeholder='0000 0000 0000 0000'/> */}
                    <InputMask mask="9999 9999 9999 9999"  alwaysShowMask={true}/>
                </div>
            </div>
        </div>
    )
}

export default Aloqa