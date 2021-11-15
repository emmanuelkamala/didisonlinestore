import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {

  return (
    <Router>
      <Container fluid>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='login' element = { <LoginScreen /> } />
              <Route path='register' element = { <RegisterScreen /> } />
              <Route path='product/:id' element = { <ProductScreen /> } />
              <Route path='cart' element = { <CartScreen /> }>
                <Route path=':id' element = { <CartScreen /> } />
              </Route>
              <Route path='' element = { <HomeScreen /> }  />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
