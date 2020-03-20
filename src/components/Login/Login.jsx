import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { loginAuthThunk } from "../../redux/auth-reducer";
import { Input } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          placeholder={"email"}
          component={Input}
          type="email"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"Password"}
          component={Input}
          type="text"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const onSubmit = formData => {
  console.log(formData);
  // loginAuthThunk(formData);
};

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const Login = props => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

// export default Login;

let mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  rememberMe: state.auth.rememberMe
});

export default connect(mapStateToProps, { loginAuthThunk })(LoginContainer);
