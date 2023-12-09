import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import logo from '../assets/logoNoName.png';
import cart from '../assets/cart.png';
import log from '../assets/log.png';
import BurgerMenu from './BurguerMenu';


const ContainerN = styled('nav')({
    display: 'flex',
    minHeight:'1rem',
    width: '100%',
    marginBottom: '12rem',
    backgroundColor: '#1b1b1bd0',
    '@media (max-width: 768px)': {
        display: 'none'
      }
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
    '@media (max-width: 768px)': {
        display: 'none'
      }
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


const Navbar = () => {
    return (
        <>
            <ContainerN>
                <Link to='/'><Images src={logo} alt='Logo Tannat'/></Link>
                <OrderL>
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
                </OrderL>
                <Icon src={cart} alt='Icono carrito de compras' />
                <Icon src={log} alt='Icono Login' />
            </ContainerN>
            <BurgerMenu />
        </>
    )
}

export default Navbar;