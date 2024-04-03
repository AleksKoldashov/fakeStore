import { createAsyncThunk } from "@reduxjs/toolkit";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
      return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem,quantity: cartItem.quantity + 1}
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd,  quantity: 1 }];
  }

export const fetchProducts = createAsyncThunk('cart/fetchComents',
async(_,{rejectWithValue})=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
        console.log(response);
       if(!response.ok){
        throw new Error( 'Server Error!')
       }
        const data = await response.json()
        return data
    }
    catch(error){
        return rejectWithValue(error.message)
    }
 
})