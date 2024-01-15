import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { providerContext } from "../ProviderContextComponent";
import { useContext } from "react";

const ContainerPopUp= styled(Box)({
    position:'fixed',
    top:0,
    left:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    height:'100%',
    backgroundColor:'#00000023'
  })

  const Modal = styled('div')({
    width: '40%',
    minWidth:'24rem',
    backgroundColor:'#f3f3f3',
    borderRadius:'3px',
  })

  const Text = styled('p')({
    textAlign:'center',
    fontSize:'2rem',
    fontWeight:'500',
    marginTop:'2rem',
    '@media (max-width: 1100px)': {
        fontSize:'1.5rem',
    }
  })

  const LinkContainer= styled(Link)({
    display:'flex',
    alignSelf:'center',
    textDecoration:'none',
    transition:'all .2s',
    '&:hover': {
        filter:'brightness(1.1)',
    }
  })

const PopUpExpired = () => {

    const { setRol, setTokenExpired } = useContext(providerContext);

    return (
        <ContainerPopUp>
            <Modal>
                <Text>Tu sesión ha expirado!</Text>
                <Typography
                    sx={{
                        fontSize:'1.2rem',
                        textAlign:'center',
                        '@media (max-width: 1100px)': {
                            fontSize:'1rem',
                        }
                        }} >
                            Inicia sesión para continuar editando tu Tienda.
                </Typography>
                <LinkContainer to='/'>
                    <Button
                        onClick={() => {
                            sessionStorage.clear()
                            setRol(null)
                            setTokenExpired(false)
                        }}
                        style={{
                            fontWeight:'bold',
                            margin:'2rem auto',
                            backgroundColor:'#007cc4',
                            color:'white',
                            cursor:'pointer',
                        }}
                    >
                        Iniciar sesion
                    </Button>
                </LinkContainer>
            </Modal>
        </ContainerPopUp>
    )
}

export default PopUpExpired;