import React from 'react';
import './Subscribe.css'

import { Col, Container, Row } from 'react-bootstrap';


const Subscribe = () => {
    return (
        <section className='subs-section'>
            <Container>
                <Row data-aos='zoom-in'>
                    <Col lg='12' className='d-flex align-items-center justify-content-center' data-aos='zoom-in'>
                       <div className="subs-content d-flex">
                        <h3>Join Our newsletter</h3>
                            <p className=' mb-4'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <div className="subs-input">
                                <input type="email" />
                                <button>Subscribe</button>
                            </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Subscribe;