import './Navbar.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from 'react-router-dom';


function NavbarTest() {
  return (
    <>
    <Navbar expand="lg" className="navBg">
      <Container className='prueba'>
        <Navbar.Brand as={Link} to='/' className="titulo">Amanecer Tortas Artesanales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className="buscador">Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Biografia' className="buscador">Biografía</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="buscador">
              <NavDropdown.Item as={Link} to='TortasTematicas' className="buscador">Tortas Temáticas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='Tartas' className="buscador">Tartas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='CandyBar' className="buscador">Candy bar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section className="seccion">
      <Outlet></Outlet>
    </section> 
    </>
    
  );
}

export default NavbarTest;