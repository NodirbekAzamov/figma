import React from 'react'
import "./style.scss"
const BuyurtmaRoyhat = () => {
    return (
        <div className='buyurtmaRoyhat'>
            <div className='buyurtma_btn'>
                <button>xlsx./pdf</button>
                <button>Qo'shish</button>
            </div>
            <div className='buyurtma_table'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nomi</th>
                            <th>Narxi</th>
                            <th>Miqdori</th>
                            <th>Qo’shilgan sana</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>
                                <select name="" id="">
                                    {/* <option value="">ervrsvs</option> */}
                                </select>
                            </th>
                            <th><select name="" id=""></select></th>
                            <th><select name="" id=""></select></th>
                            <th rowSpan={2}><input type="date" className='border w-[200px] py-[8px] px-[10px] rounded-[8px]'/></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        <tr className='border'>
                            <td className='border w-[100%]'>1</td>
                            <td className='border w-[100%]'>1</td>
                            <td className='border w-[100%]'>1</td>
                            <td className='border w-[100%]'>1</td>
                            <td className='border w-[100%]'>1</td>
                            <td className='border w-[100%]'>1</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyurtmaRoyhat