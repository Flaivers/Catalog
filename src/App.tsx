import { Route, Routes } from 'react-router-dom'
import { ProductList } from './pages/ProductList'
import { AddProduct } from './components/AddProduct/AddProduct'
import { BasketPage } from './pages/BasketPage'
import { Navigation } from './components/Navigation'
import { ProductDetail } from './pages/ProductDetail'
import { Provider } from 'react-redux'
import { reduxStore } from './slices/productSlice'
import { DeleteProduct } from './components/deleteProduct/DeleteProduct'
import { Management } from './components/menu/Management'
import { ChangeProduct } from './components/changeProduct/ChangeProduct'



function App() {
  return (
    <Provider store={reduxStore}>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/admin" element={<Management />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/delete" element={<DeleteProduct />} />
        <Route path="/admin/change" element={<ChangeProduct />} />

      </Routes>
    </Provider>
  )
}

export default App;
