import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  return (
    <Router>
      <Container fluid>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element = { <HomeScreen/> } exact />
              <Route path='/product/:id' element = { <ProductScreen /> } />
              <Route path='/cart/:id?' element = { <CartScreen /> } />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
