import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { isLogin, logout } from "../../utils/auth";
import { useSelector } from "react-redux";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const history = useHistory();

  let UserLoginSuccess = useSelector((state) => state.AuthReducer);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    setUserLogged(isLogin());
  }, [UserLoginSuccess, userLogged]);

  const handleClickLogout = () => {
    setUserLogged(logout());
    history.push("/login");
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Auth task
            </Typography>

            <ul style={{ listStyleType: "none", display: "flex" }}>
              {!userLogged ? (
                <>
                  <li>
                    <Button>
                      <Link style={{ color: "white" }} to="/login">
                        Login
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link style={{ color: "white" }} to="/register">
                        Register
                      </Link>
                    </Button>
                  </li>
                </>
              ) : (
                <li onClick={() => handleClickLogout()}>
                  <Link style={{ color: "white" }} to="">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
