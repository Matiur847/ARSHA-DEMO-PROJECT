import React from 'react';
import './FooterContact.css'
import { Col, Container, Row } from 'react-bootstrap';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContact = () => {
    return (
        <section className='footer-contact' id='contact'>
            <Container>
                <Row data-aos='fade-up'>
                    <Col lg='3'>
                        <div className="footer-content">
                            <h2>ARSHA</h2>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p>United States</p>
                            <h5 className='mt-4'>Phone: <span>+1 5589 55488 55</span></h5>
                            <h5>Email: <span>info@example.com</span></h5>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <h3>Useful Link</h3>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Home</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Abous us</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Services</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Terms of service</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Privacy policy</p>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <h3>Our Services</h3>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>Web Design</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>
                                Web Development</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>
                                Product Management</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>
                                Marketing</p>
                        </div>
                        <div className="split">
                            <i> <ChevronRightIcon /> </i>
                            <p>
                                Graphic Design</p>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <h3>Our Social Networks</h3>
                        <p className='mt-3 mb-3'>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div className="socical footerContactIcon mt-4">
                            <a>
                                < TwitterIcon style={{ fontSize: 30, color: 'white' }} />
                            </a>
                            <a>
                                < FacebookIcon style={{ fontSize: 30, color: 'white' }} />
                            </a>
                            <a>
                                < InstagramIcon style={{ fontSize: 30, color: 'white' }} />
                            </a>
                            <a>
                                < LinkedInIcon style={{ fontSize: 30, color: 'white' }} />
                            </a>
                            <a>
                                < LocalPhoneIcon style={{ fontSize: 30, color: 'white' }} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FooterContact;