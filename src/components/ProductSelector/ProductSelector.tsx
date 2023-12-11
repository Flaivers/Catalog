import React from "react";
import './productSelector.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux'
import { selectProducts } from '../../slices/selectors';
import { IProduct } from '../../models';


interface Props {
  onProductChange: (p: IProduct) => void;
}

export function ProductSelector(props: Props) {
  const products = useSelector(selectProducts());
  const titles = products.map(product =>
    <MenuItem value={product.id} key={product.id}>
      {product.title}
    </MenuItem>
  );

  const [idProduct, setIdProduct] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const product = products.find(p => p.id === event.target.value);
    props.onProductChange(product!);
    setIdProduct(event.target.value);
  };

  return (
    <Box className="productSelector">
      <FormControl>
        <InputLabel> product </InputLabel>
        <Select
          style={{ width: "220px" }}
          value={idProduct}
          label="Titles"
          onChange={handleChange}
        >
          {titles}
        </Select>
      </FormControl>
    </Box>
  );
}