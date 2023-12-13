import { useContext, useEffect, useState } from "react";
import { cartContext } from "./Context";
import ItemCart from "./ItemCart"
import { Typography, styled } from "@mui/material";
import carti from '../assets/emptyCart.png';

const ContainerCart = styled('div')({
    position:'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    height:'29.5rem',
})

const ContainerProducts = styled('div')({
    boxShadow: '0 0 10px #1b1b1b8c inset',
    overflowY: 'scroll',
    width:'98%',
     '::-webkit-scrollbar': {
        width: '8px',
    },
    '::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '5px',
    },
})

const EmptyCart = styled(Typography)({
    fontWeight: 'bold',
    marginTop:'1rem'
})

const EmptyButton = styled('button')({
    fontWeight: 'bold',
    width:'10rem',
    height:'1.5rem',
    border:'none',
    cursor:'pointer',
    backgroundColor:'#d3d3d3',
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

const FinishButton = styled('a')({
    paddingTop:'8px',
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
      }
})

const ContainerButton = styled('div')({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'1rem'
})

const CartTitle = styled('h3')({
    fontSize:'1.5rem',
    transition:'all .2s',
    '@media (max-width: 768px)': {
        fontSize: '1.2rem',
      }
})

const Cart = () => {

    const {total, emptyCart, cart} = useContext(cartContext);
    const [itemW, setItemW] = useState(``)

    useEffect(() => {
        if (cart.length > 0) {
            setItemW(cart.map((item, index) => {
                let newIndex = index + 1
                return (
                    `%2D%20${newIndex}%3A%20%2A${item.productName}%2C%20T%3A%20${item.productSizes}%2C%20%24${item.productPrice}%2C%20X${item.qty}%2A%0A`
                );
            }))
        }
      }, [cart]);

    return(
        <ContainerCart>
            <CartTitle>Mi carrito de compras!</CartTitle>
            {cart.length > 0
                ?
                (
                    <ContainerProducts>
                        {cart.map((item, index) => <ItemCart item={item} key={index} />)}
                    </ContainerProducts>
                )
                :
                (
                    <>
                        <img src={carti} alt="Icono carrito vacio" style={{width:'5rem', margin:'0 auto'}}/>
                        <EmptyCart>
                            El carrito esta vacío, comienza a cargarlo con productos!
                        </EmptyCart>
                    </>
                )
            }
            {cart.length > 0 && (
                <>
                    <p style={{fontWeight: 'bold'}}>Total: US$ {total()}</p>
                    <ContainerButton>
                        <FinishButton
                            href={`https://wa.me/5493413869246?text=${itemW}`}
                            target="_blank"
                            >
                                Enviar pedido
                            </FinishButton>
                        <EmptyButton onClick={()=>{emptyCart()}}>Vaciar Carrito</EmptyButton>
                    </ContainerButton>
                </>
                )}
        </ContainerCart>
    )
}

export default Cart;