import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "./Navigation/Navigation";

const axios = require("axios");

const NavigationItem = styled.div`
  width: 200px;
  height: 40px;
  background-color: pink;
  border-right: 4px solid #ff6b87;
`;

function Explore() {
  const [isLoading, setIsLoading] = useState(true);

  async function handleLoad() {
    // api call
    let response = await axios.get("https://kanjiapi.dev/v1/kanji/蛍");
    console.log(response.data);

    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className="h-100">
        {isLoading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <div>
            <Navigation />
            <div>loaded</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
