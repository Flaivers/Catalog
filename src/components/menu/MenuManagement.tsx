import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './menuManagement.css';
import { useNavigate } from "react-router-dom";

export function MenuManagement() {
    const navigate = useNavigate();

    const linkAddProduct = React.useCallback(() => {
        navigate("/admin/addProduct")
    }, []);

    const linkDelete = React.useCallback(() => {
        navigate("/admin/delete")
    }, []);

    const linkChange = React.useCallback(() => {
        navigate("/admin/change")
    }, []);

    return (
        <div className="menuManagement">
            <ButtonGroup variant="contained" size="large" aria-label="outlined primary button group">
                <Button onClick={linkAddProduct}> Add Product </Button>
                <Button onClick={linkDelete}> Delete Product</Button>
                <Button onClick={linkChange}> Change Product</Button>
            </ButtonGroup>
        </div>
    )
}