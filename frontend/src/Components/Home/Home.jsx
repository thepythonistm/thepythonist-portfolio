import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Sidebarnav from "../Sidebarnav/Sidebarnav";

const Home = () => {
    const navigate = useNavigate();
    const images = [
        "./images/356c6a37f4dc84a691017298e03686de.jpg",
        "./images/67365e3f0acec58e1c048c2d01017cf7.jpg",
        "./images/41180096aa80e0b91881a7703a183276.jpg",
        "./images/05464693268fd1a5c3f82dc7c27c7467.jpg",
        "./images/eae704a14d3d428d0a8d2d808b5c2b24.jpg",
    ]

    return(
        <div className="home-container">
            <div className="text">
                <div className="home-text">
                    <h1 className="home-t">Pythonist Mouhssin</h1>
                    <strong className="role">Full-Stack Web Developer & Machine <br /> Learning Integrator</strong>
                    <p className="home-p">I craft end-to-end, intelligent web experiences by <br /> combining clean UI design with powerful <br /> backend and machine learning integrations.</p>
                </div>
            
            </div>
            <div className="sidebar-wrapper">
                <Sidebarnav />
            </div>
         
            <div className="exemples">
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2} navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} loop
                breakpoints={{
                  0: {
                    slidesPerView: 1, 
                  },
                  601: {
                    slidesPerView: 2, 
                  },
                }}
                className="img-swiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} className="img-slide"/>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

         
        </div>
    )
}
export default Home;