import React from "react";
import { Login, LoginForm } from "react-admin";

const LoginPage = props => (
  <Login loginForm={<LoginForm />} {...props} />
);

export default LoginPage;
