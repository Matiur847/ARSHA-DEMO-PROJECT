import React, { useEffect } from 'react';
import './Header.css'

import headerImg from '../../img/hero-img.png'

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { Container } from 'react-bootstrap';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='header-section' id='home'>
            <Container>
                <div className="header-container">
                    <div className="header-title" data-aos="fade-up">
                        <h2>Better Solutions For Your Busines</h2>
                        <h4>We are team of talented designers making websites with bootstrap</h4>
                        <div className="headerBtn d-flex">
                            <div className="button header-btn">Get Started</div>
                            <div className="button header-btn second-btn"><span className='watchBtn'><PlayCircleFilledIcon /></span> Watch Video</div>
                        </div>
                    </div>
                    <div className="header-img" data-aos="zoom-in">
                        <img src={headerImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;