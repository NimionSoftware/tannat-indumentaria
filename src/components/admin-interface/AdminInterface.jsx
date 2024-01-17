import React, { useContext, useEffect, useState } from 'react'
import { useAxiosFetch } from '../custom-hooks/useAxios';
import AdminProductCard from './AdminProductCard'
import FilterComponent from '../Shared/FilterComponent';
import ToastDelete from '../Shared/ToastDelete';
import { cartContext } from '../Context';
import { providerContext } from '../ProviderContextComponent';
import Loader from '../Loader';
import OpenFilterMobile from './OpenFiltersMobile';
import styled from '@emotion/styled';

const AdminContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection:'column',
  width:'100%',
  height:'100%'
})

const Wall = styled('div')({
  width: '60%',
  marginLeft: '5%',
  background: `white`,
  '@media (max-width: 1099px)': {
    width: '100%',
    marginLeft: 'auto',
  }
})

const ContainerDashboard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  gap:'3rem',
  minHeight:'65rem',
  '@media (max-width: 700px)': {
    minHeight:'0'
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
  width: '100%',
  maxWidth:'1440px',
  minWidth:'400px',
  margin:'0 auto',
  '@media (max-width: 1099px)': {
    width: 'auto',
    marginTop:'4rem'

  }
})

const ContainerFilterDesktop = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '40%',
    '@media (max-width: 1100px)': {
      display:'none'
    }

})

const AdminInterface = () => {

  const {fetchData, apiData} = useAxiosFetch();
  const { succ } = useContext(cartContext);
  const { shouldFetchData } = useContext(providerContext);
  const [clothe, setClothe] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clotheSearched, setClotheSearched] = useState('');
  const [checked, setChecked] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(10);


  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if(shouldFetchData) {
      fetchData('http://localhost:4000/api/product');
    }

  }, [!apiData]);

  const filters = [
    'Season',
    'Gender',
    'Category',
  ];

// La Palabras tienen que coincidir exactamente entre filters y checks para que funcione.
// Ej: 'temporada !== Temporada' y 'Temporada === Temporada'.

  const checks = [
    {Season: ['Primavera', 'Verano', 'Otoño', 'Invierno']},
    {Gender: ['Masculino', 'Femenino', 'Unisex', 'Niño', 'Niña']},
    {Category: ['Camisa', 'Pantalon', 'Campera', 'Vestido', 'Remera', 'Blusa', 'Enterizo', 'Sueter']}
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilters = () => {
    if (!apiData?.data) {
      return [];
    }

    let newApiData = [...apiData.data];

      Object.keys(checked).forEach((filter) => {
        if (checked[filter] && checked[filter].length > 0) {
          newApiData = newApiData.filter((data) => {
            const dataFiltered = data[filter.toLowerCase()];

            if(Array.isArray(dataFiltered)){
              return checked[filter].some(selectedCategory =>
                dataFiltered.some(productCategory => productCategory.includes(selectedCategory))
              );
            } else {
              return checked[filter].every(value => dataFiltered.includes(value));
            }

          });
        }
      });

      if(clotheSearched.length > 0) {
        const filteres = newApiData?.filter((item) => {
          if (item.title && item.title.toLowerCase().trim().includes(clotheSearched)) {
            return true;
          }
        })
        newApiData = filteres;
      }

      if (newApiData.length === 0) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }

    return newApiData;
  };

  useEffect(() => {
    if (apiData?.data) {
      setClothe(handleFilters().slice(0, visibleProducts));
    }
  }, [checked, apiData, clotheSearched, visibleProducts]);


  const handleTimeOff = () => {
    return <p style={{fontSize:'.8rem' ,textAlign:'center', color:'gray', margin:0, paddingTop:10}} >No se encontraron mas productos.</p>
  }

  const handleLoading = () => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 6000);
      return <p style={{fontSize:'.8rem' ,textAlign:'center', color:'gray', margin:0, paddingTop:10}} >Cargando mas productos...</p>
    }
  }

  return (
    <AdminContainer>
      <BannerGreeting>
        <TextBannerGreeting>¡Holaa! Que vamos a hacer hoy?</TextBannerGreeting>
      </BannerGreeting>
      <AdminSubContainer>
        <ContainerAdminSearch>
          <h3>Mis productos</h3>
          <OpenFilterMobile
            setClotheSearched={setClotheSearched}
            filters={filters}
            checks={checks}
            checked={checked}
            setChecked={setChecked}
            />
        </ContainerAdminSearch>
        <ContainerDashboard>
          {!shouldFetchData && <Loader />}
          {isEmpty ?
            (
            <Wall style={{margin: 0}}>
                  <p style={{
                    textAlign: 'center',
                    width: '100%'
                    }}>No existen coincidencias.</p>
            </Wall>
            ) :
            (
              <Wall>
              {clothe?.map((card) => (
                  <AdminProductCard
                    key={card?._id}
                    card={card}
                  />
                  ))}
                <div
                  style={{
                    width:'100%',
                    height:'3rem'
                  }}
                >
                  {isLoading && handleLoading()}
                  {!isLoading && handleTimeOff()}
                </div>
            </Wall>
            )
          }
          <ContainerFilterDesktop>
            <FilterComponent
              setClotheSearched={setClotheSearched}
              filters={filters}
              checks={checks}
              checked={checked}
              setChecked={setChecked}
            />
          </ContainerFilterDesktop>
        </ContainerDashboard>
      </AdminSubContainer>
      {succ && <ToastDelete />}
    </ AdminContainer>
  )
}

export default AdminInterface
