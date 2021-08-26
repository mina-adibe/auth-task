import React from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";

import { ResetPassRequest } from "../../store/actions/auth";

import Button from "@material-ui/core/Button";
import { Btn, TextInput } from "../../component";

const ResetPassword = ({ ResetPassRequest }) => {
  let { pathname } = useLocation();
  let token = pathname.substr(15, 10);
  let email = pathname.substr(26);

  //formik
  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      token: token,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be valid E-mail").required("Required"),
      password: Yup.string().required("Required"),
      token: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      ResetPassRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
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

        <TextInput
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
        <TextInput
          fullWidth
          name="token"
          label="token"
          id="token"
          placeholder="Enter token Code          "
          onChange={formik.handleChange}
          value={formik.values.token}
        />
        {formik.errors.token && <div>{formik.errors.token}</div>}

        <Btn variant="contained" color="primary" type="submit">
          Login
        </Btn>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  ResetPassRequest: ResetPassRequest,
};

ResetPassword.propTypes = {
  ResetPassRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ResetPassword);
