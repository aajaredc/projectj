import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";

function Header() {
  return (
    <StyledHeader className="px-5" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/explore">test</Link>
          <Link to="/">test2</Link>
          <Nav.Link  eventKey={1} href="explore">Explore</Nav.Link>
          <Nav.Link eventKey={2}>
            Problems
          </Nav.Link>
          <Nav.Link eventKey={3}>
            Resources
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledHeader>
  );
}

export default Header;
