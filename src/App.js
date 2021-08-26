import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import history from "../src/utils/history";
import { Navbar } from "./component";
import configureStore from "./store/configureStore";
import "./App.css";

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
