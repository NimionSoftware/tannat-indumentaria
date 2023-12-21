import React from 'react'
import Context from './Context'
import Header from './Header'
import BannerImg from '../assets/banner.gif';
import { cards } from '../mockup/cards';
import ContactButton from './ContactButton'
import Navbar from './Navbar'
import Banner from './Banner'
import ProductWall from './ProductWall'
import Footer from './Footer'

const MainWall = () => {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
        <Context>
          <Header />
          <ContactButton />
          <div>
            <Navbar />
            <Banner img={BannerImg} />
            <ProductWall cards={cards} />
            <Footer />
          </div>
        </Context>
    </div>
  )
}

export default MainWall