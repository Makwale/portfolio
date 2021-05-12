import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper';
import Cover from './IntroCorver';

import './styles.css'

function SwiperIntro(){

    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Parallax]);

    return (
        <div>
            <Swiper className="swiper-container"
        
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{delay: 5000}}
                parallax={true}
                speed={1500}
                effect={"fade"}
                >
                
                <SwiperSlide style={{textAlign: "center"}}>
                    
                    <img src='/assets/pexels-photo-270348.jpg' />
                    <div className="title" data-swiper-parallax-y="-200">
                        
                        <img style={{width: "150px", height: "150px", borderRadius: "50%", border: "4px solid white"}} src="assets/pp.jpg" />
                        <h1 data-swiper-parallax-y="-250" className="greeting">
                            Hi, I'm Manuel Mametja
                        </h1>

                        <h3 data-swiper-parallax-y="-550" style={{letterSpacing: "1px", fontWeight: "light", margin: "0px"}}>
                           Junior Front End Developer
                        </h3>
                    </div>
                   
                    <Cover />

                </SwiperSlide>
                <SwiperSlide>
                    <img src='/assets/Front-End-Development-Bundle.jpg' />

                    <div className="title" data-swiper-parallax-y="-200">
                        <h1 style={{fontSize: "350%", margin: "0px"}} data-swiper-parallax-y="-200">
                            Web Development
                        </h1> 
                       <p style={{fontSize: "120%", margin: "0px"}} data-swiper-parallax-y="-300">I am proficient with building web applicatins using latest trending frameworks <br />Anagular 10+ and React.js</p>
                    </div>
                    <Cover />
                </SwiperSlide>
                <SwiperSlide>

                    <img src='/assets/vector-mobile-app-gui.jpg' />
                    
                    <div className="title" data-swiper-parallax-y="-200">
                        <h1 style={{fontSize: "350%", margin: "0px"}} data-swiper-parallax-y="-200">
                            Mobile App Development
                        </h1> 
                    <p style={{fontSize: "120%", margin: "0px"}} data-swiper-parallax-y="-300">Adept in constructing cross platform native mobile applications using powerful frameworks and libraries <br />Ionic, Capacitor and React Native</p>
                    </div>
                 
                    
                    <Cover />
                </SwiperSlide>
            
            ...
            </Swiper>

           

        </div>
         
    )
}

export default SwiperIntro;