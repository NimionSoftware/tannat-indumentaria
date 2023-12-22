import React from 'react'
import {
  styled,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material'

const FormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  padding: '30px 0',
  overflowY: 'scroll',
  maxHeight: '100vh'
})

const Form = styled(Box)({
  width: '350px'
})

const Text = styled(Typography)({
  width: '100%',
  fontSize: '14px',
  color: 'black',
  textAlign: 'start'
})

const Description = styled (Typography)({
  width: '100%',
  fontSize: '10px',
  color: 'black',
  textAlign: 'start'
})

const UpdateProduct = () => {
  return (
    <FormContainer>
    <Form>
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
            action=""
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
            <TextField
                sx={{
                    width: '100%',
                    marginTop: '10px',
                    background: 'white',
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Descripcion
            </Text>
            <Description>(Breve descripcion de la prenda, puede incluir detalles de costura, tipo de tela, etc)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Talle/s
            </Text>
            <Description>(Talles en los que estará disponible la prenda)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Imagen
            </Text>
            <Description>(link-cloud)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Precio
            </Text>
            <Description></Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Categoría
            </Text>
            <Description>(Categorías en las que entra la prenda. Ej: "Remera", "Manga Corta", "Vestido", etc)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Genero
            </Text>
            <Description>(Hombre, Mujer, Unisex)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Temporada
            </Text>
            <Description>(Verano, Otoño, etc)</Description>
            <TextField
                sx={{
                    width: '100%',
                    background: 'white',
                    marginTop: '10px'
                }}
            />
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
</ FormContainer>
)
}

export default UpdateProduct