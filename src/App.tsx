import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Explore from "./routes/explore/Explore";

function App() {
  return (
    <div>
      <Header />
      {/* switch statement for react router */}
      <Explore />
      <div>footer</div>
    </div>
  );
}

export default App;
