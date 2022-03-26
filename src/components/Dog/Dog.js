import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Dogs = ({dog,addToCart}) => {
    return (
        <Card>
            <Card.Img variant="top" src={dog.img} />
            <Card.Body>
                <Card.Title>
                    Name: {dog.name}
                </Card.Title>
                <h5>Price: ${dog.price}</h5>
            </Card.Body>
            <Card.Footer>
                <Button onClick={addToCart} size='lg' className='w-100 btn btn-info'>Add To Cart</Button>
            </Card.Footer>
        </Card>
    );
};

export default Dogs;