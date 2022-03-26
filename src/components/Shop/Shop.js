import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Dog from '../Dog/Dog';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [dogs, setDogs] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDogs(data))
    },[])

    const addToCart = (singlItem) => {
        const newCart = [...cart,singlItem]
        setCart(newCart)
    }
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='dogs-container bg-info container py-5'>
                {
                    dogs.map(dog => <Dog key={dog.id} dog={dog} addToCart={()=>addToCart(dog)}></Dog>)
                }
            </div>
            <div className='cart-container bg-warning text-center'>
                <h3>right side</h3>
                {
                    cart.map(cartItem => <Cart item={cartItem}></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;