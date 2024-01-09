import React, { useContext } from 'react';
import addClothesIcon from '../../assets/clothes-icon.png'
import updateClothesIcon from '../../assets/update-product.png'
import deleteClothesIcon from '../../assets/delete-product.png'
import logOutIcon from '../../assets/log-out.png'
import { Link, useNavigate } from 'react-router-dom';
import {
Box,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
ToggleButton,
ToggleButtonGroup
} from '@mui/material';
import { providerContext } from '../ProviderContextComponent';

const AdminNavbar = () => {
  const [option, setOption] = React.useState('Agregar Producto');

  const handleChange = (event, option) => {
    if (option !== null) {
        setOption(option);
      }
  };

  const { setRol } = useContext(providerContext);
  const navigate = useNavigate();


  const list = () => (
    <Box
      sx={{
        width: '250px',
        backgroundColor: '#1C2536',
        height: '100vh',
    }}
    >
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'90%'
      }}>
        {['Todos mis Productos' , 'Agregar Producto', 'Eliminar Producto'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ToggleButtonGroup
                color="primary"
                value={option}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
            <Link to={text === 'Agregar Producto' ? '/admin/create' : text === 'Todos mis Productos' ? '/admin' : text === 'Eliminar Producto' ? '/admin/delete' : '/'}>
            <ToggleButton sx={{
              color: '#9AA1AB',
              transition:'.1s all',
              '&:hover': {
                filter:'brightness(2)'
              }}}
              value={text} aria-label={option}
              >
              <ListItemIcon>
                <img style={{width: '25px'}} src={index === 0 ? addClothesIcon : index === 1 ? updateClothesIcon : deleteClothesIcon} alt="list icon" />
              </ListItemIcon>
              <ListItemText primary={text} />

            </ToggleButton>
            </Link>
            </ToggleButtonGroup>
          </ListItem>
        ))}
        <ListItem disablePadding>
            <ToggleButtonGroup
                color="primary"
                value={option}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
              <ToggleButton sx={{
                color: '#9AA1AB',
                transition:'.1s all',
                '&:hover': {
                  filter:'brightness(2)'
                }
              }}
                value={'Volver al inicio'} aria-label={option}>

                <ListItemIcon>
                  <p style={{
                    color: '#9AA1AB',
                    fontSize:'1.5rem',
                    fontWeight:'bolder',
                    }}>↩</p>
                </ListItemIcon>
                <Link to={'/'}
                  style={{
                    textDecoration:'none',
                    fontSize:'1.1rem',
                    color:'#9AA1AB',
                  }}
                >
                  Volver al inicio
                </Link>
              </ToggleButton>
            </ToggleButtonGroup>
          </ListItem>
          <ListItem sx={{
            color: '#9AA1AB',
            position: 'absolute',
            bottom: '10px',
            display:'flex',
            flexDirection:'column',
            gap:'3rem',
            transition:'.1s all',
                '&:hover': {
                  filter:'brightness(2)'
                }
          }}
            disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img style={{width: '25px'}} src={logOutIcon} alt="list icon" />
              </ListItemIcon>
              <ListItemText onClick={()=>{
                sessionStorage.clear();
                setRol(null);
                navigate('/');
              }}
              primary={'Salir'} />
            </ListItemButton>
          </ListItem>
      </List>

    </Box>
  );

  return (
    <div style={{width:'250px', height: '100%'}}>
      {['left'].map((anchor) => (
        <div key={anchor} style={{height: 'auto', backgroundColor: '#1C2536',}}>
          <Box
            sx={{
                backgroundColor: '#1C2536',
            }}
          >
            {list(anchor)}
          </Box>
        </div>
      ))}
    </div>
  );
}

export default AdminNavbar;