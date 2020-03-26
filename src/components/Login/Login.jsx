import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginAuthThunk } from "../../redux/auth-reducer";
import { Input, createField } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import style from "../common/FormControls/FormControls.module.scss";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className={style.formControl__error}>
          <span>{error}</span>
        </div>
      )}
      {createField("email", "Email", Input, [required, maxLength30], {
        type: "email"
      })}
      {createField("password", "Password", Input, [required, maxLength30], {
        type: "password"
      })}
      {createField(
        "rememberMe",
        null,
        Input,
        null,
        { type: "checkbox" },
        "remember me"
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const Login = props => {
  const onSubmit = formData => {
    // console.log(formData);
    props.loginAuthThunk(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

// export default Login;

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginAuthThunk })(LoginContainer);
