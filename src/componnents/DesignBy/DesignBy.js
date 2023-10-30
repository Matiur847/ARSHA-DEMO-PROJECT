import React from 'react';
import './DesignBy.css'

import { Col, Container, Row } from 'react-bootstrap';


const DesignBy = () => {
    return (
        <section className='design-section'>
            <Container>
                <Row >
                    <Col lg='12' style={{color: 'white'}}>
                        <div className="split DgnSplit ">
                            <p>© Copyright <span>Arsha.</span> All Rights Reserved</p>
                            <p><span>Designed by</span> BootstrapMade</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DesignBy;