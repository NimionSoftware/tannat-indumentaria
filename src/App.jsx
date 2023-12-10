import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductWall from './components/ProductWall';
import { cards } from './mockup/cards';

function App() {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <ProductWall cards={cards} />
        <Routes>
          <Route path='/' element=''/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    )}


export default App;
