import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const AddProduct = ({ pd, handlerRemoveFromCart }) => {
    return (
        <div>


            <h3 className='font-bold '>
                {pd.name}
                <span className='ml-10' ><button
                    onClick={() => handlerRemoveFromCart(pd.id)}>
               <TrashIcon className="h-6 w-6 text-blue-500" />
                </button>
                </span>
            </h3>


        </div>
    );
};

export default AddProduct;