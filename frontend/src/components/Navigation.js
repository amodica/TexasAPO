import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Texas APO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/recruitment">Recruitment</Nav.Link>
                    <NavDropdown title="Socials" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Instagram</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Random</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
};

export default Navigation;
