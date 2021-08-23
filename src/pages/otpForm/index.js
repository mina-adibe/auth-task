import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { OtpRequest } from "../../store/actions/auth";

const OtpForm = ({ OtpRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be valid E-mail").required("Required"),
      otp: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      OtpRequest(values);
      console.log(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <h1>Enter Otp Code</h1>
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
          name="otp"
          label="otp"
          id="otp"
          placeholder="Enter Otp Code          "
          onChange={formik.handleChange}
          value={formik.values.otp}
        />
        {formik.errors.otp && <div>{formik.errors.otp}</div>}

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
          Submit
        </Button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  OtpRequest: OtpRequest,
};

OtpForm.propTypes = {
  OtpRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(OtpForm);
