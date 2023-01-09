import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assests/Images/TKD.png"
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  href="#home"><img style={{width:"10rem"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/">About</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/">Feedback</NavDropdown.Item>
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