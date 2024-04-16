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

export const fetchProducts = createAsyncThunk('basket/fetchProducts',
async(_,{rejectWithValue})=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products/');
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