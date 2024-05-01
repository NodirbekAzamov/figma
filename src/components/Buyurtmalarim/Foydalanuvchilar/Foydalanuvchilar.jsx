import React from 'react'
import "./style.scss"
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import { Table } from 'antd';
const columns = [
  {
    title: '#',
    dataIndex: 'id',
    sorter: {
      compare: (a, b) => a.id - b.id,
      multiple: 1,
    },
  },
  {
    title: ' Foydalanuvchi nomi',
    dataIndex: 'users',
    sorter: {
      compare: (a, b) => a.users - b.users,
      multiple: 2,
    },
  },
  {
    title: 'Lavozimi',
    dataIndex: 'lavozim',
    sorter: {
      compare: (a, b) => a.lavozim - b.lavozim,
      multiple: 3,
    },
  },
  {
    title: 'Telifon',
    dataIndex: 'telifon',
    sorter: {
      compare: (a, b) => a.telifon - b.telifon,
      multiple: 4,
    },
  },
  {
    title: 'action',
    dataIndex: 'action',
    sorter: {
      compare: (a, b) => a.action - b.action,
      multiple: 5,
    },
  },
];

const data = [
  {
    key: '1',
    id: '1',
    users: "Ali",
    lavozim: "Ish boshqaruvchi",
    telifon: " +99894 100 00 03",
    action: [<CiEdit className='text-[30px] p-[5px] cursor-pointer d-inline w-[30px] h-[30px] rounded-[3px] bg-[#443085] text-[#fff]'/> ,  <RiDeleteBinLine className='text-[20px] cursor-pointer d-inline p-[5px] rounded-[3px] bg-[#443085] w-[30px] h-[30px] text-[red]'/>] 
  },
  {
    key: '2',
    id: '2',
    users: "DBdt",
    lavozim: "Sotuvchi",
    telifon: " +99894 100 00 02",
  },
  {
    key: '3',
    id: '3',
    users: "Dbtb",
    lavozim: "Boshliq",
    telifon: " +99894 100 00 01",
  },
  {
    key: '4',
    id: '4',
    users: "bdtbdt",
    lavozim: "Kimdur",
    telifon: " +99894 100 00 00",
  },
  {
    key: '5',
    id: '5',
    users: "hbknj",
    lavozim: "jhbkn",
    // action: [<CiEdit className='text-[30px] p-[5px] d-inline w-[30px] h-[30px] rounded-[3px] bg-[#443085] text-[#fff]'/> ,  <RiDeleteBinLine className='text-[20px] d-inline p-[5px] rounded-[3px] bg-[#443085] w-[30px] h-[30px] text-[red]'/>] 
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Foydalanuvchilar = () => {
  return (
    <div className='users'>
      <div>
        <h2>Xodimlar</h2>
        <div className='user_btn'>
          <button>xlsx./pdf</button>
          <button>Qo'shish</button>
        </div>
      </div>
      <div className='border'>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  )
}

export default Foydalanuvchilar