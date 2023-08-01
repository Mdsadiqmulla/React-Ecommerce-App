import React, { useReducer } from 'react';
import cartContext from './contextAPI';
import reducerFunction from './Reducer';

const defaultState={
    items:[],
    totalAmount:0
}

const ContextProvider = (props) => {

    const [cartState,dispatchAction]=useReducer(reducerFunction,defaultState);

    const addToCartHandler =(item)=>{
        dispatchAction({type:'ADD',item:item})
    };

    const removeFromCartHandler=(id)=>{
        dispatchAction({type:'REMOVE',id:id})
    }

    const ContextValue={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler
    }

  return (
    <cartContext.Provider value={ContextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider;