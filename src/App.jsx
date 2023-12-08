import './App.css';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import img from './assets/campera-ufo.png'

function App() {
  return (
    <div className="App">
      <h1>Tannat</h1>
      <ProductCard imgId={img} productName={'Campera Boss'} productDescription={'Campera de un material muy fachero, si no sos fachero no te la pongas porque vas a desentonar.'} productSizes={'S, M, L'} productPrice={'$36999'}/>
      <Footer />
    </div>
  );
}

export default App;
