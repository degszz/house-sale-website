import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagenes from '../assets/imagenes'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={imagenes.logo} alt="" className='logo-header' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav>
            <Nav.Link href="#INICIO">Inicio</Nav.Link>
            <Nav.Link href="#CONTACTO">Contactame</Nav.Link>
            <NavDropdown title="Propiedades" id="basic-nav-dropdown">
              <NavDropdown.Item href="#CardV">
                Casas en Venta
              </NavDropdown.Item>
              <NavDropdown.Item href="#CardL">
                Lotes/Locales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='redes'>
            <li className="Cabecera-li"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/cp.inmobiliaria/" className="Cabecera-a"><img src={imagenes.instagramC} alt="" /></a></li>
            <li className="Cabecera-li"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/coppolapaveseinmobiliaria/" className="Cabecera-a"><img src={imagenes.facebookC} alt="" /></a></li>
            <li className="Cabecera-li"><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=542271412950&text=Hola+quisiera+hablar+con+la+inmobiliaria+sobre+…&type=phone_number&app_absent=0" className="Cabecera-a"><img src={imagenes.whatsappC} alt="" /></a></li>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;