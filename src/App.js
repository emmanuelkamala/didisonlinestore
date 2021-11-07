import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <Container fluid>
      <Header />
      <main className="py-3">
        Hi There
      </main>
      <Footer />
    </Container>
  );
}

export default App;
