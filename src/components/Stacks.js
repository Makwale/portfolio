import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

class Stacks extends Component{

    
    constructor(){
        super()
        SwiperCore.use([Navigation, Pagination, Autoplay, Parallax]);
    }

    render(){

        AOS.init();
    
        return (
            <div className="container" >
                <h1 
                className="headers" 
                data-aos="fade-down" 
                data-aos-delay="50" 
                data-aos-duration="1000" 
                data-aos-once="true">My Stacks</h1>
    
                <Swiper className="swiper-stack"
                    data-aos="fade-left" 
                    data-aos-delay="100" 
                    data-aos-duration="1000"
                    data-aos-once="true"
                    slidesPerView={2}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{delay: 5000}}
                    parallax={true}
                    speed={1500}
                    
                    >
                    
                    <SwiperSlide >
                        
                        <img style={{height: "100%"}} src='/assets/angular.png' />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height: "100%"}} src='/assets/i.jpeg' />
                    
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img style={{height: "100%"}} src='/assets/react.jpg' />
                    
                    </SwiperSlide>
    
                    <SwiperSlide>
                        <img style={{height: "100%"}} src='/assets/ts.png' />
                    
                    </SwiperSlide>
    
                    <SwiperSlide>
                        <img style={{height: "100%"}} src='/assets/js.jpg' />
                    
                    </SwiperSlide>
                ...
                </Swiper>
    
               
            </div>
        )
    }
}

export default Stacks;