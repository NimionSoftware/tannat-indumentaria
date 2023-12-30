import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import denied from '../assets/acceso-denegado.png';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotAllowed = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000)
    },[])


const ContainerLoader = styled('div')({
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:'20%'
})

const ContainerError = styled('div')({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    margin:'6rem auto 0 auto',
    backgroundColor:'#ebebeb',
    width:'50%'
})

const TextError = styled(Typography)({
    fontWeight:'bold',
    fontSize:'3rem',
    textAlign:'center'
})

const ImageError = styled('img')({
    width:'14rem',
    '@media (max-width: 768px)': {
        width:'10rem',

      }
})


    return (
        <>
        {
            loading
            ?
            <ContainerLoader>
                <Loader />
            </ContainerLoader>
            :
            <ContainerError>
                <TextError>Error 404</TextError>
                <ImageError src={denied} alt='Imagen de acceso denegado' />
                <p style={{fontWeight:'600', fontSize:'1.3rem', textAlign:'center', padding:'1rem', paddingTop:0}}>¡Acceso denegado!</p>
                <p style={{fontWeight:'600', textAlign:'center', padding:'1rem', paddingTop:0}}>Debe <Link to={'/'}>iniciar sesion</Link> para poder acceder a esta seccion.</p>
            </ContainerError>
        }
        </>
    )
}

export default NotAllowed;