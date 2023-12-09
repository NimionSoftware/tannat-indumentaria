import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import img from './assets/campera-ufo.png'

function App() {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <ProductCard imgId={img} productName={'Campera Boss'} productDescription={'Campera de un material muy fachero, si no sos fachero no te la pongas porque vas a desentonar.'} productSizes={'S, M, L'} productPrice={'$36999'}/>
        <Routes>
          <Route path='/' element=''/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    )}


export default App;
