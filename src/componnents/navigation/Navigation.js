import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'
import { Container } from 'react-bootstrap';
import Headroom from 'react-headroom';

const Navigation = () => {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >= 392) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)

    return (
        <Headroom>
            <div>
                <div className="nav-container">
                    <header>
                        <Container>
                            <nav className='mt-2'>
                                <div className="flex-item">
                                    <div className="logo">
                                        <h1>ARSHA</h1>
                                    </div>
                                    <div className="menu">
                                        <a href="#home">Home</a>
                                        <a href="#about">About</a>
                                        <a href="#service">Service</a>
                                        <a href="#portfolio">portfolio</a>
                                        <a href="#team">Team</a>
                                        <a href="#">Drop Down</a>
                                        <a href="#contact">Contact</a>
                                        <button className='button'>Get Started</button>
                                    </div>
                                </div>
                            </nav>
                        </Container>
                    </header>
                </div>
            </div>
        </Headroom>
    );
};

export default Navigation;