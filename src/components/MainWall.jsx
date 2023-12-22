import React, {useState, useEffect} from 'react'
import Context from './Context'
import Header from './Header'
import BannerImg from '../assets/banner.gif';
import ContactButton from './ContactButton'
import Navbar from './Navbar'
import Banner from './Banner'
import ProductWall from './ProductWall'
import Footer from './Footer'
import {useAxiosFetch} from './custom-hooks/useAxios'


const MainWall = () => {
  const {fetchData, apiData} = useAxiosFetch()

  useEffect(() => {
    fetchData('http://localhost:4000/api/product')

  }, [!apiData])


  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
        <Context>
          <Header />
          <ContactButton />
          <div>
            <Navbar />
            <Banner img={BannerImg} />
            <ProductWall cards={apiData?.data} />
            <Footer />
          </div>
        </Context>
    </div>
  )
}

export default MainWall