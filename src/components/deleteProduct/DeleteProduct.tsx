import React from "react";
import './deleteProduct.css';
import Button from '@mui/material/Button';
import { IProduct } from "../../models";
import { MenuManagement } from "../menu/MenuManagement";
import { ProductSelector } from "../ProductSelector/ProductSelector";
import { useDispatch } from 'react-redux'
import { productsSlice } from '../../slices/productSlice';
import { Alert } from '@mui/material';


export function DeleteProduct() {
    const dispatch = useDispatch();
    const [product, setProduct] = React.useState<IProduct>();
    const [showAlert, setShowAlert] = React.useState(false);

    const handleProductChange = (product: IProduct) => {
        setProduct(product)
        console.log("Delete Product", product)
    }

    const successButton = () => {
        dispatch(productsSlice.actions.deleteProduct(product!.id));
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 2000);
    }

    return (
        <div className="delete">
            <MenuManagement />
            <ProductSelector onProductChange={handleProductChange} />
            <Button
                variant="contained"
                onClick={() => successButton()}
            >
                Delete
            </Button>
            {showAlert && <Alert severity="success"> Success </Alert>}
        </div>
    )
}

