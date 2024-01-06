import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from './assets/imagenes.jsx'

/* COMPONENTS */
import Presentation from './components/Presentation.jsx'
import Carousel from './components/Carousel.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CardC from './components/CardC.jsx'
import CardL from './components/CardL.jsx'

function App() {
  return (
    <>
      <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=542271412950&text=Hola+quisiera+hablar+con+la+inmobiliaria+sobre+…&type=phone_number&app_absent=0" className="wsp"><img src={imagenes.whatsappC} alt="" /></a>
      <Navbar />
      <Presentation />
      <Carousel />
      <div className='container'>
        <h2 className='titulo-swiper' id='CardV' >Propiedades en Venta</h2>
        <CardC />
        <img className='touch' src={imagenes.touch} alt="" />
        <h2 className='titulo-swiper' id='CardL' >Lotes y Locales en Venta</h2>
        <CardL />
        <img className='touch' src={imagenes.touch} alt="" />
      </div>
      <Footer />
    </>
  );
}

export default App;
