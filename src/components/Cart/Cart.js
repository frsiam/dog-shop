import React from 'react';

const Cart = ({item}) => {
    return (
        <div className='mb-2'>
            <img src={item.img} alt=""  className='w-25 rounded-circle'/>
            <span className='ms-2 fs-5'>{item.name}</span>
        </div>
    );
};

export default Cart;