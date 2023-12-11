import { IProduct } from "../models";
import { AppState } from "./productSlice";


export const selectProduct = (productId: string) => ({ productsState }: AppState) => {
    return productsState.products.filter((product: IProduct) => product.id === productId)
}

export const selectBasketProducts = () => ({ basketState }: AppState) => {
    return basketState.products
}

export const selectProducts = () => ({ productsState }: AppState) => {
    return productsState.products
}    