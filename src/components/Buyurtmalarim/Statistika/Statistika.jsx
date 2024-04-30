import React from 'react'
import "./style.scss"
import Img from "../../../assets/Histogram.png"
import { SlArrowDown } from "react-icons/sl";
import { CgCalendarDates } from "react-icons/cg";

import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Statistika = () => {
  return (
    <div className='statistika'>
      <div className='statistika_boxes'>

        <div className="statistika_box">
          <h6>Eng ko’p sotilgan tovarlar <span><SlArrowDown className='text-[15px]' /></span></h6>
          <div className='statistika_box-chart'>
            <div className='chart_left'>
              <div className='chart_left-box'>
                <h5>24%</h5>
                <p>Elektron choynak</p>
              </div>
              <div className='chart_left-box'>
                <h5>24%</h5>
                <p>Elektron choynak</p>
              </div>
              <div className='chart_left-box'>
                <h5>24%</h5>
                <p>Elektron choynak</p>
              </div>
              <div className='chart_left-box'>
                <h5>24%</h5>
                <p>Elektron choynak</p>
              </div>
            </div>
            <div className='chart_right'>
              <img src={Img} alt="" />
              <h6>100%</h6>
            </div>
          </div>
        </div>
        <div className="statistika_box">
          <h6>Eng ko’p xarid qilgan mijozlar </h6>
          <div className='statistika_box-chart2'>
            <div className='chart_box'>
              <h6>Palonchiyev. X</h6>
              <button>Ko'rish</button>
            </div>
            <div className='chart_box'>
              <h6>Palonchiyev. X</h6>
              <button>Ko'rish</button>
            </div>
            <div className='chart_box'>
              <h6>Palonchiyev. X</h6>
              <button>Ko'rish</button>
            </div>
          </div>
        </div>

        <div className="statistika_box">
          <h6>Banklar bo’yicha statistika</h6>
          <div className='statistika_box-chart3'>
            <div className="chart_left">
              <div className='bg1'></div>
              <div className='bg1'></div>
              <div className='bg1'></div>
            </div>
            <div className="chart_right">
              <div className='chart_right-box'>
                <div className='chart_bg'></div>
                <h5>Hamkor Bank</h5>
              </div>
              <div className='chart_right-box'>
                <div className='chart_bg'></div>
                <h5>Infin Bank</h5>
              </div>
              <div className='chart_right-box'>
                <div className='chart_bg'></div>
                <h5>Biznesni qo’llab quvatlash banki</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='statistika_table'>
        <div className=' table'>
          <div className='table_date'>
            <div className='table_inp'>
              <input type="text" />
              <p>dan</p>
            </div>
            <div className='table_inp'>
              <input type="text" />
              <p>gacha</p>
            </div>
            <span><CgCalendarDates className='text-[40px]' /></span>
          </div>
          <button className='table_btn'>Filter</button>
        </div>

        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  )
}

export default Statistika
