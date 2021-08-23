import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/auth";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !isLogin() ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};

export default PublicRoute;
