import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const InputOption = ({sizes, label, productId, onSizeChange}) => {
    const [itemSizes, setItemSizes] = useState('');

    const handleChange = (event) => {
        const newSize = event.target.value;
        setItemSizes(newSize);
        onSizeChange(productId, newSize);
      };

  return (
    <FormControl>
      <InputLabel id="select-label" >{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={itemSizes}
        onChange={handleChange}
        label={label}
        MenuProps={{
            style: {
                zIndex: 9999,
              },
          }}
      >
        {sizes.map((size, index) => (<MenuItem value={size} key={index}>{size}</MenuItem>))}
      </Select>
    </FormControl>
  );
};

export default InputOption;
