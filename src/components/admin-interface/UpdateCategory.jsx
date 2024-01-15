import React, { useEffect, useState } from 'react'
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

const UpdateCategory = () => {

  const [categoryData, setCategoryData] = useState({});

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/category/${dinamicParams.id}`
      );
      setCategoryData(response.data.data);
    } catch (error) {
      console.error('Error fetching category data', error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const [success, setSuccess] = useState(false);

  const dinamicParams = useParams();

  const URL = `http://localhost:4000/api/category/${dinamicParams.id}`
  const token = JSON.parse(sessionStorage.getItem('token'))

  const onSubmit = async () => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            token: token
          }

          const config = {
            method: 'PUT',
            url: URL,
            headers:headers,
            data: categoryData,
          };
          await axios(config);
          setSuccess(true);
    } catch (error) {
        console.error('There was an error updating data', error)
    }
  }

  const text = '¡Listo! La Categoria fue modificada con exito!';

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
                    Modificar Categoria
                </Text>

                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Titulo
                </Text>
                <Description>(Titulo de la categoría, Ej: Hombre, Mujer, Mangas Cortas. Se mostrará adelante de la tarjeta de categoría en el muro de la landing)</Description>
                <TextFieldInput
                    value={categoryData.title}
                    onChange={(e) => setCategoryData({ ...categoryData, title: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Imagen
                </Text>
                <Description>(link-dropbox. <span style={{fontSize: '11px', fontWeight: '800'}}>Para que la imagen renderice, se debe cambiar, en la ultima parte del link con la URL de la imagen guardada en dropbox, "dl=0" por "raw=1". Copiar el link modificado SIN DARLE ENTER y pegarlo aqui debajo.</span>)</Description>
                <TextFieldInput
                    value={categoryData.image}
                    onChange={(e) => setCategoryData({ ...categoryData, image: e.target.value })}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Link
                </Text>
                <Description>(El link al que va a redireccionar la categoria, se escribe en minusulas, ej: mujer, hombre, invierno, calzado. etc)</Description>
                <TextFieldInput
                    value={categoryData.link}
                    onChange={(e) => setCategoryData({ ...categoryData, link: e.target.value })}
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
    </ FormContainer>
)}

export default UpdateCategory;