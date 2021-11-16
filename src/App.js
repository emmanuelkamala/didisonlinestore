import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {

  return (
    <Router>
      <Container fluid>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='shipping' element = { <ShippingScreen /> } />
              <Route path='payment' element = { <PaymentMethodScreen /> } />
              <Route path='placeorder' element = { <PlaceOrderScreen /> } />
              <Route path='login' element = { <LoginScreen /> } />
              <Route path='register' element = { <RegisterScreen /> } />
              <Route path='profile' element = { <ProfileScreen /> } />
              <Route path='product/:id' element = { <ProductScreen /> } />
              <Route path='cart' element = { <CartScreen /> }>
                <Route path=':id' element = { <CartScreen /> } />
              </Route>
              <Route path='order' element = { <OrderScreen /> }>
                <Route path=':id' element = { <OrderScreen /> } />
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
