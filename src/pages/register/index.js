import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { RegisterRequest } from "../../store/actions/auth";

const Register = ({ RegisterRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mobile_number: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
      mobile_number: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().required("Required"),
      password_confirmation: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      RegisterRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="name"
          name="name"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && <div>{formik.errors.username}</div>}
        <TextField
          fullWidth
          label="Email"
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}

        <PhoneInput
          inputStyle={{
            width: "100%",
            height: "2.5rem ",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            borderWidth: "1px",
          }}
          country={"eg"}
          type="number"
          name="mobile_number"
          value={formik.values.mobile_number}
          onChange={(e) => formik.setFieldValue("mobile_number", "+" + e)}
        />
        {formik.errors.mobile_number && (
          <div>{formik.errors.mobile_number}</div>
        )}

        <TextField
          fullWidth
          id="password"
          label="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}

        <TextField
          fullWidth
          label="confirm password"
          name="password_confirmation"
          id="password_confirmation"
          type="password"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && (
          <div>{formik.errors.confirmPassword}</div>
        )}

        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  RegisterRequest: RegisterRequest,
};

Register.propTypes = {
  RegisterRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
