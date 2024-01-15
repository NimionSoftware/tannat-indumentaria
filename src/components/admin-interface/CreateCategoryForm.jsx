import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import {
    styled,
    Typography,
    TextField,
    Button,
    Box
} from '@mui/material'
import axios from 'axios';
import ToastCreated from '../Shared/ToastCreated';
import PopUpExpired from './PopUpExpired';
import { providerContext } from '../ProviderContextComponent';

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

const CreateCategoryForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur',
  });

  const { tokenExpired } = useContext(providerContext);

  const [success, setSuccess] = useState(false);

  const URL = 'http://localhost:4000/api/category'
  const token = JSON.parse(sessionStorage.getItem('token'))

  const onSubmit = async (data) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            token: token
          }

          const config = {
            method: 'POST',
            url: URL,
            headers:headers,
            data: data,
          };
          await axios(config);
          setSuccess(true);
          reset();
    } catch (error) {
        console.error('There was an error sending data', error)
    }
  }

  const text = '¡Muy bien! Agregaste un nuevo producto a tu tienda!';

  return (
    <FormContainer>
        <Form>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}
                onSubmit={handleSubmit(onSubmit)}
            >

                <Text
                    sx={{
                        textAlign: 'center',
                        fontSize: '18px',
                        marginBottom: 1,
                        textDecoration: 'underline'
                    }}
                >
                    Añadir Categoría
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
                    sx={{
                        width: '50%',
                        marginTop: '10px',
                        background: 'white',
                    }}
                    label="Titulo"
                    {...register('title', { required: 'Este campo es requerido' })}
                />
                {errors.title && (
                    <Text sx={{ color: 'red' }}>{errors.title.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Imagen
                </Text>
                <Description>(link-dropbox. <span style={{fontSize: '11px', fontWeight: '800'}}>Para que la imagen renderice, se debe cambiar, en la ultima parte del link con la URL de la imagen guardada en dropbox, "dl=0" por "raw=1". Copiar el link modificado SIN DARLE ENTER y pegarlo aqui debajo.</span>)</Description>
                <TextFieldInput
                    label="Imagen"
                    {...register('image', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.image && (
                    <Text sx={{ color: 'red' }}>{errors.image.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Link
                </Text>
                <Description>(El link al que va a redireccionar la categoria, se escribe en minusulas, ej: mujer, hombre, invierno, calzado. etc)</Description>
                <TextFieldInput
                    label="Link"
                    {...register('link', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.link && (
                    <Text sx={{ color: 'red' }}>{errors.link.message}</Text>
                )}
                <Button
                    variant='contained'
                    sx={{
                        width: 100,
                        marginTop: '20px'
                    }}
                    type='submit'
                    onClick={() => {}}>
                    Agregar
                </Button>
            </form>
        </Form>
        {success && <ToastCreated success={success} setSuccess={setSuccess} text={text} />}
        {tokenExpired && <PopUpExpired />}
    </ FormContainer>
  )
}

export default CreateCategoryForm;