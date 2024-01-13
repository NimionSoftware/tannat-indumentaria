import React, { useEffect } from 'react'
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
  const {fetchData, apiData} = useAxiosFetch();


  useEffect(() => {
    fetchData('http://localhost:4000/api/product')

  }, [!apiData])

  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
        <Header />
        <ContactButton />
        <div>
          <Navbar />
          <Banner img={BannerImg} />
          <Routes>
            <Route path="/" element={<ProductWall cards={apiData?.data}/>} />
            <Route path="/hombres" element={<Male cards={apiData?.data} />} />
            <Route path='/mujeres' element={<Female cards={apiData?.data}/>} />
            <Route path='/calzados' element={<Shoes cards={apiData?.data}/>} />
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default MainWall