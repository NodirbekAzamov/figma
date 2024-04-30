import React from 'react'
import "./style.scss"
import Img from "../../../assets/Histogram.png"
import { SlArrowDown } from "react-icons/sl";
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
    </div>
  )
}

export default Statistika
