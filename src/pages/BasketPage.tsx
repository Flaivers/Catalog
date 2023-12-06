import { basketSlice } from '../slices/basketSlice'
import { useSelector } from 'react-redux'
import { selectBasketProducts } from '../slices/selectors'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';

export function BasketPage(){
  const dispatch = useDispatch()
  const products = useSelector(selectBasketProducts());
  const arrayDataItems = products.map(product => 
    <li key={product.id}>
      <img src={product.image} className="imgBasket" />
      <p> {product.title} - {product.price} $   
      <Button
        variant="outlined"
        onClick={() => dispatch(basketSlice.actions.deleteProduct(product!))}
      >
        Delete
      </Button> 
      </p>
    </li>

  )
  const price = products.map(product =>  product.price);
  const totalPrice = price.reduce((sum, current) => sum + current, 0);

  return (
    <div className="basket">
      <p className="nameSite"> Basket </p>   
      <ul>{arrayDataItems}</ul>
      <p> Total price {totalPrice.toFixed(2)} $ 
       <Button
        variant="contained"
        onClick={() => alert("Paid")}
      >
        Pay
      </Button>
      </p>
      <p> 
      <Button
        variant="outlined"
        onClick={() => dispatch(basketSlice.actions.deleteAllProduct())}
      >
        Delete All
      </Button> 
      </p>      
    </div>
  )
}