import { Navbar, Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const StyledHeader = styled(Navbar)`
  & {
    background-color: white !important;
  }

  & > .navbar-nav {
    display: flex;
    flex-direction: row;
  }

  .navbar-toggler {
    display: none;
    box-shadow: none !important;
  }

  .nav-link {
    margin-left: 18px;
  }

  @media screen and (max-width: 992px) {
    .navbar-toggler {
      display: block;
    }

    & > .navbar-nav {
      display: none;
      flex-direction: row;
    }
  }
  box-shadow: 0 2px 8px #f0f1f2;
  padding-bottom: 0;
  padding-top: 0;
  margin-bottom: 24px;

  /* 992 size */

  .navbar-brand {
    color: #ff6b87;
  }

  .nav-link {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .nav-link:hover {
    color: #ff6b87 !important;
  }

  .active {
    border-top: 2px solid #ff6b87;
    color: #ff6b87 !important;
  }
`;

export const StyledOffcanvas = styled(Navbar.Offcanvas)`
  & {
    width: 100%;
    border-right: none;
  }

  & .btn-close {
    box-shadow: none;
  }

  .nav-link {
    color: rgba(0, 0, 0, 0.55);
    padding-left: calc(1rem - 2px);
  }

  .active {
    border-left: 2px solid #ff6b87;
    color: #ff6b87 !important;
  }

  .nav-link:hover {
    color: #ff6b87 !important;
    border-left: 2px solid #ff6b87;
  }

  .offcanvas-title {
    color: #ff6b87 !important;
  }
`;
