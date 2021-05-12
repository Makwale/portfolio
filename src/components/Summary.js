import React, { Component } from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Summary extends Component{


    render(){

        AOS.init()
        

        return (
            
            <div className="container" >

               
               <h1  className="headers" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">About Me</h1>
                <p  className="sum" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">I am a front end developer. I have 1 year experience as a front end developer, 
                    I am highly skilled in systems analysis and design such as wireframes, 
                    UX/UI design, web development and hosting, and mobile applications development using technologies like HTML5, 
                    CSS3 and Typescript with the frameworks like angular 10+, react.JS and ionic. 
                    Adept in managing all stages of the system development life cycle (SDLC), 
                    from system planning, requirements gathering and feasibility studies to development, 
                    implementation and maintenance. 
                    Recognized for developing custom web and mobile applications that optimize business performances 
                    and generate positive customer reviews.
                    <br/>
                        Proficient with object oriented programming languages as well as algorithms and data structures. 
                        I enjoy collaborating with colleagues and building cultures of cross functional 
                        working to provide greater platform for the success of the projects.
                    </p>
            
                
            </div>
        )
    }
}

export default Summary;