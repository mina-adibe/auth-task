import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginRequest } from "../../store/actions/auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = ({ LoginRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be valid E-mail").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      LoginRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="email"
          label="email"
          id="email"
          placeholder="enter your mail"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}

        <TextField
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
        <Link style={{ color: "white" }} to="/register">
          Register
        </Link>
      </Button>
      <div style={{ marginTop: "20px" }}>
        <Link to="/forgetpassword">Forget Password</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  LoginRequest: LoginRequest,
};

Login.propTypes = {
  LoginRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
