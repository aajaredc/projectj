import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import StyledKanji from "../../components/StyledKanji/StyledKanji";
import { Colors } from "../../utils/types/Common";
import { items } from "./exampleitems";

function List() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  async function handleLoad() {
    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header activeKey={2} />
      <div>
        {isLoading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <div>
            <Container fluid>
              {items.map((item, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                        navigate(`/users/USERID/lists/LISTID/${item}`);
                    }}
                  >
                    <StyledKanji
                      character={item}
                      backgroundColor={Colors.LightPink}
                      size="md"
                    />
                  </div>
                );
              })}
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
