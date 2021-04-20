import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import styled from 'styled-components';

const NavigationItem = styled.div`
  width: 200px;
  height: 40px;
  background-color: pink;
  border-right: 4px solid #ff6b87;

  
`;

function Explore() {
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad() {
    // api call

    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <div>
      <div className="h-100">
        {isLoading ? <div><Spinner animation="border" /></div> : <div>loaded</div>}
      </div>
    </div>
  );
}

export default Explore;
