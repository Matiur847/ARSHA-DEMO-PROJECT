import React from 'react';
import './CallToAction.css'
import { Container, Row } from 'react-bootstrap';
import ctaBg from '../../img/cta-bg.jpg'

const CallToAction = () => {

    return (
        <div className='cta-section'>
            <Container>
                <Row className='align-items-center' data-aos='zoom-in'>
                    <div className="col-lg-9">
                        <div className="cta-container">
                            <div className="cta-title">
                                <h3>Call To Action</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cta-button mt-4">
                            <button className='button'>Call To Action</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CallToAction;