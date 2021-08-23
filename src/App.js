import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Routes from "./routes/Routes";
import { Router } from "react-router-dom";
import history from "../src/utils/history";
import { Navbar } from "./component";

function App() {
  return (
    <div>
      <Provider store={configureStore}>
        <div>
          <Router history={history}>
            <Navbar />
            <Routes />
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
