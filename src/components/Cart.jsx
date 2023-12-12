import { useContext } from "react";
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
    backgroundColor: '#fff',
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
    '&:hover':{
        backgroundColor:'#ce2929',
        color:'white'
    }
})

const FinishButton = styled('button')({
    fontWeight: 'bold',
    width:'15rem',
    height:'2rem',
    backgroundColor: '#1aacd1',
    color:'white',
    border:'none',
    cursor:'pointer',
    '&:hover':{
        background: 'linear-gradient(90deg, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)',
    }
})

const ContainerButton = styled('div')({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'1rem'
})

const Cart = () => {

    const {total, emptyCart, get} = useContext(cartContext);


    return(
        <ContainerCart>
            <h3 style={{fontSize:'1.5rem'}}>Mi carrito de compras!</h3>
            {get.length > 0
                ?
                (
                    <ContainerProducts>
                        {get.map((item, index) => <ItemCart item={item} key={index} />)}
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
            {get.length > 0 && (
                <>
                    <p style={{fontWeight: 'bold'}}>Total: US$ {total()}</p>
                    <ContainerButton>
                        <FinishButton onClick={()=>{}}>Enviar pedido</FinishButton>
                        <EmptyButton onClick={()=>{emptyCart()}}>Vaciar Carrito</EmptyButton>
                    </ContainerButton>
                </>
                )}
        </ContainerCart>
    )
}

export default Cart;