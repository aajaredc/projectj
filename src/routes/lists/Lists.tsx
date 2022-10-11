import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { items } from "./exampleitems";
import ListOption from "./ListOption";

function Lists() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lists, setLists] = useState<string[][]>([]);

  async function handleLoad() {
    setIsLoading(false);
  }

  useEffect(() => {
    setLists([[...items]]);

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
            {lists.map((list, index) => {
              return (
                <div key={index} onClick={() => {
                    navigate('/users/USERID/lists/LISTID')
                }}>
                  <ListOption name="Top 500 most frequent kanji" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lists;
