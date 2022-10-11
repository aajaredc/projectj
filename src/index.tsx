import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import ListItem from "./routes/lists/ListItem";
import List from "./routes/lists/List";
import Lists from "./routes/lists/Lists";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/users/:userId/lists" element={<Lists />} />
            <Route path="/users/:userId/lists/:listId" element={<List />} />
            <Route
              path="/users/:userId/lists/:listId/:kanji"
              element={<ListItem />}
            />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
