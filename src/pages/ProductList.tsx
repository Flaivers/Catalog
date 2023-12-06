import { Product } from '../components/Product';
import { useSelector } from 'react-redux'
import { selectProducts } from '../slices/selectors'


export function ProductList() {
  const products = useSelector(selectProducts());
  return (
    <div>
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}