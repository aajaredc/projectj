import axios from "axios";
import * as Yup from "yup";

import { FormikProps, Form, Field, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Header from "../../components/Header/Header";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [dailyWords, setDailyWords] = useState<any[]>([]);
  const [dailyKanji, setDailyKanji] = useState<any[]>([]);

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async function handleLoad() {
    let gradeResponses = await Promise.all(
      [1, 2, 3, 4, 5, 6].map((grade) =>
        axios.get(`https://kanjiapi.dev/v1/kanji/grade-${grade}`)
      )
    );

    let kanjiResponses = await Promise.all(
      gradeResponses.map((res) =>
        axios.get(`https://kanjiapi.dev/v1/kanji/${res.data[getRandomNumber(0, res.data.length)]}`)
      )
    );

    let wordsResponses = await Promise.all(
      kanjiResponses.map((res) =>
        axios.get(`https://kanjiapi.dev/v1/words/${res.data.kanji}`)
      )
    );

    console.log(gradeResponses);
    console.log(kanjiResponses);
    console.log(wordsResponses);

    // TODO change to Digest object
    // for (let res of kanjiResponses) {
    //   const {data} = res;
    //   let arr = [...dailyKanji]
    //   arr.push(data)
    //   setDailyKanji(arr);
    // }

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
            <div>
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
            </div>

            <div className="mt-4">Daily Digest</div>
            {/* {dailyKanji.map(obj => (
              <div>
                {obj}
              </div>
            ))} */}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
