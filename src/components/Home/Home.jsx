import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const AllData = useLoaderData()

    const [cart,setCart]=useState([])

    const handlerAddToCart = (AllData) => {
        const newCart = [...cart,AllData];
        setCart(newCart)
    }
    const handlerRemoveFromCart = (id) => {
        const remaining =cart.filter(data => data.id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>

            <div className='products-container'>
                {
                    AllData.map(product => <Products
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Products>)
                }
            </div>

            <div className='cart'>
                <h1 className='text-2xl font-bold text-center  underline p-10'>Cart Summary</h1>
                {
                    <Cart
                    cart={cart}
                    handlerRemoveFromCart={handlerRemoveFromCart}
                    ></Cart>
                }
            </div>

        </div>
    );
};

export default Home;