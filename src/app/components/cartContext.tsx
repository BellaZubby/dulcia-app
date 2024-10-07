"use client"
import React, {createContext, useReducer, ReactNode} from 'react';
import {CartItem, DataTypes} from '../Hooks/testData';


export type CartState = {
    items: CartItem[];
    user:null | any;
};


type CartAction =
| {type: 'ADD_TO_CART'; product: DataTypes} 
| {type: 'REMOVE_FROM_CART'; product: string}
| {type:'SET_USER'; user: any | null}
| {type: 'CLEAR_CART'};

const initialState:CartState = {
    items: [],
    user: null
};

// cartTotal 0R selector
export const getCartTotal = (state:CartState) => state?.items.reduce((amount, item) => item.product.price + amount, 0);


const cartReducer = (
    state: CartState,
    action: CartAction): CartState => {
        // console.log(action);
        switch (action.type) {
           case 'ADD_TO_CART' :

           return {
                    ...state,
                    items:
                    [...state.items, {
                        // ...action.product,
                        product: action.product,
                    }],
                };
            case 'REMOVE_FROM_CART':
                const index = state.items.findIndex(
                    (cartItem) => cartItem.product.id === action.product
                );
                let newCart = [...state.items];

                if (index >= 0) {
                    // remove any one(1) item at the passed index
                    newCart.splice(index, 1);
                }else {
                    console.warn(
                        `cant remove product(id:${action.product}) as it is not in the cart!`
                    )
                }
                return {
                    ...state,
                   items:newCart
                };

                case 'SET_USER':
                    return {
                        ...state,
                        user: action.user
                    }

                case 'CLEAR_CART': 
                 return {...state, items: []};

                default:
                  return state
            }
    };

 export const CartContext = createContext<{
        state: CartState;
        dispatch: React.Dispatch<CartAction>
    }>({
        state: initialState,
        dispatch: () => null,
    });





    export const CartProvider = ({children}:{children:ReactNode}) => {
       
        const [state, dispatch] = useReducer(cartReducer, initialState);

        return (
            <CartContext.Provider value={{state, dispatch}}>
                {children}
            </CartContext.Provider>
        );
    };
   
    // export const useCart = () => {
        
    //     const context = useContext(CartContext);
    
    //   if (!context) {
    //         throw new Error('useCart must be used within a CartProvider');
    //     }

    //     return context;
    // };
    