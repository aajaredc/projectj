import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";

interface Props {
  activeKey: any
}

const Header: React.FC<Props> = ({activeKey}) => {
  return (
    <StyledHeader className="px-5" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">桃色木</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto"  activeKey={activeKey}>
          <Nav.Link as={Link}  eventKey={1} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link}  eventKey={2} to="/lists">
            Lists
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
