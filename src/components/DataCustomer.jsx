import { useContext, useEffect, useState } from "react";
import { cartContext } from "./Context";
import { TextField, Grid, styled, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const FinishButton = styled('button')({
    fontWeight: 'bold',
    width:'15rem',
    height:'2rem',
    border:'none',
    cursor:'pointer',
    background: 'linear-gradient(90deg, #1aacd1, transparent) #1aacd1',
    fontFamily: 'inherit',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color .5s',
    placeContent: 'center',
    '&:hover': {
        background: 'linear-gradient(90deg, #1aacd1, transparent) #213bcf',
    },
    '@media (max-width: 1000px)': {
        width:'12rem',
        fontSize:'.9rem'
      },
    marginTop:'1rem'
})

const ContainerForm = styled(Grid)({
    display:"flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    minWidth:'25rem',
    width:'100%',
    gap:'1rem',
    marginTop:'2rem'
})

const TitleDataCustomer = styled(Typography)({
    textAlign:'center',
    fontSize: '1.2rem',
    '@media (max-width: 1150px)': {
        fontSize:'.9rem',
        textAlign:'center',
      },
})

const schema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .regex(/^[a-zA-Z ]+$/)
        .messages({
            'string.base': 'El nombre solo debe contener letras',
            'string.empty': 'Este campo es requerido',
            'string.minDomainSegments': 'El nombre al menos debe tener 3 letras',
            'string.min': 'El nombre al menos debe tener 3 letras',
            'string.pattern.base': 'El nombre solo debe contener letras'
        }),
    numero: Joi.string()
        .pattern(/^\d+$/)
        .min(8)
        .max(12)
        .messages({
            'string.base': 'El número de celular debe ser solo numeros',
            'string.empty': 'Este campo es requerido',
            'string.min': 'El número de celular al menos debe tener 8 digitos',
            'string.max': 'El número de celular no debe tener mas de 12 digitos',
            'string.pattern.base': 'El número de celular debe contener solo números',
        })
        .required(),
    direccion: Joi.string()
        .regex(/^(?=.*[a-zA-Z]{2})(?=.*\d{4})[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d.]+$/)
        .required()
        .messages({
            'string.pattern.base':
            "La direccion debe contener nombre de la calle y número de puerta. Ej: 'Av.Libertador 1234'",
            'string.min': 'Minimo debe tener 8 letras y 3 numeros',
            'string.empty': 'Este campo es requerido'
        }),
    paymentMethod: Joi.string()
        .messages({
        'alternatives.types': 'Este campo es requerido',
        'string.empty': 'Este campo es requerido'
        })
        .required()
  });

const DataCustomer = () => {


    const {cart, itemW, setItemW, popUp, setPopUp, formData, setFormData} = useContext(cartContext);

    useEffect(() => {
        if (cart.length > 0) {
            setItemW(cart.map((item, index) => {
                let newIndex = index + 1
                return (
                    `${newIndex}%2D%20%2A${item.productName}%2C%20T%3A%20${item.productSizes}${( item.color ? `%2C%20Color%3A%20${item.color}` : '')}%2C%20%24${item.productPrice}%2C%20X${item.qty}%2A%0A-%0A`
                );
            }))
        }
      }, [cart]);

      const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: joiResolver(schema)
      });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

      const onSubmit = (data) => {
        window.open(`https://wa.me/5493413869246?text=ID:%20${data.nombre}%2C%20Tel:%20${data.numero}%2C%20Dir:%20${data.direccion}%2C%20Pago%20con:%20${data.paymentMethod}%2E%0A-%0A${itemW}`, '_blank');
        setPopUp(!popUp)
    };

    return (
        <>
            <TitleDataCustomer>Completa los campos para poder realizar el pedido!</TitleDataCustomer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContainerForm container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            maxWidth:'20rem',
                            width:'100%',
                            minWidth: '13rem',
                            minHeight:'5rem',
                        }}
                        >
                        <TextField
                            style={{width:'100%'}}
                            label="Nombre completo"
                            {...register('nombre', { required: 'Este campo es requerido' })}
                            error={!!errors.nombre}
                            helperText={errors.nombre ? errors.nombre.message : ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            maxWidth:'20rem',
                            width:'100%',
                            minWidth: '13rem',
                            minHeight:'5rem',
                        }}
                        >
                        <TextField
                            style={{width:'100%'}}
                            label="Número de contacto"
                            {...register('numero', { required: 'Este campo es requerido' })}
                            error={!!errors.numero}
                            helperText={errors.numero ? errors.numero.message : ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            maxWidth:'20rem',
                            width:'100%',
                            minWidth: '13rem',
                            minHeight:'5rem',
                        }}
                        >
                        <TextField
                            style={{width:'100%'}}
                            label="Dirección de envío"
                            {...register('direccion', { required: 'Este campo es requerido' })}
                            error={!!errors.direccion}
                            helperText={errors.direccion ? errors.direccion.message : ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection:'column',
                        maxWidth: '20rem',
                        width: '100%',
                        minWidth: '13rem',
                        minHeight: '3rem',
                        }}
                    >
                        <select
                            style={{ width: '100%', height:'3.5rem' }}
                            {...register('paymentMethod', { required: 'Selecciona un método de pago' })}
                            error={!!errors.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="">Método de pago</option>
                            <option value="tarjeta">Tarjeta</option>
                            <option value="efectivo">Efectivo</option>
                        </select>
                        {errors.paymentMethod && (
                        <span style={{ color: 'red', fontSize:'.8rem', paddingLeft:'.8rem', marginBottom:'-1.05rem' }}>{errors.paymentMethod.message}</span>
                        )}
                    </Grid>
                    <FinishButton
                        type="submit"
                        >
                            Enviar pedido
                    </FinishButton>
                </ContainerForm>
            </form>
        </>
    )
}

export default DataCustomer;