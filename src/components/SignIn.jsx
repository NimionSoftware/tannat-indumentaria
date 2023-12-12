import React from 'react'
import {
    TextField,
    Typography,
    Divider,
    Button,
    Link,
    styled
} from '@mui/material'

const Text = styled(Typography)({
    width: '100%',
    fontSize: '14px',
    color: 'white',
    textAlign: 'start'
})

const SignIn = ({handleClick, handleClose, open}) => {
    const Menu = styled('div')({
        position: 'absolute',
        maxWidth: '300px',
        top: 53,
        right: 50,
        animation: `open ease-in-out .3s`,
        transition: 'all',
        animationFillMode: 'both',
        transformOrigin: 'top right',
        "@keyframes open": {
            "0%": {
              transform: "scale(0)"
            },
            "100%": {
              transform: "scale(1)"
            }
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <Menu
        sx={{
            display: open ? 'absolute' : 'none'
        }}
    >
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                padding: '25px',
                backgroundColor: '#1b1b1bd0'
            }}
            onSubmit={handleSubmit}
        >
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
                onClick={() => handleClose()}>
                Ingresar
            </Button>
            <Divider
                variant="middle"
                sx={{
                    margin: '1.6rem 0',
                    backgroundColor: 'white',
                    width: '70%',
                    height: '.1px',
                    opacity: '0.5',
                  }}
            />
            <Text
                sx={{
                    textAlign: 'center',
                    fontSize: '12px'
                }}
            >
                Todavia no tienes cuenta? <Link href="./SignUp.jsx">Registrate!</Link>
            </Text>
        </form>
  </Menu>
  )
}

export default SignIn