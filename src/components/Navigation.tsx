import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectBasketProducts } from '../slices/selectors'

export function Navigation() {
  const products = useSelector(selectBasketProducts());
  return (
    <nav className="navigation">
      <span className="nameSite">T-shirts</span>

      <span>
        <Link
          to="/admin" className="link"
        >
          Management
        </Link>
        <Link
          to="/" className="link"
        >
          Products
        </Link>
        <Link
          to="/basket" className="link"
        >
          Basket({products.length})
        </Link>
      </span>
    </nav>
  )
}