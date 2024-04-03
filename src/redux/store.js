import { configureStore } from '@reduxjs/toolkit'
import { apiProducts } from './apiProducts'
import basketSlice from './Slice/basketSlice'


export default configureStore({
    reducer: {
      basket: basketSlice,
      [apiProducts.reducerPath]: apiProducts.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiProducts.middleware)
  })



