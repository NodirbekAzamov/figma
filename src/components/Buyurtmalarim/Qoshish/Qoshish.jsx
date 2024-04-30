import React from 'react'
import "./style.scss"
import { CiEdit } from 'react-icons/ci'
const Qoshish = () => {
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
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className='w-[32px] h-[32px] p-[6px] bg-[#443085] rounded-[5px] text-[19px] text-white'><CiEdit /></button></td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Jami</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Qoshish