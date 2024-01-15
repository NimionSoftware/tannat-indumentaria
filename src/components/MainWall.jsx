import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
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

const MainWall = () => {
  const {fetchData: fetchData1, apiData: apiData1} = useAxiosFetch();
  const {fetchData: fetchData2, apiData: apiData2} = useAxiosFetch();

  const [cardData, setCardData] = useState(null);
  const [categoryData, setCategoryData] = useState('');

  useEffect(() => {
      fetchData1('http://localhost:4000/api/category');
      setCategoryData(apiData1);

      fetchData2('http://localhost:4000/api/product');
      setCardData(apiData2);
  }, [!apiData1, !apiData2])

  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
        <Header />
        <ContactButton />
        <div>
          <Navbar />
          <Banner img={BannerImg} />
          <Routes>
            <Route path="/" element={<ProductWall categoryData={categoryData?.data}/>} />
            <Route path="/hombres" element={<Male cards={cardData?.data} />} />
            <Route path='/mujeres' element={<Female cards={cardData?.data}/>} />
            <Route path='/calzados' element={<Shoes cards={cardData?.data}/>} />
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default MainWall