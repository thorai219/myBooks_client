import { useState } from "react";

import { signIn, signUp } from "../../reducers/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import FormInput from "./form-input.component";

import "./auth-form.styles.css";

const AuthForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userSignUp, setUserSignUp] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userSignUp) {
      dispatch(signUp(userData, history));
    } else {
      dispatch(signIn(userData, history));
    }

    setUserData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleAuthChange = () => {
    setUserSignUp(!userSignUp);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form">
          {userSignUp ? (
            <FormInput
              type="text"
              name="username"
              label="Username"
              value={userData.username}
              handleChange={handleChange}
              className="form-control"
              required
            />
          ) : null}
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={userData.email}
            handleChange={handleChange}
            className="form-control"
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={userData.password}
            handleChange={handleChange}
            className="form-control"
            required
          />
          {userSignUp ? (
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={userData.confirmPassword}
              handleChange={handleChange}
              className="form-control"
              required
            />
          ) : null}
        </div>
        <button className="btn btn-success">Submit</button>
        <div className="auth-action">
          {signUp ? (
            <p>
              Already have an account?{" "}
              <span onClick={handleAuthChange}>sign in here</span>
            </p>
          ) : (
            <p>
              Dont'have an account?{" "}
              <span onClick={handleAuthChange}>sign up here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
