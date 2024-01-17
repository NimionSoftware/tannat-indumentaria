import React, { useContext, useEffect, useState } from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, styled } from '@mui/material';
import axios from 'axios';
import { cartContext } from '../Context';
import { providerContext } from '../ProviderContextComponent';
import PopUpExpired from '../admin-interface/PopUpExpired';

const ContainerDelete = styled('div')({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:'10',
    position:'fixed',
    backgroundColor:'#0000003b',
    width:'100%',
    height:'100%',
    top:0,
    left:0
  })

const ContainerModalDelete = styled('div')({
    backgroundColor:'#f3f3f3',
    width:'30%',
    height:'25%',
    minWidth:'18rem',
    maxWidth:'28rem',
    maxHeight:'12rem',
    minHeight:'12rem',
  })

const ModalDelete = ({ open, handleClose, card }) => {

    const [productData, setProductData] = useState({});
    const { setSucc } = useContext(cartContext);
    const { tokenExpired, setTokenExpired } = useContext(providerContext);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/${card._id}`
      );
      setProductData(response.data.data);
    } catch (error) {
      console.error('Error deleting product data', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);


  const URL = `${process.env.REACT_APP_API_URL}/product/${card._id}`
  const token = JSON.parse(sessionStorage.getItem('token'))
  const { shouldFetchData, setShouldFetchData } = useContext(providerContext);

  const Delete = async () => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            token: token
          }

          const config = {
            method: 'DELETE',
            url: URL,
            headers:headers,
            data: productData,
          };
          await axios(config);
          if(shouldFetchData) {
            setShouldFetchData(false)
            setTimeout(() => {
              setShouldFetchData(true)
            }, 100);
          }
          setSucc(true);
          handleClose();
    } catch (error) {
        if(error.response.status === 403 || error.response.status === 401) {
          setTokenExpired(true);
        }
        console.error('There was an error traying delete data', error)
    }
  }

  return (
    <>
        <ContainerDelete open={open} onClose={handleClose} >
            <ContainerModalDelete>
                <DialogTitle>Confirmar Eliminación</DialogTitle>
                <DialogContent>
                ¿Estas segura que queres eliminar {card.title} ?
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{handleClose()}} color="primary">
                    Cancelar
                </Button>
                <Button onClick={()=>{Delete()}} color="error" variant="contained">
                    Eliminar
                </Button>
                </DialogActions>
            </ContainerModalDelete>
        </ContainerDelete>
        {tokenExpired && <PopUpExpired />}
    </>
  );
};

export default ModalDelete;
