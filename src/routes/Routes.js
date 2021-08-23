import React from "react";
import { Switch } from "react-router-dom";

// import Loader from "../component/Loader/Loader";
import { Login, Register, Home } from "../pages";

import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";

const Routes = () => {
  return (
    <main>
      <section>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
        </Switch>
      </section>
    </main>
  );
};

export default Routes;
