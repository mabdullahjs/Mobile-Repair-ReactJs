import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assests/Images/TKD.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  href="#home"><img style={{width:"12rem"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to="/" className='text-dark text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" className='text-dark text-decoration-none'>About</Link></Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="/"><Link to="/faqs" className='text-dark text-decoration-none'>FAQ's</Link></NavDropdown.Item>
              <NavDropdown.Item href="/"><Link to="/feedback" className='text-dark text-decoration-none'>Feedback</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="/">Contact</Nav.Link>
            <Nav.Link  href="/">Pay Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;