import React from 'react';
import './PricingCard.css'
import { Col, Container, Row } from 'reactstrap';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Pricing = () => {

    return (
        <section className='pricing-section'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center portfolio mb-4' data-aos='fade-up'>
                        <h2>PRICING</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                    <Col lg='4' data-aos='zoom-out'>
                        <div className="pricing-card">
                            <div className="price-head">
                                <h4>Free Plan</h4>
                                <h2><sup>$</sup>0 <span>per month</span></h2>
                            </div>
                            <div className="CheckTodo">
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Quam adipiscing vitae proin</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nec feugiat nisl pretium</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nulla at volutpat diam uteera</p>
                                </div>
                                <div className="split">
                                    <i><CloseIcon /></i>
                                    <p className='lineThrough'>Pharetra massa massa ultricies</p>
                                </div>
                                <div className="split">
                                    <i><CloseIcon /></i>
                                    <p className='lineThrough'>Massa ultricies mi quis hendrerit</p>
                                </div>
                            </div>
                            <button className="pricingBtn">Get Started</button>
                        </div>
                    </Col>
                    <Col lg='4'  data-aos='zoom-out'>
                        <div className="pricing-card thirdDiv">
                            <div className="price-head">
                                <h4>Free Plan</h4>
                                <h2><sup>$</sup>29 <span>per month</span></h2>
                            </div>
                            <div className="CheckTodo">
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Quam adipiscing vitae proin</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nec feugiat nisl pretium</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nulla at volutpat diam uteera</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Pharetra massa massa ultricies</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Massa ultricies mi quis hendrerit</p>
                                </div>
                            </div>
                            <button className="priceActiv">Get Started</button>
                        </div>
                    </Col>
                    <Col lg='4' data-aos='zoom-out'>
                        <div className="pricing-card">
                            <div className="price-head">
                                <h4>Free Plan</h4>
                                <h2><sup>$</sup>49 <span>per month</span></h2>
                            </div>
                            <div className="CheckTodo">
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Quam adipiscing vitae proin</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nec feugiat nisl pretium</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Nulla at volutpat diam uteera</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Pharetra massa massa ultricies</p>
                                </div>
                                <div className="split">
                                    <i><CheckIcon /></i>
                                    <p>Massa ultricies mi quis hendrerit</p>
                                </div>
                            </div>
                            <button className="pricingBtn">Get Started</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;