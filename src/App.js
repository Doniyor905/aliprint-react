import './App.css';
import Aksessuarlar from './components/Aksessuarlar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Poligrafiya from './components/Poligrafiya';
import TashqiReklama from './components/TashqiReklama';
import Maps from './components/Maps';
import Footer from './components/Footer';
import ModalForm from './components/ModalForm';
import { useRef } from 'react';
import ModalError from './components/ModalError';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Poligrafiya />
      <TashqiReklama />
      <Aksessuarlar />
      <Partners />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
