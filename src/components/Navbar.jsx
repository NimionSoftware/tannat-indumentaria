import * as React from 'react';
import { Grid, Link, Typography, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const ContainerN = styled('div')({
    minHeight:'3rem',
    width: '100%',
    marginBottom: '10rem',
})



const Navbar = () => {
    return (
        <ContainerN>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{
                            backgroundColor: '#1e6cd37a',
                        }}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* en este espacio poner un icono de menu de hamburguesa */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ContainerN>
    )
}

export default Navbar;