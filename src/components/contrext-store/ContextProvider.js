import React, { useReducer, useState } from 'react';
import cartContext from './contextAPI';
import reducerFunction from './Reducer';

const defaultState={
    items:[],
    totalAmount:0
}

const ContextProvider = (props) => {

    const [cartState,dispatchAction]=useReducer(reducerFunction,defaultState);
    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);


    const addToCartHandler =(item)=>{
        dispatchAction({type:'ADD',item:item})
    };

    const removeFromCartHandler=(id)=>{
        dispatchAction({type:'REMOVE',id:id})
    }

    const loginHandler =(token)=>{
        localStorage.setItem('token',token);
        setToken(token)
    };

    const logoutHandler =()=>{
        localStorage.removeItem('token');
        setToken(null);
    }

    const userIsLoggedIn=!!token;

    const ContextValue={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

  return (
    <cartContext.Provider value={ContextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider;