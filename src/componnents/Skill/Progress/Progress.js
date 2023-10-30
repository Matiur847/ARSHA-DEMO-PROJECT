import React from 'react';
import './Progress.css'

import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = () => {
    return (
        <div>
            <ProgressBar animated now={10} />
        </div>
    );
};

export default Progress;