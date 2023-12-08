import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element=''/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
