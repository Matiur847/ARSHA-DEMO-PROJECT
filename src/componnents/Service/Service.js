import React from 'react';
import './Service.css'
import { Container } from 'react-bootstrap';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import JoinFullIcon from '@mui/icons-material/JoinFull';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SpeedIcon from '@mui/icons-material/Speed';
import LayersIcon from '@mui/icons-material/Layers';

const Service = () => {

    const fontStyle = {
        fontSize: 40,
        // color: 'blue'
    }

    return (
        <div className='service-section' id='service'>
            <Container>
                <div className="service-container" data-aos="fade-down">
                    {/* <div className="ser-title"> */}
                    <h2>SERVICES</h2>
                    {/* </div> */}
                    {/* <div className="ser-para"> */}
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    {/* </div> */}
                </div>
                <div className="service-card" data-aos="zoom-in">
                    <div className="card">
                        <div className="logo">
                            <i><JoinFullIcon style={fontStyle}/></i>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda.</p>
                    </div>
                    <div className="card">
                        <div className="logo">
                            <i><TextSnippetIcon style={fontStyle} /></i>
                        </div>
                        <h3>Sed ut perspici</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda.</p>
                    </div>
                    <div className="card">
                        <div className="logo">
                            <i><SpeedIcon style={fontStyle} /></i>
                        </div>
                        <h3>Magni Dolores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda.</p>
                    </div>
                    <div className="card">
                        <div className="logo">
                            <i><LayersIcon style={fontStyle} /></i>
                        </div>
                        <h3>Nemo Enim</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Service;