import visa from "../assets/visa.png";
import masterCard from "../assets/mastercard.png";
import mercadoPago from "../assets/mercado-pago.png";
import twi from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import { Grid, Link, Divider, Typography } from '@mui/material';
import { styled } from "@mui/material";

const Container = styled('div')({
    backgroundColor:'#3a68eb',
})

const ContainerSections = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const ContainerService = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '3rem',
    padding: '.5rem 0',
    width: '20%',
    height: '100%',
    textAlign: 'start',
})

const ContainerImages = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    padding: '.5rem 0'
})

const Images = styled('img')({
    width: '2rem',
    height: '2rem',
    filter: 'invert()',
    transition: '.3s all',
    "&:hover": {
        transform: 'scale(1.1)'
    }
})


const GridP = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem'
})

const LinkT = styled(Link)({
    color: '#fff',
    fontSize: '.7rem',
    cursor: 'pointer',
    transition: '.1s all',
    '&:hover': {
        color: '#e6e6e6'
    }
})

const ContainerCards = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '.5rem 0'
})

const Card = styled('img')({
    width: '2rem',
    height: '1rem',
})

const ContainerInfo = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.5rem 0',
    width: '95%'
})


export default function Footer() {

  return (
    <Container>
        <ContainerSections className="q">
            <ContainerImages className="q">
                <Link href="https://es-la.facebook.com/"><Images src={facebook} alt="" /></Link>
                <Link href="https://www.instagram.com/"><Images src={insta} alt="" /></Link>
                <Link href="https://www.instagram.com/"><Images src={twi} alt="" /></Link>
            </ContainerImages>
            <Divider className="custom-divider" />
            <GridP container className="q">
                <ContainerService>
                    <h3>Nosotros</h3>
                    <LinkT to="/not found" className="link">Nuestra Empresa</LinkT>
                    <LinkT to="/not found" className="link">Trabaja con Nosotros</LinkT>
                    <LinkT to="/not found" className="link">Nuestras Tiendas</LinkT>
                </ContainerService>
                <ContainerService>
                    <h3>Compras</h3>
                    <LinkT to="/not found" className="link">Guía de compras</LinkT>
                    <LinkT to="/not found" className="link">Preguntas Frecuentes</LinkT>
                </ContainerService>
                <ContainerService>
                    <h3>Atención al cliente</h3>
                    <LinkT to="/not found" className="link">Contacto</LinkT>
                    <LinkT to="/not found" className="link">Rastrear mi pedido</LinkT>
                </ContainerService>
            </GridP>
            <Divider style={{ margin: '20px 0', backgroundColor: 'red' }} />
            <ContainerCards className="q">
                <Card src={visa} alt="Icon visa card" />
                <Card src={masterCard} alt="Icon masterCard card" />
                <Card src={mercadoPago} alt="Icon mercadoPago" />
            </ContainerCards>
            <Divider className="custom-divider" />
            <ContainerInfo className="q">
                <Typography style={{ fontSize: '.8rem', color: '#fff' }}>Copyright 2023 Tannat Indumentaria</Typography>
                <Typography style={{ fontSize: '.8rem', color: '#fff' }}>Developed by: Nimion Software Solutions</Typography>
            </ContainerInfo>
        </ContainerSections>
    </Container>
  );
}