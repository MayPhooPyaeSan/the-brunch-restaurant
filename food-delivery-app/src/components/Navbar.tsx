import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Layout() {
  return (
    <>
      <Navbar data-bs-theme="dark" style={{ background: "#573d32" }}>
        <Container>
          <Navbar.Brand href="#home">The Brunch</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="menu">Menus</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Layout;
