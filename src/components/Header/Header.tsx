import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";

function Header() {
  return (
    <StyledHeader className="px-5" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">桃色木</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link}  eventKey={1} to="/explore">Explore</Nav.Link>
          <Nav.Link as={Link}  eventKey={2} to="/problems">
            Problems
          </Nav.Link>
          <Nav.Link as={Link}  eventKey={3} to="/resources">
            Resources
          </Nav.Link>
          <Nav.Link as={Link}  eventKey={4} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledHeader>
  );
}

export default Header;
