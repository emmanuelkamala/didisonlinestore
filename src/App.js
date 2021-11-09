import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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
              <Route path='/' exact element = { <HomeScreen/> } />
              <Route path='/product/:id' element={ <ProductScreen /> } />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
