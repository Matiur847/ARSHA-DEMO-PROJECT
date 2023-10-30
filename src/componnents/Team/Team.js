import React, { useState } from 'react';
import './Team.css'
import { Button, Col, Container, Row } from 'reactstrap';
import team from '../../teamFakeData';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';





const Team = () => {

    const [teamData, setTeamData] = useState(team);
    console.log(teamData)

    return (
        <section className='team-section' id='team'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center portfolio' data-aos='fade-down'>
                        <h2>TEAM</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                    {
                        teamData.map((item, index) => (
                            <Col lg='6' key={index} data-aos='zoom-in'>
                                <div className="team-card">
                                    <div className="t-img">
                                        <img src={item.image} alt="" className='w-100' />
                                    </div>
                                    <div className="t-details">
                                        <h4>{item.Name}</h4>
                                        <span>{item.title}</span>
                                        <p>{item.para}</p>
                                        <div className="socical">
                                            <a>
                                                < TwitterIcon style={{fontSize: 20}} />
                                            </a>
                                            <a>
                                                < FacebookIcon style={{fontSize: 20}} />
                                            </a>
                                            <a>
                                                < InstagramIcon style={{fontSize: 20}} />
                                            </a>
                                            <a>
                                                < LinkedInIcon style={{fontSize: 20}} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Team;