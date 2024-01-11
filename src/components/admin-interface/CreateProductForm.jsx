import React, { useState } from 'react'
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

const FormContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: '30px 0',
    maxHeight: '100vh'
})

const Form = styled(Box)({
    width: '50%',
    padding:'1rem',
    backgroundColor:'#f3f3f3',
    borderRadius:'6px'
  })

const Text = styled(Typography)({
    width: '50%',
    fontSize: '14px',
    color: 'black',
    textAlign: 'start'
  })

const Description = styled (Typography)({
    width: '50%',
    fontSize: '10px',
    color: 'black',
    textAlign: 'start'
  })

const CreateProductForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur',
  });

  const [success, setSuccess] = useState(false);

  const URL = 'http://localhost:4000/api/product'
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
        console.error('Hubo un error con el envio de datos', error)
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
                    Añadir un Producto
                </Text>

                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Titulo
                </Text>
                <Description>(Nombre de la prenda/ nombre prenda + Marca, etc)</Description>
                <TextField
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
                    Descripcion
                </Text>
                <Description>(Breve descripcion de la prenda, puede incluir detalles de costura, tipo de tela, etc)</Description>
                <TextField
                    label="Descripcion"
                    {...register('description', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.description && (
                    <Text sx={{ color: 'red' }}>{errors.description.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Talle/s
                </Text>
                <Description>(Talles en los que estará disponible la prenda)</Description>
                <TextField
                    label="Talles"
                    {...register('sizes', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.sizes && (
                    <Text sx={{ color: 'red' }}>{errors.sizes.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Imagen
                </Text>
                <Description>(link-cloud)</Description>
                <TextField
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
                    Precio
                </Text>
                <Description></Description>
                <TextField
                    label="Precio"
                    {...register('price', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.price && (
                    <Text sx={{ color: 'red' }}>{errors.price.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Categoría
                </Text>
                <Description>(Categorías en las que entra la prenda. Ej: "Remera", "Manga Corta", "Vestido", etc)</Description>
                <TextField
                    label="Categoria"
                    {...register('category', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.category && (
                    <Text sx={{ color: 'red' }}>{errors.category.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Genero
                </Text>
                <Description>(Hombre, Mujer, Unisex)</Description>
                <TextField
                    label="Genero"
                    {...register('gender', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.gender && (
                    <Text sx={{ color: 'red' }}>{errors.gender.message}</Text>
                )}
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Temporada
                </Text>
                <Description>(Verano, Otoño, etc)</Description>
                <TextField
                    label="Temporada"
                    {...register('season', { required: 'Este campo es requerido' })}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                {errors.season && (
                    <Text sx={{ color: 'red' }}>{errors.season.message}</Text>
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
    </ FormContainer>
  )
}

export default CreateProductForm;