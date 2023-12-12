import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import bannerImg from './assets/Banner.png';
import Banner from './components/Banner';
import ProductWall from './components/ProductWall';
import { cards } from './mockup/cards';

function App() {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <BrowserRouter>
          <Header />
          <div>
            <Navbar />
            <Banner img={bannerImg} />
            <ProductWall cards={cards} />
            <Routes>
              <Route path='/' element=''/>
            </Routes>
            <Footer />
          </div>
      </BrowserRouter>
    </div>
    )}


export default App;
