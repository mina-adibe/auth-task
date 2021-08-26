import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useFormik } from "formik";

import { ForgetPassRequest } from "../../store/actions/auth";
import { Btn, TextInput } from "../../component/index";

const ForgetPassword = ({ ForgetPassRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      ForgetPassRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <h2>Forget Password</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          fullWidth
          label="Email"
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}

        <Btn variant="contained" color="primary" type="submit">
          submit
        </Btn>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  ForgetPassRequest: ForgetPassRequest,
};

ForgetPassword.propTypes = {
  ForgetPassRequest: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ForgetPassword);
