import React from 'react'
import "./style.scss"
import { CiEdit } from 'react-icons/ci'
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
                            <th></th>
                            <th>
                                <select name="" id="">
                                    {/* <option value="">ervrsvs</option> */}
                                </select>
                            </th>
                            <th><select name="" id=""></select></th>
                            <th><select name="" id=""></select></th>
                            <th><input type="date" className='border w-[100%] py-[8px] px-[10px] rounded-[8px]'/></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Jami</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyurtmaRoyhat