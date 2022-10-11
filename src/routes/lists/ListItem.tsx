import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header from "../../components/Header/Header";
import StyledKanji from "../../components/StyledKanji/StyledKanji";
import { Kanji } from "../../utils/types/Api";
import { Colors } from "../../utils/types/Common";
import { items } from "./exampleitems";
import { useNavigate, useParams } from 'react-router-dom';

interface Props {}

type Params = {
  kanji: string;
}

const ListItem: React.FC<Props> = () => {
  const navigate = useNavigate();
  

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { kanji } = useParams<Params>();
  
  const [data, setData] = useState<Kanji | null>(null);
  const [previousKanji, setPreviousKanji] = useState<string>("");
  const [nextKanji, setNextKanji] = useState<string>("");

  async function handleLoad() {
    const response: AxiosResponse<Kanji> = await axios.get(
      `https://kanjiapi.dev/v1/kanji/${kanji}`
    );
    console.log(response);
    setData(response.data);

    const list = [...items];

    console.log('kanji', kanji)
    console.log('list', list)

    let index: number = list.indexOf(kanji as string);

    console.log('index', index)

    if (index !== 0) {
      setPreviousKanji(list[index - 1]);
    }
    if (index !== list.length - 1) {
      setNextKanji(list[index + 1]);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, [kanji]);

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
              <Row>
                <Col>
                  <div className="d-flex align-items-center justify-content-around mv4">
                    <StyledKanji
                      character={kanji as string}
                      backgroundColor={Colors.LightPink}
                      size="lg"
                      className="my-4"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex my-4">
                    {previousKanji !== "" && (
                      <div
                        className="me-auto"
                        onClick={() => {
                          setIsLoading(true)
                          navigate(
                            `/users/USERID/lists/LISTID/${previousKanji}`
                          );
                        }}
                      >
                        {"<"}
                      </div>
                    )}
                    {nextKanji !== "" && (
                      <div
                        className="ms-auto"
                        onClick={() => {
                          setIsLoading(true)
                          navigate(
                            `/users/USERID/lists/LISTID/${nextKanji}`
                          );
                        }}
                      >
                        {">"}
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  {data?.meanings.map((meaning: string, index: number) => {
                    return <div key={index}>{meaning}</div>;
                  })}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
