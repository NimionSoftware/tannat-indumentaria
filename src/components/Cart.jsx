import { useContext, useState } from "react";
import { cartContext } from "./Context";
import ItemCart from "./ItemCart"
import { Typography, styled } from "@mui/material";
import carti from '../assets/emptyCart.png';
import DataCustomer from "./DataCustomer";

const ContainerCart = styled('div')({
    position:'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    height:'29.5rem',
    overflow:'hidden'
})

const ContainerProducts = styled('div')({
    boxShadow: '0 0 10px #1b1b1b8c inset',
    overflowY: 'scroll',
    width:'100%',
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

const FinishButton = styled('Button')({
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
    const [openData, setOpenData] = useState(false);

    return(
        <>
            {!openData && <ContainerCart>
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
                        <p style={{fontWeight: 'bold'}}>Total: ${total()}</p>
                        <ContainerButton>
                            <FinishButton
                                onClick={() => {setOpenData(!openData)}}
                                >
                                    Hacer pedido
                            </FinishButton>
                            <EmptyButton onClick={()=>{emptyCart()}}>Vaciar Carrito</EmptyButton>
                        </ContainerButton>
                    </>
                    )}
            </ContainerCart>}
            {openData && <DataCustomer openData={openData} setOpenData={setOpenData} />}
        </>
    )
}

export default Cart;