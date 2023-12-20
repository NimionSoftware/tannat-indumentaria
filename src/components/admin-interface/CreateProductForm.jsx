import React from 'react'
import {
    styled,
    Typography,
    TextField,
    Button
} from '@mui/material'

const Text = styled(Typography)({
    width: '100%',
    fontSize: '14px',
    color: 'white',
    textAlign: 'start'
})

const CreateProductForm = () => {
  return (
    <>
        <form action="">

            <Text
                sx={{
                    textAlign: 'center',
                    fontSize: '18px',
                    marginBottom: 1,
                    textDecoration: 'underline'
                }}
            >
                Ingresa!
            </Text>

            <Text
                sx={{
                    marginTop: '20px',
                }}
            >
                Email
            </Text>
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
                Contraseña
            </Text>
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
                Ingresar
            </Button>
        </form>
    </>
  )
}

export default CreateProductForm