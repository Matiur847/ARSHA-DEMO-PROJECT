import React from 'react';
import './ProductCard.css'
import { Col, Container, Row } from 'react-bootstrap';

import AddIcon from '@mui/icons-material/Add';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const { id, title, image01, category, desc } = props.item;

    return (
        <div className='product-tt'>
            <div className="product-img">
                <img src={image01} alt="" className='w-100' data-aos='zoom-in' />
                <div className="product-info">
                    <div className="p-content">
                        <h5>{id}</h5>
                        <p className='both-color'>{title}</p>
                    </div>
                    <div className="p-button">
                        <button>
                            <AddIcon />
                        </button>
                        <Link className='both-color'>
                            <InsertLinkIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;