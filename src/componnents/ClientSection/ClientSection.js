import React, { useEffect } from 'react';
import './ClientSection.css'

import client1 from '../../img/clients/client-1.png'
import client2 from '../../img/clients/client-2.png'
import client3 from '../../img/clients/client-3.png'
import client4 from '../../img/clients/client-4.png'
import client5 from '../../img/clients/client-5.png'
import client6 from '../../img/clients/client-6.png'

import Aos from 'aos';
import 'aos/dist/aos.css'
import { Container } from 'react-bootstrap';

const ClientSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='client-s'>
            <Container>
                <div className="client-section">
                    <div className="img" data-aos="zoom-in">
                        <img src={client1} alt="" />
                        <img src={client2} alt="" />
                        <img src={client3} alt="" />
                        <img src={client4} alt="" />
                        <img src={client5} alt="" />
                        <img src={client6} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClientSection;