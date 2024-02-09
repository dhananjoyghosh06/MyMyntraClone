import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from '../images/hero1.webp';
import img2 from '../images/hero2.webp';
import img3 from '../images/hero3.webp';
import img4 from '../images/hero4.webp';
import img5 from '../images/hero5.webp';
import img6 from '../images/hero6.webp';
import img7 from '../images/hero7.webp';
import img9 from '../images/hero9.webp';
import img10 from '../images/hero10.webp';



const Home = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 1000,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        pauseOnHover:false,
        className: "center",
        swipeToSlide:true,
        focusOnSelect:true,
      };

  return (
    <div className='mt-[90px]'>
      <div className='cursor-pointer '>
        <Slider {...settings}>
          <div>
            <img src={img1} alt=''/>
          </div>
          <div>
            <img src={img2} alt=''/>
          </div>
          <div>
            <img src={img3} alt=''/>
          </div>
          <div>
            <img src={img4} alt=''/>
          </div>
          <div>
            <img src={img5} alt=''/>
          </div>
          <div>
            <img src={img6} alt=''/>
          </div>
          <div>
            <img src={img7} alt=''/>
          </div>
        </Slider>
      </div>
      <div className='mt-[30px] flex'>
        <div className='w-[50%] cursor-pointer'>
        <img src={img9} alt=''  />
        </div>
        <div className='w-[50%] cursor-pointer'>
        <img src={img10} alt=''/>
        </div>
        
      </div>
    </div>
  )
}

export default Home;