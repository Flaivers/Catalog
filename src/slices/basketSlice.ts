import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../models'

const initialState: BasketSliceState = {
  products: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, payload: PayloadAction<IProduct>) => {
      state.products.push(payload.payload)
    },
    deleteProduct: (state, payload: PayloadAction<IProduct>) => {
      const index = state.products.indexOf(payload.payload);
      state.products.splice(index, 1)
    },
    deleteAllProduct: (state) => {
      state.products.splice(0)
    },
  }
})

export interface BasketSliceState {
  products: IProduct[];
}