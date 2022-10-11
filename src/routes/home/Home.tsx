import axios, { AxiosResponse } from "axios";
import * as Yup from "yup";
import { FormikProps, Form, Field, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { Container, Row, Spinner, Tab, Tabs, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import { Kanji, Word } from "../../utils/types/Api";
import { Colors, Digest } from "../../utils/types/Common";
import StyledKanji from "../../components/StyledKanji/StyledKanji";
import { Definition } from "../../components/CommonStyles";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [digest, setDigest] = useState<Digest[]>([]);

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async function handleLoad() {
    let gradeResponses: AxiosResponse<string[]>[] = await Promise.all(
      [1, 2, 3, 4, 5, 6].map((grade) =>
        axios.get(`https://kanjiapi.dev/v1/kanji/grade-${grade}`)
      )
    );

    let kanjiResponses: AxiosResponse<Kanji>[] = await Promise.all(
      gradeResponses.map((res) =>
        axios.get(
          `https://kanjiapi.dev/v1/kanji/${
            res.data[getRandomNumber(0, res.data.length)]
          }`
        )
      )
    );

    let wordsResponses: AxiosResponse<Word[]>[] = await Promise.all(
      kanjiResponses.map((res) =>
        axios.get(`https://kanjiapi.dev/v1/words/${res.data.kanji}`)
      )
    );

    console.log(gradeResponses);
    console.log(kanjiResponses);
    console.log(wordsResponses);

    let arr: Digest[] = [];
    for (let i = 0; i < kanjiResponses.length; i++) {
      const k = kanjiResponses[i];
      const w = wordsResponses[i];

      arr.push({
        kanji: k.data,
        word: w.data[getRandomNumber(0, w.data.length)],
      });
    }

    setDigest(arr);
    console.log("arr", arr);
    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  interface FormValues {
    value: string;
  }

  return (
    <div>
      <Header activeKey={1} />
      <Container>
        {isLoading ? (
          <div>
            <Spinner animation="border" />
          </div>
        ) : (
          <div>
            {/* <div>
              <Formik
                initialValues={{
                  value: "",
                }}
                onSubmit={(
                  values: FormValues,
                  { setSubmitting }: FormikHelpers<FormValues>
                ) => {
                  console.log("form values", values);
                  setSubmitting(false);
                }}
              >
                {({ handleSubmit }: FormikProps<FormValues>) => (
                  <Form>
                    <label htmlFor="value" className="d-block">
                      Enter the kanji
                    </label>
                    <Field id="value" name="value" />

                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div> */}
            
            <div>
              <button onClick={async () => {
                const response = await axios.get(`https://kanjiapi.dev/v1/kanji/grade-1`)
                console.log(response);
              }}>

              </button>
            </div>

            <Tabs defaultActiveKey={"grade1"}>
              {digest.map((element) => {
                const { kanji, word } = element;
                return (
                  <Tab
                    eventKey={`grade${kanji.grade}`}
                    title={`Grade ${kanji.grade}`}
                  >
                    <Container fluid>
                      <Row>
                        <Col>
                          <div className="d-flex align-items-center justify-content-around mv4">
                            <StyledKanji
                              character={kanji.kanji}
                              backgroundColor={Colors.LightPink}
                              size="lg"
                              className="my-4"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mb-4">
                          {kanji.meanings.map((meaning) => {
                            return (
                              <div>
                                {meaning}
                              </div>
                            );
                          })}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {word.variants.map((variant) => {
                            return (
                              <div className="mb-4">
                                <Definition>{variant.written}</Definition>
                                <div>{variant.pronounced}</div>
                              </div>
                            );
                          })}
                          {word.meanings.map((meaning) => {
                            return (
                              <div>
                                {meaning.glosses.map((gloss) => {
                                  return <div>{gloss}</div>;
                                })}
                              </div>
                            );
                          })}
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
