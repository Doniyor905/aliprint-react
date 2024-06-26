import './App.css';
import Aksessuarlar from './components/Aksessuarlar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Poligrafiya from './components/Poligrafiya';
import TashqiReklama from './components/TashqiReklama';
import Maps from './components/Maps';
import Footer from './components/Footer';

import poligrafiya from './data/poligrafiya';
import aksessuarlar from './data/aksessuarlar';
import tashqiRekalama from './data/tashqiRekalama';

function App() {
  return (
    <div className="App">
      <Navbar
        poligrafiya={poligrafiya}
        tashqiRekalama={tashqiRekalama}
        aksessuarlar={aksessuarlar}
      />
      <Header />
      <Poligrafiya poligrafiya={poligrafiya} />
      <TashqiReklama tashqiRekalama={tashqiRekalama} />
      <Aksessuarlar aksessuarlar={aksessuarlar} />
      <Partners />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
