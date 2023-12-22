import { useContext, useEffect } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import heart from '../assets/mano.png';

const ContainerPopUp = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    minWidth:'25rem',
    width:'40%',
    height:'35rem',
    backgroundColor: '#fff',
    borderRadius:'.1rem',
    gap:'4rem'
})

const Text = styled(Typography)({
    textAlign: 'center',
    fontSize: '2rem',
})

const TextAgain = styled(Typography)({
    textAlign: 'center',
    fontSize: '.9rem',
})

const ButtonAgain = styled('button')({
    textAlign: 'center',
    fontSize: '.9rem',
    backgroundColor:'transparent',
    border:'none',
    textDecoration:'underline',
    color:'blue',
    cursor:'pointer',
    transition:'.15s all',
    '&:hover':{
        color:'#0f5ceb',
        transform: 'scale(1.01)'
    },
})

const CloseButton = styled('button')({
    fontWeight: 'bold',
    width:'10rem',
    height:'1.5rem',
    border:'none',
    cursor:'pointer',
    backgroundColor:'#d3d3d3',
    margin: '0 auto',
    transition:'.15s all',
    '&:hover':{
        backgroundColor:'#ce2929',
        color:'white'
    },
    '@media (max-width: 1000px)': {
        backgroundColor:'#5e5e5e1f',
        width: '7rem',
        color: 'red'
      }
})

const ContainerAgain = styled('div')({
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    '@media (max-width: 1120px)': {
        flexDirection:'column',
      }
})

const ImagePop = styled('img')({
    margin: '0 auto',
    width:'10rem'
})

const PopUp = ({setPopUp}) => {

    const {cart, setOpenCart, itemW, setItemW, formData, emptyCart} = useContext(cartContext);

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

      const onSubmit = (data) => {
        window.open(`https://wa.me/5493413869246?text=ID:%20${data.nombre}%2C%20Tel:%20${data.numero}%2C%20Dir:%20${data.direccion}%2C%20Pago%20con:%20${data.paymentMethod}%2E%0A-%0A${itemW}`, '_blank');
      };

    return (
        <>
         <ContainerPopUp>
            <ImagePop src={heart} alt='Icono de corazon' />
            <Text>¡Gracias por confiar en nosotros!</Text>
            <CloseButton onClick={() => {
                setPopUp(false)
                setOpenCart(false)
                emptyCart()
                }}>
                    Cerrar
            </CloseButton>
            <ContainerAgain>
                <TextAgain>¿Tuviste algun problema al enviar tu pedido?</TextAgain>
                <ButtonAgain onClick={() => onSubmit(formData)}>Volver a enviar pedido</ButtonAgain>
            </ContainerAgain>
         </ContainerPopUp>
        </>
    )
}

export default PopUp;