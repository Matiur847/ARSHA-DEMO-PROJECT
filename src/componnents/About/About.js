import React, { useEffect } from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import Aos from 'aos';

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <div id='about'>
            <Container>
                <div className="about-container">
                    <div className="title-div" data-aos="fade-down">
                        <h2>ABOUT US</h2>   
                    </div>
                    <div className="about-section">
                        <div className="first-title" data-aos="fade-right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error, tempora quod voluptas facilis quo repudiandae ab recusandae earum?</p>
                            <ul>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
                            </ul>
                        </div>
                        <div className="second-title" data-aos="fade-left">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates earum vitae mollitia error vero odit corporis facilis qui dicta! Fugiat, vero? Quaerat exercitationem expedita iusto sit voluptatem, nobis nesciunt quod cum necessitatibus, eos odio beatae.</p>
                            <button className='section-btn'>Learn More</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;