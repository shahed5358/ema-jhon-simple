import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="form-container">
      <div>
        <h1 className="form-title">Please Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Email" id="" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id=""
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>New to Ema-John ? <Link className="form-link" to="login">Create an account</Link></p>
      </div>
    </div>
    );
};

export default SignUp;