import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import cart from '../assets/cart.png';
import log from '../assets/log.png';
import X from '../assets/x.png';
import burguerMenu from '../assets/burguerMenu.png';
import { cartContext } from './Context';


const ContainerN = styled('nav')({
    zIndex: '9',
    display: 'flex',
    justifyContent:'space-between',
    minHeight:'1rem',
    width: '100%',
    backgroundColor: '#1b1b1b',
    '@media (min-width: 900px)': {
        display: 'none',
        marginBottom: '-3.3rem'
    },

})

const OrderL = styled('ul')({
    zIndex: '1',
    position:'fixed',
    top: '-1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'end',
    width:'50%',
    height:'100%',
    transition: '0.3s ease-in-out',
    backgroundColor: '#1b1b1bee',
    '@media (min-width: 900px)': {
        display: 'none'
      }
})

const ItemList = styled('li')({
    listStyle: 'none',
    transition: '.1s all',
    "&:hover": {
        transform: 'scale(1.05)',
    },
})

const Icon = styled('img')({
    display:'flex',
    alignSelf:'center',
    position: 'relative',
    right:'1rem',
    width: '1.3rem',
    height: '1.3rem',
    margin: '0 1rem',
    filter: 'invert()',
    cursor: 'pointer',
    transition: '.3s all',
})

const Cruz = styled('img')({
    display:'flex',
    alignSelf:'end',
    width: '1.2rem',
    height: '1.2rem',
    margin: '1rem',
    cursor: 'pointer',
    transition: '.3s all',
})

const BurgerMenuIcon = styled('img')({
    width: '3rem',
    margin: '0 2rem',
    transition: '.3s all',
})

const ContainerUser = styled('div')({
    display:'flex',
})

const ContainerLinks = styled('div')({
    display:'flex',
    flexDirection: 'column',
    gap:'2rem',
    marginRight: '2rem',
    marginTop: '3rem',
    textAlign:'end',
})

const ContainerBaloonCount = styled('div')({
    display:'flex',
    cursor: 'pointer',
    transition: '.3s all',
    "&:hover": {
        transform: 'scale(1.1)'
    },
})

const BaloonCount = styled('div')({
    zIndex:'2',
    position:'relative',
    top:'.3rem',
    left:'2rem',
    backgroundColor: 'red',
    borderRadius: '100rem',
    width:'1.1rem',
    height:'1.1rem',
    color:'white',
    fontWeight: 'bold',
    fontSize: '.8rem',
    textAlign:'center',
})

const BurgerMenu = ({openCart, setOpenCart}) => {

    const [open, setOpen] = useState(false);
    const { quantity, qty } = useContext(cartContext);

    return (
        <ContainerN>
            <BurgerMenuIcon src={burguerMenu} onClick={()=> {setOpen(!open)}} />
            <ContainerUser>
                    <ContainerBaloonCount onClick={() => {setOpenCart(!openCart)}}>
                        <BaloonCount>{quantity(qty)}</BaloonCount>
                        <Icon src={cart} alt='Icono carrito de compras' title="Abrir carrito de compras" />
                    </ContainerBaloonCount>
                    <Icon src={log} alt='Icono Login' />
            </ContainerUser>
            {open &&
            <>
                <OrderL style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}>
                    <Cruz src={X} alt='Cruz para cerrar ventana' onClick={() => setOpen(false)} />
                    <ContainerLinks>
                        <ItemList>
                            <Link style={{textDecoration:'none', color: 'white', fontWeight: 'bold'}} to="/">Inicio</Link>
                        </ItemList>
                        <ItemList>
                            <Link style={{textDecoration:'none', color: 'white', fontWeight: 'bold'}} to="/men">Hombres</Link>
                        </ItemList>
                        <ItemList>
                            <Link style={{textDecoration:'none', color: 'white', fontWeight: 'bold'}} to="/women">Mujeres</Link>
                        </ItemList>
                        <ItemList>
                            <Link style={{textDecoration:'none', color: 'white', fontWeight: 'bold'}} to="/shoes">Calzados</Link>
                        </ItemList>
                        <ItemList>
                            <Link style={{textDecoration:'none', color: 'white', fontWeight: 'bold'}} to="/news">Novedades</Link>
                        </ItemList>
                    </ContainerLinks>
                </OrderL>
            </>
            }
        </ContainerN>
    )
}

export default BurgerMenu;