import { useContext, useEffect } from "react";
import { cartContext } from "./Context";
import { TextField, Grid, styled } from '@mui/material';
import { useForm } from 'react-hook-form';

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

const DataCustomer = ({ itemW, setItemW }) => {

    const {cart} = useContext(cartContext);

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

      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
        window.open(`https://wa.me/5493413869246?text=ID:%20${data.nombre}%2C%20Tel:%20${data.numero}%2C%20Dir:%20${data.direccion}%2C%20Pago%20con:%20${data.paymentMethod}%2E%0A-%0A${itemW}`, '_blank');
      };

    return (
        <>
            <p style={{textAlign:'center', fontSize: '1.2rem'}}>Completa los campos para poder realizar el pedido!</p>
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