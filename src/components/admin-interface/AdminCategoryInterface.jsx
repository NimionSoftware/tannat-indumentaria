import React, { useContext, useEffect } from 'react'
import { useAxiosFetch } from '../custom-hooks/useAxios';
import ToastDelete from '../Shared/ToastDelete';
import { cartContext } from '../Context';
import { providerContext } from '../ProviderContextComponent';
import Loader from '../Loader';
import OpenFilterMobile from './OpenFiltersMobile';
import styled from '@emotion/styled';
import AdminCategoryCard from './AdminCategoryCard';

const AdminContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection:'column',
  width:'100%',
})

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  background: `white`,
})

const ContainerDashboard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap:'3rem',
  minHeight:'65rem',
  '@media (max-width: 700px)': {
    minHeight:'0',
    // minWidth:'24.5rem',
    // maxWidth:'50rem',
    // width:'100%'
  },
})

const BannerGreeting = styled('div')({
  width:'100%',
  height:'4rem',
  backgroundColor:'#151c29',
  marginTop:'0',
  '@media (max-width: 1099px)': {
    marginTop:'4rem',
    height:'3rem',
  },
  '@media (max-width: 900px)': {
    display:'none'
  },
})

const TextBannerGreeting = styled('p')({
  color:'white',
  fontSize:'1.5rem',
  fontWeight:'600',
  paddingLeft:'1rem',
  '@media (max-width: 1100px)': {
    fontSize:'1rem',
    fontWeight:'bolder',
    textAlign:'center',

  }
})

const ContainerAdminSearch = styled('div')({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  margin:'1rem 3rem',
  height:'3rem',
})

const AdminSubContainer = styled('div')({
  maxWidth:'1440px',
  minWidth:'400px',
  margin:'0 auto',
  '@media (max-width: 1099px)': {
    marginTop:'4rem'
  }
})

const AdminCategoryInterface = () => {

  const {fetchData, apiData} = useAxiosFetch();
  const { succ } = useContext(cartContext);
  const { shouldFetchData } = useContext(providerContext);

  useEffect(() => {
    if(shouldFetchData) {
      fetchData('http://localhost:4000/api/category');
    }

  }, [!apiData]);

  const filters = [
    'Temporada',
    'Genero',
    'Categoria'
  ];

// La Palabras tienen que coincidir exactamente entre filters y checks para que funcione.
// Ej: 'temporada !== Temporada' y 'Temporada === Temporada'.

  const checks = {
    'Temporada': ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    'Genero': ['Hombre', 'Mujer', 'Unisex', 'Niño', 'Niña'],
    'Categoria': ['Camisas', 'Pantalones', 'Camperas', 'Vestidos', 'Remeras']
  };
  return (
    <AdminContainer>
      <BannerGreeting>
        <TextBannerGreeting>¡Holaa! Que vamos a hacer hoy?</TextBannerGreeting>
      </BannerGreeting>
      <AdminSubContainer>
        <ContainerAdminSearch>
          <h3>Mis Categorías</h3>
          <OpenFilterMobile filters={filters} checks={checks}/>
        </ContainerAdminSearch>
        <ContainerDashboard>
          {!shouldFetchData && <Loader />}
          <Wall>
            {apiData?.data.map((card) => (
                <AdminCategoryCard
                key={card?._id}
                title={card?.title}
                image={card?.image}
                link={card?.link}
                category={card}
                />
                ))}
          </Wall>
        </ContainerDashboard>
      </AdminSubContainer>
      {succ && <ToastDelete />}
    </ AdminContainer>
  )
}

export default AdminCategoryInterface;
