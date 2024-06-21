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
      {/* <ModalForm /> */}
    </div>
  );
}

export default App;
