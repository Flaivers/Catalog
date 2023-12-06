import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { basketSlice } from '../slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../slices/selectors';


export function ProductDetail() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts());
  const { productId } = useParams();
  console.log(productId)
  const product = products.find(product => product.id === productId);
  return (
    <div
      className="productT-shirts"
    >
      <img src={product?.image} className="imgMore" alt={product?.title} />
      <p> {product?.title}</p>
      <p> {product?.category}</p>
      <p> {product?.description}</p>
      <p className="price">{product?.price}</p>
      <Button
        variant="contained"
        onClick={() => dispatch(basketSlice.actions.addProduct(product!))}
      >
        Add to cart
      </Button>
    </div>
  )
}