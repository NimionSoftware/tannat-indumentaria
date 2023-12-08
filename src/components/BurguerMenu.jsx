import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import logo from '../assets/logoTannat1.png';
import cart from '../assets/cart.png';
import log from '../assets/log.png';
import X from '../assets/x.png';
import burguerMenu from '../assets/burguerMenu.png';


const ContainerN = styled('nav')({
    display: 'flex',
    justifyContent: 'space-between',
    minHeight:'1rem',
    width: '100%',
    marginBottom: '12rem',
    backgroundColor: '#1b1b1b',
    '@media (min-width: 768px)': {
        display: 'none'
      }
})

const OrderL = styled('ul')({
    zIndex: '1',
    position:'fixed',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    margin:'0',
    width:'50%',
    height:'100%',
    backgroundColor: '#1b1b1b',
    '@media (min-width: 768px)': {
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
    right:'1rem',
    width: '3rem',
    height: '3rem',
    transition: '.3s all',
    filter: 'drop-shadow(0 0 .2px #fff)',
    '@media (min-width: 768px)': {
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
})

const Cruz = styled('img')({
    display:'flex',
    alignSelf:'center',
    position: 'relative',
    right:'1rem',
    width: '1.2rem',
    height: '1.2rem',
    margin: '0 3rem',
    cursor: 'pointer',
    transition: '.3s all',
})

const BurgerMenuIcon = styled('img')({
    width: '3rem',
    margin: '0 2rem',
    transition: '.3s all',
})

const BurgerMenu = () => {

    const [open, setOpen] = useState(false);

    return (
        <ContainerN>
            <BurgerMenuIcon src={burguerMenu} onClick={() => setOpen(!open)} />
            {open &&
            <>
                <OrderL>
                    <Cruz src={X} alt='Cruz para cerrar ventana' />
                    <Link to='/'><Images src={logo} alt='Logo Tannat'/></Link>
                    <ItemList>
                        <Icon src={log} alt='Icono Login' />
                        <Icon src={cart} alt='Icono carrito de compras' />
                    </ItemList>
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
            </>
            }
        </ContainerN>
    )
}

export default BurgerMenu;