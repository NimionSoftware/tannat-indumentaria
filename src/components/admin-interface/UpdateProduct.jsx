import React, { useContext, useEffect, useState } from 'react'
import {
  styled,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ToastCreated from '../Shared/ToastCreated'
import { providerContext } from '../ProviderContextComponent'
import PopUpExpired from './PopUpExpired'

const FormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  padding: '30px 0',
  maxHeight: '100vh',
  '@media (max-width: 1100px)': {
    margin:'4rem 0',
  }
})

const Form = styled(Box)({
  width: '50%',
  padding:'1rem',
  backgroundColor:'#f3f3f3',
  borderRadius:'6px',
  '@media (max-width: 1100px)': {
    width: '80%',
  }
})

const Text = styled(Typography)({
  width: '50%',
  fontSize: '14px',
  color: 'black',
  textAlign: 'start',
  '@media (max-width: 1100px)': {
    width: '80%',
    maxWidth:'20rem'
  }
})

const Description = styled (Typography)({
  width: '50%',
  fontSize: '10px',
  color: 'black',
  textAlign: 'start',
  '@media (max-width: 1100px)': {
    width: '80%',
    maxWidth:'20rem'
  }
})

const TextFieldInput = styled (TextField)({
    width: '50%',
    marginTop: '10px',
    background: 'white',
    '@media (max-width: 1100px)': {
      width: '80%',
      maxWidth:'20rem'
    }
  })

const UpdateProduct = () => {

  const [productData, setProductData] = useState({});
  const [success, setSuccess] = useState(false);
  const { tokenExpired, setTokenExpired } = useContext(providerContext);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/product/${dinamicParams.id}`
      );
      setProductData(response.data.data);
    } catch (error) {
      console.error('Error fetching product data', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const dinamicParams = useParams();

  const URL = `http://localhost:4000/api/product/${dinamicParams.id}`
  const token = JSON.parse(sessionStorage.getItem('token'))

  const onSubmit = async () => {
    if(!Array.isArray(productData.sizes)){
        productData.sizes = productData.sizes.split(',')
    }
    try {
        const headers = {
            'Content-Type': 'application/json',
            token: token
          }

          const config = {
            method: 'PUT',
            url: URL,
            headers:headers,
            data: productData,
          };
          await axios(config);
          setSuccess(true);
    } catch (error) {
        if(error.response.status === 403) {
            setTokenExpired(true);
        }
        console.error('There was an error updating data', error)
    }
  }

  console.log(tokenExpired)
  const text = '¡Listo! El producto fue modificado con exito!';

  return (
    <FormContainer>
        <Form>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}
            >

                <Text
                    sx={{
                        textAlign: 'center',
                        fontSize: '18px',
                        marginBottom: 1,
                        textDecoration: 'underline'
                    }}
                >
                    Modificar Producto
                </Text>

                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Titulo
                </Text>
                <Description>(Nombre de la prenda/ nombre prenda + Marca, etc)</Description>
                <TextFieldInput
                    value={productData.title}
                    onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Descripcion
                </Text>
                <Description>(Breve descripcion de la prenda, puede incluir detalles de costura, tipo de tela, etc)</Description>
                <TextFieldInput
                    value={productData.description}
                    onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Talle/s
                </Text>
                <Description>(Talles en los que estará disponible la prenda)</Description>
                <TextFieldInput
                    value={productData.sizes}
                    onChange={(e) => setProductData({ ...productData, sizes: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Imagen
                </Text>
                <Description>(link-cloud)</Description>
                <TextFieldInput
                    value={productData.image}
                    onChange={(e) => setProductData({ ...productData, image: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Precio
                </Text>
                <Description></Description>
                <TextFieldInput
                    value={productData.price}
                    onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Categoría
                </Text>
                <Description>(Categorías en las que entra la prenda. Ej: "Remera", "Manga Corta", "Vestido", etc)</Description>
                <TextFieldInput
                    value={productData.category}
                    onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Genero
                </Text>
                <Description>(Hombre, Mujer, Unisex)</Description>
                <TextFieldInput
                    value={productData.gender}
                    onChange={(e) => setProductData({ ...productData, gender: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Temporada
                </Text>
                <Description>(Verano, Otoño, etc)</Description>
                <TextFieldInput
                    value={productData.season}
                    onChange={(e) => setProductData({ ...productData, season: e.target.value })}
                />
                <Button
                    variant='contained'
                    sx={{
                        width: 100,
                        marginTop: '20px'
                    }}
                    type='submit'
                    >
                    Modificar
                </Button>
            </form>
        </Form>
        {success && <ToastCreated success={success} setSuccess={setSuccess} text={text} />}
        {tokenExpired && <PopUpExpired />}
    </ FormContainer>
)}

export default UpdateProduct