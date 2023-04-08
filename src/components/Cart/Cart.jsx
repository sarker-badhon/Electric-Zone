import React from 'react';
import AddProduct from '../AddProduct/AddProduct';

const Cart = ( {cart,handlerRemoveFromCart} ) => {
    console.log(cart);
    // const handlerAddToCart = handlerAddToCart;
    return (
        <div>
           <h1 className='px-5 text-2xl font-bold'>Product: {cart.length} </h1>
           <div className='px-10'>
           {
            cart.map(pd => <AddProduct
            key={pd.id}
            pd={pd}
            handlerRemoveFromCart={handlerRemoveFromCart}
            ></AddProduct> )
           }
           </div>
        </div>
    );
};

export default Cart;