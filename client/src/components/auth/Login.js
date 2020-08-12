import React, { useState, Fragment, useEffect } from "react";
import MainNav from "../layout/MainNav";
import FormLayout from "../layout/FormLayout";
import SubHeader from "../layout/SubHeader";
import ImageContainer from "../layout/ImageContainer";
import InputContainer from "../layout/InputContainer";
import FormSubmitButton from "../layout/FormSubmitButton";

import { login, clearErrors } from "../../actions/authActions";

import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const { error, isAuthenticated } = props;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Email..!") {
      M.toast({ html: `${error}` });
      props.clearErrors();
    } else if (error === "Invalid Password..!") {
      M.toast({ html: `${error}` });
      props.clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      M.toast({ html: "Please enter all fields!" });
    } else {
      props.login({ email, password });
    }
  };

  return (
    <Fragment>
      <MainNav selItem={"login-id"} />
      <div className='main'>
        <div className='row'>
          <div className='col s10 offset-s1 m6 offset-m3'>
            <FormLayout>
              <SubHeader text={"Login User"} />
              <div className='row'>
                <div className='col s12 m6 hide-on-small-only'>
                  <ImageContainer
                    src={require("../images/logo.png")}
                    alt={"Logo"}
                    style={{ height: "auto", width: "100%" }}
                  />
                </div>
                <div className='col s12 m6'>
                  <form onSubmit={onSubmit}>
                    <InputContainer
                      type='email'
                      name='email'
                      value={email}
                      text='Email address'
                      onChange={onChange}
                      required
                    />
                    <InputContainer
                      type='password'
                      name='password'
                      value={password}
                      text='Password'
                      onChange={onChange}
                      required
                    />
                    <FormSubmitButton text={"Login"} />
                  </form>
                </div>
              </div>
            </FormLayout>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  error: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (obj) => dispatch(login(obj)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
