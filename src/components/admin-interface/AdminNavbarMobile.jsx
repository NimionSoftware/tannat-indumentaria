import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { providerContext } from '../ProviderContextComponent';
import logOutIcon from '../../assets/log-out.png'

const pages = ['Todos mis Productos', 'Agregar Producto', 'Mis Categorias', 'Agregar Categoria', 'Volver a inicio'];

function AdminNavbarMobile() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { setRol } = React.useContext(providerContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        backgroundColor: '#151c29',
        '@media (min-width: 1100px)': {
          display:'none'
        }
      }}
      >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            gap:'2rem',
          }}
          >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((text) => (
                <MenuItem key={text} onClick={handleCloseNavMenu}>
                  <Link
                  style={{
                    textDecoration:'none',
                    color:'black'
                  }}
                  to={
                    text === 'Agregar Producto' ? '/admin/create' :
                    text === 'Todos mis Productos' ? '/admin' :
                    text === 'Mis Categorias' ? '/admin/category' :
                    text === 'Agregar Categoria' ? '/admin/category/create' :
                    text === 'Volver a inicio' ? '/' : '/'
                      }>
                        {text}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              '@media (max-width: 500px)': {
                display:'none'
              }
            }}
          >
            ¡Holaa! Que vamos a hacer hoy?
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((text) => (
              <Link
                style={{
                  textDecoration:'none',
                  color:'white',
                  margin:'0 1rem'
                }}
                to={
                      text === 'Agregar Producto' ? '/admin/create' :
                      text === 'Todos mis Productos' ? '/admin' :
                      text === 'Mis Categorias' ? '/admin/category' :
                      text === 'Agregar Categoria' ? '/admin/category/create' :
                      text === 'Volver a inicio' ? '/' : '/'
                    }>
                    {text}
              </Link>
            ))}
          </Box>
          <Box sx={{
            flexGrow: 0,
            }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminNavbarMobile;