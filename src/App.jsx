import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BannerImg from './assets/banner.gif';
import ProductWall from './components/ProductWall';
import { cards } from './mockup/cards';
import Context from './components/Context';
import ContactButton from './components/ContactButton';
import AdminInterface from './components/admin-interface/AdminInterface';

function App() {

  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <BrowserRouter>
        <Context>
          {/* <Header />
          <ContactButton />
          <div>
            <Navbar />
            <Banner img={BannerImg} />
            <ProductWall cards={cards} />
            <Routes>
              <Route path='/' element=''/>
            </Routes>
            <Footer />
          </div> */}
        <AdminInterface />
        </Context>
      </BrowserRouter>
    </div>
    )
  }


export default App;
