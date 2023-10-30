import React from 'react';
import './Skill.css'
import { Container } from 'react-bootstrap';

import ProgressBar from 'react-bootstrap/ProgressBar';

import skill from '../../img/skills.png'
import Progress from './Progress/Progress';

const Skill = () => {
    return (
        <div className='skill-section'>
            <Container>
                <div className="skill-container">
                    <div className="skill-img" data-aos="fade-right">
                        <img src={skill} alt="" />
                    </div>
                    <div className="title" data-aos="fade-up">
                        <h2>Voluptatem dignissimos provident quasi corporis voluptates</h2>
                        <p>Voluptatem dignissimos provident quasi corporis voluptates</p>
                        <div className="progress-b">
                            <div className="pTitle">
                                <div className="p-title">
                                    <p>HTML</p>
                                </div>
                                <div className="pp">
                                    <p>100%</p>
                                </div>
                            </div>
                            <ProgressBar animated now={100} />
                        </div>
                        <div className="progress-b">
                            <div className="pTitle">
                                <div className="p-title">
                                    <p>CSS</p>
                                </div>
                                <div className="pp">
                                    <p>90%</p>
                                </div>
                            </div>
                            <ProgressBar animated now={90} />
                        </div>
                        <div className="progress-b">
                            <div className="pTitle">
                                <div className="p-title">
                                    <p>Javascript</p>
                                </div>
                                <div className="pp">
                                    <p>75%</p>
                                </div>
                            </div>
                            <ProgressBar animated now={75} />
                        </div>
                        <div className="progress-b">
                            <div className="pTitle">
                                <div className="p-title">
                                    <p>Photoshop</p>
                                </div>
                                <div className="pp">
                                    <p>88%</p>
                                </div>
                            </div>
                            <ProgressBar animated now={88} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skill;