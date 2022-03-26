import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Dog.css'

const Dogs = ({dog,addToCart}) => {
    return (
        <Card className='border border-2 border-warning'>
            <Card.Img variant="top" src={dog.img} className='p-2 img-fluid h-75'/>
            <Card.Body>
                <Card.Title>
                    Name: {dog.name}
                </Card.Title>
                <h5>Price: ${dog.price}</h5>
            </Card.Body>
            <Card.Footer>
                <button onClick={addToCart} className='cart-btn w-100 btn btn-info d-flex justify-content-center align-items-center p-0'>
                   <p className='me-3 mt-3 align-items-center'>Add To Cart</p>
                   <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </Card.Footer>
        </Card>
    );
};

export default Dogs;