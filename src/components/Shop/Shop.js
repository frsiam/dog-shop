import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Dog from '../Dog/Dog';
import './Shop.css'

const Shop = () => {
    const [dogs, setDogs] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDogs(data))
    },[])

    const addToCart = (singlItem) => {
        console.log(singlItem)
    }
    return (
        <div className='shop-container'>
            <div className='dogs-container bg-info container py-5'>
                {
                    dogs.map(dog => <Dog key={dog.id} dog={dog} addToCart={()=>addToCart(dog)}></Dog>)
                }
            </div>
            <div className='cart-container bg-warning text-center'>
                <h3>right side</h3>
            </div>
        </div>
    );
};

export default Shop;