import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './WhyUs.css'

import WhyUsImg from '../../img/why-us.png'

const WhyUs = () => {
    return (
        <div className='why-container'>
            <Container>
                <div className="why-section" id='Why'>
                    <div className="w-title" data-aos = "fade-up">
                        <h3>Eum ipsam labourm deleniti <span>velit pariatur architecto aut nihil</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                        
                        <Accordion flush>
                            <Accordion.Item eventKey="0" className='according'>
                                <Accordion.Header>01 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                                <Accordion.Body>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='according'>
                                <Accordion.Header>02 Feugiat scelerisque varius morbi enim nunc?</Accordion.Header>
                                <Accordion.Body>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='according'>
                                <Accordion.Header>03 Dolor sit amet consectetur adipiscing elit?</Accordion.Header>
                                <Accordion.Body>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="w-img" data-aos="zoom-in-up">
                        <img src={WhyUsImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUs;