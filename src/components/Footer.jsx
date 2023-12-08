import visa from "../assets/visa.png";
import masterCard from "../assets/mastercard.png";
import mercadoPago from "../assets/mercado-pago.png";
import twi from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import copy from "../assets/copyright.png";
import { Grid, Link, Typography, styled } from '@mui/material';

const Container = styled('div')({
    width: '100%',
    backgroundColor: '#161616',
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
    textAlign: 'center',
})

const ContainerImages = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    paddingTop: '.5rem'
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
    marginBottom: '3rem',

    '@media (max-width: 768px)': {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '0',
        textAlign: 'center',
        '& > *': {
          flex: '1 1 50%',
          maxWidth: '50%',
          padding: '10px'
        }
      }
})

const LinkT = styled(Link)({
    color: '#fff',
    fontSize: '.8rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: '.2s all',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline'
    },
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

const Subtitle = styled('h3')({
    color: '#fff',
    '@media (max-width: 768px)': {
        marginBottom:'-.1rem'
      }
})

const LastText = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    padding: '.5rem',
    fontSize: '.8rem',
    fontWeight: '600',
    color: '#fff',
    '@media (max-width: 768px)': {
        fontSize: '.5rem',
      }
})

const HrT = styled('hr')({
    width: '100%',
    height:'2px',
    border: 'none',
    backgroundColor: 'rgb(0,185,189)',
    background: 'linear-gradient(90deg, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)'
})

const Copy = styled('img')({
    width: '.9rem',
    height: '.9rem',
    filter: 'invert()',
    '@media (max-width: 768px)': {
        display: 'none'
      }
})

export default function Footer() {

  return (
    <Container>
        <ContainerSections>
            <ContainerImages>
                <Link href="https://es-la.facebook.com/"><Images src={facebook} alt="Icon Facebook" /></Link>
                <Link href="https://www.instagram.com/"><Images src={insta} alt="Icon Instagram" /></Link>
                <Link href="https://www.instagram.com/"><Images src={twi} alt="Icon Twitter" /></Link>
            </ContainerImages>
            <HrT />
            <GridP container>
                <ContainerService>
                    <Subtitle>Nosotros</Subtitle>
                    <LinkT to="/not found" className="link">Nuestra Empresa</LinkT>
                    <LinkT to="/not found" className="link">Trabaja con Nosotros</LinkT>
                </ContainerService>
                <ContainerService>
                    <Subtitle>Compras</Subtitle>
                    <LinkT to="/not found" className="link">Guía de compras</LinkT>
                    <LinkT to="/not found" className="link">Preguntas Frecuentes</LinkT>
                </ContainerService>
                <ContainerService>
                    <Subtitle>Atención al cliente</Subtitle>
                    <LinkT to="/not found" className="link">Contacto</LinkT>
                    <LinkT to="/not found" className="link">Rastrear mi pedido</LinkT>
                </ContainerService>
            </GridP>
            <HrT />
            <ContainerCards>
                <Card src={visa} alt="Icon visa card" />
                <Card src={masterCard} alt="Icon masterCard card" />
                <Card src={mercadoPago} alt="Icon mercadoPago" />
            </ContainerCards>
            <HrT />
            <ContainerInfo>
                <LastText><Copy src={copy} alt='Copyright' />Copyright 2023 Tannat Indumentaria</LastText>
                <LastText>Developed by: Nimion Software Solutions</LastText>
            </ContainerInfo>
        </ContainerSections>
    </Container>
  );
}