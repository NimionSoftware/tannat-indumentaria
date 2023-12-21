import React from 'react';
import addClothesIcon from '../../assets/clothes-icon.png'
import updateClothesIcon from '../../assets/update-product.png'
import deleteClothesIcon from '../../assets/delete-product.png'
import logOutIcon from '../../assets/log-out.png'
import { Link } from 'react-router-dom';
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

const AdminNavbar = () => {
  const [option, setOption] = React.useState('Agregar Producto');

  const handleChange = (event, option) => {
    if (option !== null) {
        setOption(option);
      }
  };

  const list = () => (
    <Box
      sx={{
        width: '250px',
        backgroundColor: '#1C2536',
        height: '100vh'
    }}
    >
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'90%'
      }}>
        {['Agregar Producto', 'Modificar Producto', 'Eliminar Producto'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ToggleButtonGroup
                color="primary"
                value={option}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
            {/* <Link to={text === 'Agregar Producto' ? '/admin/create' : text === 'Modificar Producto' ? '/admin/update' : text === 'Eliminar Producto' ? '/admin/delete' : '/'}> */}
            <ToggleButton sx={{color: '#9AA1AB'}} value={text} aria-label={option}>

              <ListItemIcon>
                <img style={{width: '25px'}} src={index === 0 ? addClothesIcon : index === 1 ? updateClothesIcon : deleteClothesIcon} alt="list icon" />
              </ListItemIcon>
              <ListItemText primary={text} />

            </ToggleButton>
            {/* </Link> */}
            </ToggleButtonGroup>
          </ListItem>
        ))}
          <ListItem sx={{color: '#9AA1AB', position: 'absolute', bottom: '10px'}}disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img style={{width: '25px'}} src={logOutIcon} alt="list icon" />
              </ListItemIcon>
              <ListItemText primary={'Salir'} />
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