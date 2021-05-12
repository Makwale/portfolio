import React from 'react';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects(){
    AOS.init()

    return (
        
        <div className="container">
            <h1 
            className="headers" 
            data-aos="fade-down" 
            data-aos-delay="50" 
            data-aos-duration="1000"
            data-aos-once="true">Projects</h1>
            <div 
            data-aos="fade-right" 
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="true">

                <Project  side="left"/>
            </div>

            <div 
            data-aos="fade-left" 
            data-aos-delay="150" 
            data-aos-duration="1000"
            data-aos-once="true">
                <Project  side="right" marginRight="0px"/>
            </div>
        </div>
        
    )
}


export default Projects;