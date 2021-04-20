import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledHeader = styled(Navbar)`
    box-shadow: 0 2px 8px #f0f1f2;
    padding-bottom: 0;
    padding-top: 0;

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
`