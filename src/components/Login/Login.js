import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Please Login</h1>
        <form>
        <div className="input-group">
          <label htmlFor="email" name="email">
            Email
          </label>
          <input type="email" name="email" id="" placeholder="Enter Email" />
          <label htmlFor="password" name="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
          />
        </div>
        <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>New to Ema-John ? <Link className="form-link" to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
