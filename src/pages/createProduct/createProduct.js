import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Header from '../../components/header';

const priceRegEx = /[0-9]+\.?[0-9]?[0-9]?/g;

function CreateProductPage() {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value === '') {
      setNameErr('Name cannot be empty.');
    } else {
      setNameErr('')
    }
  }
   
  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    if (e.target.value === '') {
      setDescriptionErr('Description cannot be empty.');
    } else {
      setDescriptionErr('')
    }
  }

  const [price, setPrice] = useState('');
  const [priceErr, setPriceErr] = useState('');

  const onPriceChange = (e) => {
    // console.log(priceRegEx.test(e.target.value));
    if (priceRegEx.test(e.target.value)) {
      setPrice(e.target.value);
      setPriceErr('')
      return;
    }

    if (e.target.value === '') {
      setPriceErr('Price cannot be empty.');
    } else {
      setPriceErr('Invalid Price.')
    }
  }

  const [quantity, setQuantity] = useState('');
  const [quantityErr, setQuantityErr] = useState('');

  const onQuantityChange = (e) => {
    setQuantity(e.target.value);
    if (e.target.value === '') {
      setQuantityErr('Quantity cannot be empty.');
    } else {
      setQuantityErr('')
    }
  }

  return (
    <div>
      <Header/>
      <Grid className="form-wrapper">
        <Grid container spacing={3} className="product-form">
          {/* <form>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(e) => onNameChange(e)} placeholder="Product name here.."/> 
          </form>  */}
          <Grid item xs={12} className="form-item">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => onNameChange(e)}
              placeholder="Product name here.."
              error={nameErr !== ''}
              helperText={nameErr}
            />
          </Grid>
          
          <Grid item xs={12} className="form-item">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => onDescriptionChange(e)}
              placeholder="Product Description here.."
              error={descriptionErr !== ''}
              helperText={descriptionErr}
              multiline
              rows={3}
              rowsMax={10}
            />
          </Grid>

          <Grid item xs={12} md={6} className="form-item">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e) => onPriceChange(e)}
              placeholder="Product price here.."
              error={priceErr !== ''}
              helperText={priceErr}
            />
          </Grid>

          <Grid item xs={12} md={6} className="form-item">
            <TextField
              id="outlined-basic"
              type="number"
              fullWidth
              label="Quantity"
              variant="outlined"
              value={quantity}
              onChange={(e) => onQuantityChange(e)}
              placeholder="Product Quantity here.."
              error={quantityErr !== ''}
              helperText={quantityErr}
            />
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default CreateProductPage;
