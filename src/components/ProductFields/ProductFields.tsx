import React from 'react';
import './productFields.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IProduct } from '../../models';
import { v4 as uuidv4 } from 'uuid';


interface Props {
  productChange: (p: IProduct) => void;
  product?: IProduct | null;
}

export function ProductFields(props: Props) {
  const [title, setTitle] = React.useState('');
  const [priceString, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');
  const [id, setId] = React.useState('');

  const price = Number(priceString);
  const internalProduct = { id, title, description, category, price, image };

  React.useEffect(() => {
    if (props.product === undefined && internalProduct.id === "") {
      internalProduct.id = uuidv4();
      setId(internalProduct.id)
    }
    props.productChange(internalProduct!);
  }, [title, priceString, description, category, image]);

  React.useEffect(() => {
    if (props.product !== undefined && props.product !== null) {
      setTitle(props.product.title)
      setPrice(props.product.price)
      setDescription(props.product.description)
      setCategory(props.product.category)
      setImage(props.product.image)
      setId(props.product.id)
    }
    else if (props.product === null) {
      setTitle("")
      setPrice(0)
      setDescription("")
      setCategory("")
      setImage("")
      setId("")
    }
  }, [props.product]);

  return (
    <Box
      className="productFields"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField label="Title" variant="outlined"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }} />
      <TextField label="Price" variant="outlined"
        value={priceString}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPrice(Number(event.target.value));
        }} />
      <TextField label="Description" variant="outlined"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setDescription(event.target.value);
        }} />
      <TextField label="Category" variant="outlined"
        value={category}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCategory(event.target.value);
        }} />
      <TextField label="Image" variant="outlined"
        value={image}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setImage(event.target.value);
        }} />
    </Box>
  );
}