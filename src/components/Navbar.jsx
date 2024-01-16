import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import logo from '../assets/logoNoName.png';
import cart from '../assets/cart.png';
import log from '../assets/log.png';
import BurgerMenu from './BurguerMenu';
import ModalCart from './ModalCart';
import SignIn from './SignIn';
import { useContext } from 'react';
import { cartContext } from './Context';
import { providerContext } from './ProviderContextComponent';


const ContainerN = styled('nav')({
    zIndex:'10',
    position: 'sticky',
    top:'0',
    display: 'flex',
    minHeight:'1rem',
    width: '100%',
    height: '3.3rem',
    backgroundColor: '#1b1b1bd0',
    '@media (max-width: 950px)': {
        height:'2.5rem'
      },
    '@media (max-width: 900px)': {
        display: 'none',
      },
    marginBottom: '-3.3rem',
    transition: '.3s all'
})

const OrderL = styled('ul')({
    position: 'relative',
    top:'0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems:'center',
    margin:'0',
    width:'100%',
    '@media (max-width: 768px)': {
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

const Images = styled('img')({
    position: 'relative',
    left:'1rem',
    width: '3rem',
    height: '3rem',
    transition: '.3s all',
    filter: 'drop-shadow(0 0 .2px #fff)',
    cursor: 'pointer',
    "&:hover": {
        transform: 'scale(1.1)'
    },
    '@media (max-width: 950px)': {
        width: '2.5rem',
        height: '2.5rem',
      },
    '@media (max-width: 900px)': {
        display: 'none',
      },
})

const Icon = styled('img')({
    display:'flex',
    alignSelf:'center',
    position: 'relative',
    right:'1rem',
    width: '1.3rem',
    height: '1.3rem',
    margin: '0 3rem',
    filter: 'invert()',
    cursor: 'pointer',
    transition: '.3s all',
    "&:hover": {
        transform: 'scale(1.1)'
    },
    '@media (max-width: 768px)': {
        display: 'none'
      }
})

const ContainerBaloonCount = styled('div')({
    display:'flex',
    cursor: 'pointer',
    transition: '.3s all',
    "&:hover": {
        transform: 'scale(1.1)'
    },
    '@media (max-width: 768px)': {
        display: 'none'
      }
})

const BaloonCount = styled('div')({
    zIndex:'2',
    position:'relative',
    top:'.3rem',
    left:'4rem',
    backgroundColor: 'red',
    borderRadius: '100rem',
    width:'1.1rem',
    height:'1.1rem',
    color:'white',
    fontWeight: 'bold',
    fontSize: '.8rem',
    textAlign:'center',
})


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const { quantity, openCart, setOpenCart } = useContext(cartContext);
    const { rol } = useContext(providerContext);

    const routes = [
        { path: '/', label: 'Inicio' },
        { path: '/hombres', label: 'Hombres' },
        { path: '/mujeres', label: 'Mujeres' },
        { path: '/calzados', label: 'Calzados' },
        { path: '/novedades', label: 'Novedades' }
      ];

    return (
        <>
            <ContainerN>
                <Link to='/'><Images src={logo} alt='Logo Tannat'/></Link>
                <OrderL>
                {routes.map((route, index) => (
                    <ItemList key={index}>
                        <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '.9rem'
                        }}
                        to={route.path}
                        >
                        {route.label}
                        </Link>
                    </ItemList>
                    ))}
                {rol && <ItemList>
                    <Link style={{textDecoration:'none', color: '#04a0dd', fontWeight: 'bold', fontSize:'1rem'}} to="/admin">Mi tienda</Link>
                </ItemList>}
                </OrderL>
                <ContainerBaloonCount onClick={() => {
                    setOpenCart(!openCart)
                    }}
                    >
                    <BaloonCount>{quantity()}</BaloonCount>
                    <Icon src={cart} alt='Icono carrito de compras' title="Abrir carrito de compras" />
                </ContainerBaloonCount>
                {!rol && <Icon
                    onClick={()=>setOpen(true)}
                    src={log} alt='Icono Login'
                    title="Iniciar sesión"
                    />}
                {open && <SignIn
                    setOpen={setOpen}
                    open={open}
                    />}
            </ContainerN>
            {openCart && <ModalCart setOpenCart={setOpenCart} />}
            <BurgerMenu  openCart={openCart} setOpenCart={setOpenCart} setOpen={setOpen} open={open}/>
        </>
    )
}

export default Navbar;