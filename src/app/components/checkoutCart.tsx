import React, { useContext } from 'react'
import { CartContext } from './cartContext';
import Image from 'next/image';

type Props = {}

const CheckoutCart = (props: Props) => {
    const {dispatch, state} = useContext(CartContext)
  
  // remove from cart
  const removeFromCart = (productId: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      product: productId,
    });
  };
  
  return (
    <div className="grid md:grid-cols-4 ssm:grid-cols-3 grid-cols-1 gap-5 ssm:px-10 px-5">
    {state.items.map((item, idx) => (
      <div key={idx} className="mt-14">
        <Image
          className="h-72 object-cover shadow-lg"
          src={item.product.image}
          alt="bread"
        />
        <div className="mt-4">
          <p className="text-primary-200 text-xl">
            {item.product.name}
          </p>
          <p className='text-primary-200 font-bold text-lg'>
          ₦{item.product.price}
          </p>
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="bg-yellow-400 text-primary-200 rounded-sm px-2 py-2 text-lg mt-3 mb-10 md:mb-0 border border-gray-500"
          >
            Remove from cart
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CheckoutCart