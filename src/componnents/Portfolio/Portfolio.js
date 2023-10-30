import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import { Col, Container, Row } from 'react-bootstrap';
import product from '../../assets/fakeData';
import ProductCard from '../ProductCard/ProductCard';

const Portfolio = () => {

    const [category, setCategory] = useState('ALL')
    const [allProduct, setProducts] = useState(product)

    useEffect(() => {
        if (category === 'ALL') {
            setProducts(product)
        }

        if (category === 'APP') {
            const filterProduct = product.filter(item => item.category === 'app')
            setProducts(filterProduct)
        }

        if (category === 'CARD') {
            const filterProduct = product.filter(item => item.category === 'card')
            setProducts(filterProduct)
        }

        if (category === 'WEB') {
            const filterProduct = product.filter(item => item.category === 'web')
            setProducts(filterProduct)
        }

    }, [category]);

    return (
        <section className='portfolio-section' id='portfolio'>
            <Container>
                <Row data-aos='fade-up'>
                    <Col lg='12' className='text-center portfolio'>
                        <h2>PORTFOLIO</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                    <Col lg='12' className='d-flex justify-content-center gap-3'>
                        <button className={`allBtn ${category === 'ALL' ? 'btnActive' : ''}`}
                            onClick={() => setCategory('ALL')}>All</button>
                        <button className={`${category === 'APP' ? 'btnActive' : ''}`} onClick={() => setCategory('APP')}>App</button>
                        <button className={`${category === 'CARD' ? 'btnActive' : ''}`} onClick={() => setCategory('CARD')}>Card</button>
                        <button className={`${category === 'WEB' ? 'btnActive' : ''}`} onClick={() => setCategory('WEB')}>Web</button>
                    </Col>
                    {
                        allProduct.map(item => (
                            <Col md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;