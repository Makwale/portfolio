import React from 'react';

function Project(props){
    const styles = { 
        backgroundColor: "#FCFCFC", 
        overflow: "auto", 
        float: "left", 
        padding: "10px", 
        boxShadow: "0px 0px 1px .1 #888888", 
        marginBottom: "30px",
        borderRadius: "7px",
        border: "1px solid lightgray"
    }

    return (
        <div style={styles}>
            <img style={{float: props.side, marginRight: props.marginRight, marginLeft: props.marginLeft}} className="project-img" src="/assets/el.jpg"/>
            <h2 className="project-name">eLearning Academy</h2>
            <p className="project-desc">Is a web and mobile application that students can enrol for a course and access course lessons anytime and everywhere</p>
            
            
                <ul className="tech">
                    <li style={{color: "red"}}>
                        Technologies used: HTML5, CSS3, Typescript ,Javascript
                    </li>

                    <li>
                        Frameworks: Angular,Angular Material and Ionic
                    </li>

                    <li>Frameworks: Angular,Angular Material and Ionic</li>

                    <li>Back end and Database: Firebase ( Firestore)</li>
                </ul>
           
            
        </div>
    )
}


export default Project;