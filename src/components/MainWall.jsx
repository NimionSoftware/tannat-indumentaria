import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './Header'
import BannerImg from '../assets/banner.gif';
import ContactButton from './ContactButton'
import Navbar from './Navbar'
import Banner from './Banner'
import ProductWall from './ProductWall'
import Male from './categories/Male';
import Female from './categories/Female';
import Shoes from './categories/Shoes';
import Footer from './Footer'
import {useAxiosFetch} from './custom-hooks/useAxios'
import { providerContext } from './ProviderContextComponent';
import FilterComponent from './Shared/FilterComponent';
import styled from '@emotion/styled';
import OpenFilterMobile from './admin-interface/OpenFiltersMobile';

const ContainerFilter = styled('div')({
  display: 'none',
  '@media (min-width: 1100px)': {
    display: 'block',
  },
})

const MainWall = () => {
  const {fetchData: fetchData1, apiData: apiData1} = useAxiosFetch();
  const {fetchData: fetchData2, apiData: apiData2} = useAxiosFetch();

  const [cardData, setCardData] = useState(null);
  const [categoryData, setCategoryData] = useState('');
  const { shouldFetchData } = useContext(providerContext);
  const [clothe, setClothe] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [clotheSearched, setClotheSearched] = useState('');
  const [checked, setChecked] = useState({});

  const locate = useLocation().pathname

  const handleLocation = () => {
    switch (locate) {
      case "/hombres":
      case "/mujeres":
      case "/calzados":
        return true;
      default:
        return false;
    }
  }

  const ContainerMainWall = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: handleLocation() ? 'space-between' : 'center',
    marginTop:'1rem',
    marginBottom:'4rem',
  })

  const filters = [
    'Season',
    'Gender',
    'Category',
  ];

  const checks = [
    {Season: ['Primavera', 'Verano', 'Otoño', 'Invierno']},
    {Gender: ['Masculino', 'Femenino', 'Unisex', 'Niño', 'Niña']},
    {Category: ['Camisas', 'Pantalones', 'Camperas', 'Vestido', 'Remeras']}
  ];


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilters = () => {
    if (!cardData?.data) {
      return [];
    }

    let newApiData = [...cardData.data];

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
    if (cardData?.data) {
      setClothe(handleFilters());
    }
  }, [checked, cardData, clotheSearched]);

  useEffect(() => {
      fetchData1('http://localhost:4000/api/category');
      setCategoryData(apiData1);

      if(shouldFetchData) {
        fetchData2('http://localhost:4000/api/product');
        setCardData(apiData2);
      }
  }, [!apiData1, !apiData2])

  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
        <Header />
        <ContactButton />
        <div>
          <Navbar />
          <Banner img={BannerImg} />
          <div
            style={{
              width:'100%',
            }}
          >
            <div
              style={{
                display:'flex',
                justifyContent:'flex-end',
                margin:'2rem'
              }}
            >
              <OpenFilterMobile
              setClotheSearched={setClotheSearched}
              filters={filters}
              checks={checks}
              checked={checked}
              setChecked={setChecked}
              />
            </div>
          </div>
          <ContainerMainWall>
           {handleLocation() && <ContainerFilter>
              <FilterComponent
                  setClotheSearched={setClotheSearched}
                  filters={filters}
                  checks={checks}
                  checked={checked}
                  setChecked={setChecked}
                />
            </ContainerFilter>}
            <Routes>
              <Route path="/" element={<ProductWall categoryData={categoryData?.data}/>} />
              <Route path="/hombres" element={<Male cards={clothe} isEmpty={isEmpty} />} />
              <Route path='/mujeres' element={<Female cards={clothe} isEmpty={isEmpty} />} />
              <Route path='/calzados' element={<Shoes cards={clothe} isEmpty={isEmpty} />} />
            </Routes>
          </ContainerMainWall>
          <Footer />
        </div>
    </div>
  )
}

export default MainWall