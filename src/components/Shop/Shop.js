import React, { useEffect, useState } from 'react';
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
        if(cart.length < 4){
            setCart(newCart)
        }
        else{
            alert('Your selected item is over !')
        }
    }
    console.log(cart.length)
    const rNum = (props)=>{
        console.log(props)
    }
    return (
        <div className='shop-container'>
            <div className='dogs-container container py-5'>
                {
                    dogs.map(dog => <Dog key={dog.id} dog={dog} addToCart={()=>addToCart(dog)}></Dog>)
                }
            </div>
            <div className='cart-container bg- border border-2'>
                <h1>Total: {cart.length}</h1>
                <div className='ms-2'>
                    {
                        cart.map(cartItem => <Cart item={cartItem}></Cart>)
                    }
                </div>
                <div className='mt-4 ms-2'>
                    <button onClick={()=>rNum(cart.length)} className='btn btn-primary me-2'>Choose One</button>
                    <button className='btn btn-danger'>Select Again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;