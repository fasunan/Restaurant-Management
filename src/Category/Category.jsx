import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import sliderImg1 from "../assets/home/slide1.jpg";
import sliderImg2 from "../assets/home/slide2.jpg";
import sliderImg3 from "../assets/home/slide3.jpg";
import sliderImg4 from "../assets/home/slide4.jpg";
import sliderImg5 from "../assets/home/slide5.jpg";
import SectionTitle from "../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle 
      subHeading={"From 11am - 10 pm"}
      heading={"ORDER ONLINE"}>
        
      </SectionTitle>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={sliderImg1} alt="" />
        <h3 className="text-white uppercase -mt-16 text-center text-3xl">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg2} alt="" />
        <h3 className="text-white uppercase -mt-16 text-center text-3xl">Pizzas</h3>
        </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg3} alt="" />
        <h3 className="text-white uppercase -mt-16 text-center text-3xl">Soups</h3>
        </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg4} alt="" />
        <h3 className="text-white uppercase -mt-16 text-center text-3xl">Desserts</h3>
        </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg5} alt="" />
        <h3 className="text-white uppercase -mt-16 text-center text-3xl">Salads</h3>
        </SwiperSlide>
      
    </Swiper>
    </section>
  );
};

export default Category;
