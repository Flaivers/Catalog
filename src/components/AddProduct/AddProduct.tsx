import React from 'react';
import './addProduct.css';
import Button from '@mui/material/Button';
import { IProduct } from '../../models';
import { productsSlice } from '../../slices/productSlice'
import { useDispatch } from 'react-redux'
import { MenuManagement } from '../menu/MenuManagement';
import { ProductFields } from '../ProductFields/ProductFields';
import { Alert } from '@mui/material';


export function AddProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState<IProduct>();
  const [showAlert, setShowAlert] = React.useState(false);

  const handleProductFieldsChange = (product: IProduct) => {
    setProduct(product)
    console.log("Add Product", product)
  }

  const successButton = () => {
    dispatch(productsSlice.actions.addNewProduct(product!));
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2000);
  }

  return (
    <div className="addProduct">
      <MenuManagement></MenuManagement>
      <ProductFields productChange={handleProductFieldsChange}></ProductFields>
      <Button
        variant="contained"
        onClick={() => successButton()}
      >
        Add
      </Button>
      {showAlert && <Alert severity="success"> Success </Alert>}
    </div>
  )
}
