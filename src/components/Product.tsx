import { IProduct } from '../models'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { basketSlice } from '../slices/basketSlice'
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const linkProduct = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <div
      className="product"
    >
      <img src={product.image} className="img" alt={product.title} />
      <Button onClick={linkProduct}>{product.title}</Button>
      <p className="price">{product.price}</p>
      <Button
        variant="contained"
        onClick={() => dispatch(basketSlice.actions.addProduct(product!))}
      >
        Add to cart
      </Button>
    </div>
  )
}
