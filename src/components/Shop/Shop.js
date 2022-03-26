import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Shop = () => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <Container fluid>
            <Row>
                <Col md={8} sm={9} xs={9} className='bg-info'>
                    <h1>This left side</h1>
                    <p>Total item load: {item.length}</p>
                </Col>
                <Col md={4} sm={3} xs={3} className='bg-warning'>
                    <h1>This is right side</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;