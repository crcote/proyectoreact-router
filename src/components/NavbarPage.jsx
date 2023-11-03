import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <Navbar
      style={{backgroundColor:"salmon"}}
    >
      <Container className="justify-content-start">
        <Link
          to="/Home"
          className="text-dark ms-3 text-decoration-none"
          >
          🏠Home
          </Link>
          <Link
          to="/ContactsPage"
          className="text-dark ms-3 text-decoration-none"
          >
          Contacto
        </Link>
      </Container>
      <Container className="justify-content-end">
        <Navbar.Brand>🧁Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavbarPage;
