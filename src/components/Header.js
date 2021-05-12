import React, { Component } from 'react'
import NavBar from './NavBar';

import './styles.css';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1 style={{color: "white", display: "inline"}}>
                    PORTFOLIO
                </h1>

                <NavBar />
            </div>
        )
    }
}

export default Header;