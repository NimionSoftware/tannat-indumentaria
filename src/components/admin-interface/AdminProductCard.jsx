import React, { useState } from 'react'
import {
    Box,
    Button,
    styled,
    Typography,
} from "@mui/material"
import Loader from '../Loader';
import edit from '../../assets/editar.png';
import trush from '../../assets/delete-product.png';
import { Link } from 'react-router-dom';
import ModalDelete from '../Shared/ModalDelete';

const Title = styled(Typography)({
  display: 'flex',
  alignItems:'center',
  minHeight:'38px',
  maxHeight: '40px',
  fontWeight: 'lighter',
  textAlign: 'center'
})

const TextTitle = styled(Typography)({
  fontSize:'.9rem',
  fontWeight:'600',
})

const Description = styled(Typography)({
  fontSize: 12,
  margin: '0 .5rem 1rem 0',
  padding: "0 10px",
  textAlign: 'center',
  maxHeight:'5rem',
  width:'100%',
})

const Size = styled(Typography)({
  margin: "15px 0",
  fontSize: 15,
  fontWeight: '600',
  color: 'green',
  textAlign: 'center',
})

const Price = styled(Typography)({
  fontSize: 16,
  fontWeight: '600',
  color: '#F4F4F4',
  marginBottom: 15,
  textAlign: 'center',
  letterSpacing: 1,
  '@media (max-width: 650px)': {
    margin: "0",
  }
})

const ContainerCardImage = styled('div')({
  height:'13.5rem'
})

const ContainerTextsCard = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  })

  const ContainerDetailsProducts = styled('div')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    '@media (max-width: 650px)': {
        flexDirection:'row-reverse',
        gap:'1rem'
      }
  })

  const ContainerEditDelete = styled('div')({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  })


const AdminProductCard = ({ card, index }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const [open, setOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'all .250s',
        gap: 1,
        margin: 1,
        background: '#f1f1f1',
        boxShadow: 5,
        height:'13.5rem',
        minWidth:'40rem',
        '@media (max-width: 1280px)': {
          minWidth:'30rem',
        },
        '@media (max-width: 1150px)': {
          minWidth:'27rem',
        },
        '@media (max-width: 900px)': {
          minWidth:'0',
        }
      }}
    >
      <ContainerCardImage onLoad={()=>setImageLoaded(false)}>
            <img style={{
                  position: 'relative',
                  height:'100%'
                  }}
                  src={card.image}
                  alt="card Img"
              />
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {imageLoaded && <Loader />}
            </div>
      </ContainerCardImage>
      <ContainerTextsCard>
        <ContainerEditDelete>
          <Link
            to={`/admin/update/${card._id}`}
            style={{
                display:'flex',
                justifyContent:'flex-end',
                width:'100%',
                margin:3
            }}
          >
              <Button
                  sx={{
                      gap: 1,
                      background: "#1a1a1a",
                      fontSize: 8,
                      margin:1
                  }}
                  title="Editar producto"
                  variant='contained'
              >
                  <img src={edit} alt="imagen de editar" style={{width:'1.3rem', height:'1.3rem'}} />
              </Button>
          </Link>
          <Button
                  sx={{
                      gap: 1,
                      background: "#1a1a1a",
                      fontSize: 8,
                      margin:1,
                      transition:'.2s all',
                      '&:hover':{
                        background: "#960303",
                        filter:'brightness(1.4)'
                      }
                  }}
                  title="Eliminar producto"
                  variant='contained'
                  onClick={()=>{
                    handleOpenDeleteModal()
                  }}
              >
                  <img src={trush} alt="imagen de editar" style={{width:'1.3rem', height:'1.3rem'}} />
          </Button>
        </ContainerEditDelete>
        <Title>
          <TextTitle>
            {card.title}
          </TextTitle>
        </Title>
        <Description>
        {card.description}
        </Description>
        <ContainerDetailsProducts>
            <Size>
              <span style={{color: 'black', fontWeight: "400"}}>Talles:</span> {card.sizes?.map((size, index) => (<span key={index}>{size}</span>))}
            </Size>
            <Price
            style={{
                padding:'0 10px',
                background: 'brown'
            }}>
            ${card.price}
            </Price>
        </ContainerDetailsProducts>
      </ContainerTextsCard>
      {open && <ModalDelete
        open={open}
        handleClose={handleCloseDeleteModal}
        card={card}
      />}
    </Box>
  )
}

export default AdminProductCard