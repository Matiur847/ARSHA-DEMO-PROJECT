import React from 'react';
import './Contact.css'
import { Col, Container, Row } from 'reactstrap';

import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { MDBBtn, MDBCheckbox, MDBInput, MDBTextArea, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <section className='contact-section'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center portfolio mb-4' data-aos='fade-up'>
                        <h2>CONTACT</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                    <Col lg='4' data-aos='fade-up'>
                        <div className="contact-card1">
                            <div className="phone">
                                <i>< PhoneIphoneIcon /></i>
                                <h3>Call</h3>
                                <span>019999965484</span>
                            </div>
                            <div className="email mt-4">
                                <i>< AlternateEmailIcon /></i>
                                <h3>Email</h3>
                                <span>info@example.com</span>
                            </div>
                            <div className="location mt-4">
                                <i>< PhoneIphoneIcon /></i>
                                <h3>Location</h3>
                                <span>A108 Adam Street, New York, NY 535022</span>
                            </div>
                            <div className="maps-section mt-4">
                                <iframe id="inlineFrameExample" title="Inline Frame Example" width='370' height='300' src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"> </iframe>
                            </div>
                        </div>
                    </Col>
                    <Col lg='8' data-aos='fade-up'>
                        <div className="contact-card2">
                            <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '700px' }}>

                                <MDBValidationItem invalid feedback='Please provide your name.'>
                                    <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide your email.'>
                                    <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide mail subject.'>
                                    <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide a message text.'>
                                    <MDBTextArea style={{minHeight: '218px'}} wrapperClass='mb-4' label='Message' required />
                                </MDBValidationItem>

                                {/* <MDBValidationItem feedback=''>
                                    <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
                                </MDBValidationItem> */}

                                {/* <MDBBtn type='submit' color='primary' block className='priceActiv my-4'>
                                    Send
                                </MDBBtn> */}
                                <button className='priceActiv'>
                                    Send Message
                                </button>
                            </MDBValidation>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;