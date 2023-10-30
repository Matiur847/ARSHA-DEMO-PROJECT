import React from 'react';
import './Faq.css'
import { AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row, UncontrolledAccordion } from 'reactstrap';

const Faq = () => {
    return (
        <section className='faq-section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg='12' className='text-center portfolio mt-3' data-aos='fade-down'>
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                    <Col lg='12' className='w-75 d-flex align-items-center justify-content-center'>
                        <UncontrolledAccordion defaultOpen="1">
                            <AccordionItem className='accordionCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic">
                                <AccordionHeader targetId="1">
                                    <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='accordionCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic">
                                <AccordionHeader targetId="2">
                                    <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='accordionCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic">
                                <AccordionHeader targetId="3">
                                    <h4>Feugiat scelerisque varius morbi enim nunc?</h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='accordionCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic">
                                <AccordionHeader targetId="4">
                                    <h4>Dolor sit amet consectetur adipiscing elit?</h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="4">
                                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='accordionCard' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic">
                                <AccordionHeader targetId="5">
                                    <h4>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</h4>
                                </AccordionHeader>
                                <AccordionBody accordionId="5">
                                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faq;