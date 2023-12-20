import React from 'react';
import addClothesIcon from '../assets/clothes-icon.png'
import updateClothesIcon from '../assets/update-product.png'
import deleteClothesIcon from '../assets/delete-product.png'
import logOutIcon from '../assets/log-out.png'
import {
Box,
SwipeableDrawer,
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
        height: '100%',
        width: '250px',
        backgroundColor: '#1C2536'
    }}
    >
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '90%'
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
            <ToggleButton sx={{color: '#9AA1AB'}} value={text} aria-label={option}>

              <ListItemIcon>
                <img style={{width: '25px'}} src={index === 0 ? addClothesIcon : index === 1 ? updateClothesIcon : deleteClothesIcon} alt="list icon" />
              </ListItemIcon>
              <ListItemText primary={text} />

            </ToggleButton>
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
    <div>
      {['left'].map((anchor) => (
        <div key={anchor} style={{backgroundColor: '#1C2536',}}>
          <SwipeableDrawer
            sx={{
                backgroundColor: '#1C2536',
            }}
            variant='permanent'
          >
            {list(anchor)}
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
}

export default AdminNavbar;