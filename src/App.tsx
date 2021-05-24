import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Explore from "./routes/explore/Explore";
import { Router, Route, Switch } from "react-router";
import Home from "./routes/home/Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
      </Switch>

      {/* switch statement for react router */}

      {/* footer goes here */}
    </div>
  );
}

export default App;
