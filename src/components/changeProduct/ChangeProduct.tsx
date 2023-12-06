import React from "react";
import './changeProduct.css';
import Button from '@mui/material/Button';
import { IProduct } from "../../models";
import { useDispatch } from 'react-redux'
import { MenuManagement } from '../menu/MenuManagement';
import { ProductFields } from '../ProductFields/ProductFields';
import { ProductSelector } from '../ProductSelector/ProductSelector';
import { productsSlice } from '../../slices/productSlice';
import { Alert } from '@mui/material';

export function ChangeProduct() {
    const dispatch = useDispatch();
    const [product, setProduct] = React.useState<IProduct>();
    const [changepPoduct, setChangepPoduct] = React.useState<IProduct>();
    const [showAlert, setShowAlert] = React.useState(false);

    const handleProductChange = (product: IProduct) => {
        setProduct(product)
        console.log("Product Change", product)
    }

    const handleProductFieldsChange = (changepPoduct: IProduct) => {
        setChangepPoduct(changepPoduct)
        console.log("Product Fields Change", changepPoduct)
    }

    const successButton = () => {
        dispatch(productsSlice.actions.changeProduct(changepPoduct!));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    }

    return (
        <div className="changeProduct">
            <MenuManagement></MenuManagement>
            <ProductSelector onProductChange={handleProductChange} />
            <ProductFields productChange={handleProductFieldsChange} product={product}></ProductFields>
            <Button
                variant="contained"
                onClick={() => successButton()}
            >
                Change
            </Button>
            {showAlert && <Alert severity="success"> Success </Alert>}
        </div>
    )
}
