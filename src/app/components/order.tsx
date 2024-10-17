import React, { useContext } from "react";
import moment from "moment";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import { CartContext} from "./cartContext";

// h:mm:ss a

type Props = {
  order: any;
};

const Order = ({ order }: Props) => {
    const {state, dispatch} = useContext(CartContext)
  return (
    <div className='ssm:shadow-xl shadow-lg md:w-[70%] sm:w-[95%] w-[100%] mx-auto ssm:px-10 pt-14 pb-20 mt-16 px-4'>
        <div className="border-b border-gray-400 pb-10">
        <h3 className="text-primary-200 font-semibold text-2xl mb-5">Order</h3>
        <p className="text-primary-200 font-semibold text-lg ssm:text-xl">{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="font-bold text-primary-200 text-lg ssm:text-xl mt-2">
              Order id: <small className="font-normal text-primary-200 text-[13px] ssm:text-[15px]">{order.id}</small>
               {/* <small>{order.data.amount}</small> */}
            </p>
            
                <NumericFormat
            renderText={(value) => (
                <>
                    <p className='text-lg ssm:text-xl mt-2'>
                    <strong className="text-primary-200">Order Total: {value}</strong>
                    </p>
                    
                </>
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
        />
            
        </div>

            <div className="grid grid-cols-1 gap-7 mt-16">
            {
                order.data.items.map((item:any, idx:any) => (
                    <div key={idx} className="ssm:grid ssm:grid-cols-2 ssm:items-center ssm:gap-10 mt-5 ssm:shadow-lg border-2 border-primary-150 ssm:border-0 ssm:p-10">
                        <Image 
                        className="h-72 object-cover shadow-lg"
                        src={item.product.image} alt="product-image" priority/>
                        <div className="mt-2 ssm:mt-0 p-5">
                            <p className="text-primary-200 text-xl">{item.product.name}</p>
                            <p className='text-primary-200 font-bold text-xl'>₦{item.product.price}</p>
                        </div>
                       
                    </div>
                ))
            }
            </div>
          
    </div>
  );
};

export default Order;
