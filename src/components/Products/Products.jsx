import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = ({ product, handlerAddToCart}) => {
    // console.log(product);
    const { image, name, price, quantity } = product;
    return (
        <div>
            <div className='pd-container'>
                <img src={image} alt="" />
                <div className='pd-info'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p>Price: ${price} </p>
                <Link to="/">
                <button onClick={()=>handlerAddToCart(product)}  className='btn text-white font-bold hover:bg-green-800 py-2 w-full rounded  '>
                    Buy Now </button>
                   
                </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Products;