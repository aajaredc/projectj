import { Nav, Navbar } from "react-bootstrap";
import { StyledHeader } from "./Header.styles";

function Header() {
  return (
    <StyledHeader className="px-5" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#explore">Explore</Nav.Link>
          <Nav.Link eventKey={2} href="#problems">
            Problems
          </Nav.Link>
          <Nav.Link eventKey={3} href="#resources">
            Resources
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledHeader>
  );
}

export default Header;
