import React from "react";
import Input from './Input';

const Login = props => {
  return (
    <form className="form">
      <Input type={"text"} pHolder={"Username"} />
      <Input type={"password"} pHolder={"Password"} />
      {props.isRegistered === false &&
        <Input type={"password"} pHolder={"Confirm Password"} />
      }
      <button type="submit">{props.isRegistered === true ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
