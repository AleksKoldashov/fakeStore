import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItemToCart, fetchProducts } from "./basket.utils";



export  const basketSlice =createSlice({
        name: 'basket',
        initialState: {
          product: [],
            order: [],
            status: null,
            error: null,
        },
        reducers: {
            addProductBasket: (state, action)=>{
                state.order = addItemToCart(state.order, action.payload)
            },
            incProduct: (state,action) => {
              // state.order=state.order.map(item=>item.id === action.payload ? {...item, quantity: item.quantity +1} : {...item})
              state.product=state.product.map(item=>item.id === action.payload ? {...item, quantity: item.quantity === undefined ? 1 : item.quantity +1} : {...item})
                  },
            decrProduct: (state,action) => {
              state.order=state.order.map(item=>item.id === action.payload ? {...item, quantity: item.quantity > 0 ? item.quantity-1: 0} : {...item})
              state.product=state.product.map(item=>item.id === action.payload ? {...item, quantity: item.quantity> 0 ? item.quantity-1: 0} : {...item})     
                  },
        },
        extraReducers:  (builder) =>{
          builder
          .addCase(fetchProducts.pending,(state, action)=>{
              state.status = 'loading'
          })
          .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.product=(action.payload)
                state.status = 'idle'
          })
          .addCase(fetchProducts.rejected,(state, action)=>{
              state.status = 'rejected'
              state.error = action.payload
          })
      }
})

export const {
  addProductBasket,
  incProduct,
  decrProduct,
            }=basketSlice.actions 
export default basketSlice.reducer