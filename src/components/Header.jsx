import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = ()=> {

    return (
  
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JOHN DOE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./pages/home.html">Home</Nav.Link>
            <Nav.Link href="./pages/contact.html">Contact</Nav.Link>
            <Nav.Link href="./pages/mentionleg1">mentions légales</Nav.Link>
            <Nav.Link href="./pages/offressrrv.html">offres service</Nav.Link>
            <Nav.Link href="./pages/portfolio.html">portfolio</Nav.Link>
            <Nav.Link href="./pages/profilgithub">profil github</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </header>
  
    )
  
  }
  
  export default Header
  
  