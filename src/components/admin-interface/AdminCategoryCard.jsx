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
import ModalCategoryDelete from '../Shared/ModalCategoryDelete';

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

  const ContainerEditDelete = styled('div')({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  })


const AdminCategoryCard = ({title, image, link, category}) => {
  const [loaded, setLoaded] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
      position: 'relative',
    }}>
      {!loaded && <Loader />}
      <Box
        sx={{
          opacity: !loaded && 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          transition: 'all .250s',
          gap: 1,
          margin: 1,
          background: '#f1f1f1',
          boxShadow: 5,
          height:'13.5rem',
          animation: loaded && 'fade-in 1s',
          "@keyframes fade-in": {
            "0%": {
            opacity: 0,
            // transform: 'translateY(15px)'
            },
            "100%": {
                opacity: 1,
                // transform: 'translateY(0)'
            }
          },
        }}
      >
        <ContainerCardImage onLoad={()=>setLoaded(true)}>
              <img style={{
                    position: 'relative',
                    height:'100%'
                    }}
                    src={image}
                    alt="card Img"
                />
        </ContainerCardImage>
        <ContainerTextsCard>
          <ContainerEditDelete>
            <Link
              to={`/admin/category/update/${category._id}`}
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
                    <img src={trush} alt="imagen de eliminar" style={{width:'1.3rem', height:'1.3rem'}} />
            </Button>
          </ContainerEditDelete>
          <Title>
            <TextTitle>
            <span>Titulo: {title}</span>
            </TextTitle>
          </Title>
          <Description>
            <span>Link: {link}</span>
          </Description>
        </ContainerTextsCard>
        {open && <ModalCategoryDelete
          open={open}
          handleClose={handleCloseDeleteModal}
          card={category}
        />}
      </Box>
    </Box>
  )
}

export default AdminCategoryCard;