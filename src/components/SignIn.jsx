import React, { useContext, useEffect, useState } from 'react';
import {
  Typography,
  Divider,
  Button,
  Link,
  styled,
  FormHelperText
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { providerContext } from './ProviderContextComponent';

const Text = styled(Typography)({
  width: '100%',
  fontSize: '14px',
  color: 'white',
  textAlign: 'start'
});

const Cross = styled('p')({
    display:'flex',
    justifyContent:'end',
    alignItems:'center',
    alignSelf:'end',
    cursor:'pointer',
    width:'2rem',
    height:'2rem',
    fontSize:'3rem',
    fontWeight:'bold',
    background: 'linear-gradient(90deg, rgba(0, 185, 189, 1) 0%, rgba(22, 26, 255, 1) 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    '-webkit-text-fill-color': 'transparent',
    transition: '.2s all',
    '&:hover': {
        transform: 'scale(1.2)'
    },
    margin:'0',
})

const SignIn = ({ setOpen }) => {
  const Menu = styled('div')({
    zIndex:'2',
    position: 'absolute',
    maxWidth: '300px',
    top: 53,
    right: 50,
    '@media (max-width: 900px)': {
        width:'100%',
        maxWidth: 'auto',
        top:35,
        right: 50,
      }
    // animation: `open ease-in-out .3s`,
    // transition: 'all',
    // animationFillMode: 'both',
    // transformOrigin: 'top right',
    // '@keyframes open': {
    //   '0%': {
    //     transform: 'scale(0)'
    //   },
    //   '100%': {
    //     transform: 'scale(1)'
    //   }
    // }
  });

  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
      .messages({
        'string.base': 'El correo electrónico debe ser una cadena de texto',
        'string.empty': 'Ingrese un correo electrónico',
        'string.email': 'El correo electrónico debe ser una dirección de correo válida',
        'string.tlds.allow': 'El correo electrónico debe tener un dominio de nivel superior válido (.com o .net)'
      }),
    password: Joi.string()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      .required()
      .messages({
        'string.pattern.base': 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un dígito',
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.empty': 'Ingrese una contraseña'
      })
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: joiResolver(schema)
  });

  const { verifyUser, errorMessage } = useContext(providerContext);

  const onSubmit = async (data) => {
    await verifyUser(data);
    navigate('/admin')
  };


  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => setShowPassword((show) => !show);

  return (
    <Menu
    //   sx={{
    //     display: open ? 'absolute' : 'none'
    //   }}
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
          backgroundColor: '#1b1b1bef'
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Cross onClick={()=>setOpen(false)}>&times;</Cross>
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
        <Text sx={{ marginTop: '20px' }}>Email</Text>
        <FormControl
          sx={{
            m: 1,
            width: '100%',
            margin: 0,
            '&:hover .MuiInput-underline:before': {
              borderBottomColor: '#9aa2c1',
            },
          }}
          variant="filled"
          error={!!errors.email}
        >
          <Input
            {...register('email')}
            sx={{
              height: '2.5rem',
              width: '100%',
              borderRadius: '2px',
              color: 'white',
              paddingLeft:'1rem'
            }}
            type="text"
          />
          {errors.email && (
            <FormHelperText sx={{ color: '#c52828' }}>
              {errors.email?.message ? errors.email.message.toString() : ''}
            </FormHelperText>
          )}
        </FormControl>

        <Text sx={{ marginTop: '20px' }}>Contraseña</Text>
        <FormControl
          sx={{
            m: 1,
            width: '100%',
            margin: 0,
            '&:hover .MuiInput-underline:before': {
              borderBottomColor: '#9aa2c1',
            },
          }}
          variant="filled"
          error={!!errors.password}
        >
          <Input
            {...register('password')}
            sx={{
              height: '2.5rem',
              width: '100%',
              borderRadius: '2px',
              color: 'white',
              paddingLeft:'1rem'
            }}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ filter: 'invert()' }} />
                  ) : (
                    <Visibility sx={{ filter: 'invert()' }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && (
            <FormHelperText>
              {errors.password?.message ? errors.password.message.toString() : ''}
            </FormHelperText>
          )}
        </FormControl>
        <Button
          variant='contained'
          sx={{
            width: 100,
            marginTop: '20px'
          }}
          type='submit'
        >
          Ingresar
        </Button>
        {errorMessage && <p style={{color:'#c52828'}}>La contraseña o el email son incorrectos</p>}
        <Divider
          variant='middle'
          sx={{
            margin: '1.6rem 0',
            backgroundColor: 'white',
            width: '70%',
            height: '.1px',
            opacity: '0.5'
          }}
        />
        <Text
          sx={{
            textAlign: 'center',
            fontSize: '12px'
          }}
        >
          ¿Todavía no tienes cuenta?{' '}
          <Link href='./SignUp.jsx'>Regístrate!</Link>
        </Text>
      </form>
    </Menu>
  );
};

export default SignIn;
