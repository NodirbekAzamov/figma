import React, { useEffect, useState } from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spark_img from "../../assets/Spark_img.png";
import Header_bg from "../../assets/header_bg.png";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [images, setImages] = useState([
    { id: 1, title1: "Aksiyada ", title2: "ishtirok etib", title3: "Spark", title4: " avtomobilini yutib oling!", image: Spark_img, },
    { id: 1, title1: "Aksiyada ", title2: "ishtirok etib", title3: "Spark", title4: " avtomobilini yutib oling!", image: Spark_img, },
    { id: 1, title1: "Aksiyada ", title2: "ishtirok etib", title3: "Spark", title4: " avtomobilini yutib oling!", image: Spark_img, },
  ]);


  return (
    <Slider {...settings} className="slider">
      {images.map((image, index) => (
        <div className='asosiybolim' key={index}>
          <img src={image.image} alt="img" className='spark_img' />
          <div className='asosiy_text'>
          <h6> <span className=' text-[red]'>{image?.title1}</span>{image?.title2}<span className=' text-[#462c72]'>{image?.title3}</span>{image?.title4}</h6>
            <button className='asosiy_bnt'>Batafsil</button>
          </div>
          <img src={Header_bg} alt="img" className='header_bg' />
        </div>
        
        // <div
        //   key={index}
        //   className="slider__card"
        //   onClick={() => setSearchClick(false)}>
        //   <div className="slider__left">
        //     <h4 className="slider__top">Welcome to Phoenix Tech</h4>
        //     <h1 className="slider__title">{image?.title}</h1>
        //     <p className="slider__subtitle">-{parseInt(image?.discountPercentage)}%</p>
        //     {/* <Button text="SHOP NOW" /> */}
        //   </div>
        //   <div className="slider__img">
        //     <div className="img">
        //       <img src={image.image} alt={`slide ${index + 1}`} />
        //     </div>
        //     <div className="slider__price">
        //       <ImPriceTag className="icon" />
        //       <p>${image?.price}</p>
        //     </div>
        //   </div>
        // </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
