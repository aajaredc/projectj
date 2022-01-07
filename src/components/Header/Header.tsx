import { Link } from "react-router-dom";
import { StyledHeader, StyledOffcanvas } from "./Header.styles";
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

interface Props {
  activeKey: any;
}

const Header: React.FC<Props> = ({ activeKey }) => {
  return (
    <StyledHeader className="px-5" bg="light" expand={false}>
      <Navbar.Brand href="/">桃色木</Navbar.Brand>
      <Navbar.Toggle className="my-2" aria-controls="offcanvasNavbar" />
      <Nav className="ms-auto large-nav" activeKey={activeKey}>
        <Nav.Link as={Link} eventKey={1} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} eventKey={2} to="/lists">
          Lists
        </Nav.Link>
        <Nav.Link as={Link} eventKey={3} to="/resources">
          Resources
        </Nav.Link>
        <Nav.Link as={Link} eventKey={4} to="/about">
          About
        </Nav.Link>
      </Nav>
      <StyledOffcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">桃色木</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3"  activeKey={activeKey}>
            <Nav.Link as={Link} eventKey={1} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} eventKey={2} to="/lists">
              Lists
            </Nav.Link>
            <Nav.Link as={Link} eventKey={3} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} eventKey={4} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </StyledOffcanvas>

      {/* <Button variant="primary" onClick={toggleShow} className="me-2">
        hehe
      </Button> */}

      {/* <Navbar.Toggle aria-controls="MainNavigation" /> */}
      {/* <div className="main-container" id="MainNavigation">
        <Nav className="ms-auto" activeKey={activeKey}>
          <Nav.Link as={Link} eventKey={1} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} eventKey={2} to="/lists">
            Lists
          </Nav.Link>
          <Nav.Link as={Link} eventKey={3} to="/resources">
            Resources
          </Nav.Link>
          <Nav.Link as={Link} eventKey={4} to="/about">
            About
          </Nav.Link>
        </Nav>
      </div> */}
    </StyledHeader>
  );
};

export default Header;
