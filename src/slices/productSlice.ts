import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../models';
import { products } from '../data/products';
import { basketSlice } from './basketSlice';

export interface ProductsState {
  products: IProduct[];
}

export const productsSlice = createSlice({
  name: 'productsState',
  initialState: { products: products },
  reducers: {
    addNewProduct: (state, payload: PayloadAction<IProduct>) => {
      state.products.unshift(payload.payload)
    },
    deleteProduct: (state, payload: PayloadAction<string>) => {
      const productIndex = products.findIndex(p => p.id === payload.payload);
      state.products.splice(productIndex, 1)
    },
    changeProduct: (state, payload: PayloadAction<IProduct>) => {
      const productIndex = products.findIndex(p => p.id === payload.payload.id);
      state.products.splice(productIndex, 1, payload.payload)
    },
  },
})

export const reducer = {
  productsState: productsSlice.reducer,
  basketState: basketSlice.reducer,
}

export const reduxStore = configureStore({
  reducer,
})

export type AppState = ReturnType<typeof reduxStore.getState>

