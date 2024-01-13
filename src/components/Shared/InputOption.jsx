import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const InputOption = ({sizes, label, productId, onSizeChange }) => {

  const localStorageData = JSON.parse(localStorage.getItem('sizes')) || {};
  const initialSizeFromLocalStorage = localStorageData[productId] || '';

  const [itemSizes, setItemSizes] = useState(initialSizeFromLocalStorage);

  const handleChange = (event) => {
    const newSize = event.target.value;
    setItemSizes(newSize);
    onSizeChange(productId, newSize);

    localStorage.setItem('sizes', JSON.stringify({
      ...localStorageData,
      [productId]: newSize,
    }));
  };

  useEffect(() => {
    const newInitialSizeFromLocalStorage = localStorageData[productId] || '';
    if (newInitialSizeFromLocalStorage !== initialSizeFromLocalStorage) {
      setItemSizes(newInitialSizeFromLocalStorage);
    }
  }, [productId, initialSizeFromLocalStorage, localStorageData]);

  return (
    <FormControl>
      <InputLabel id="select-label" >{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={itemSizes}
        onChange={handleChange}
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
