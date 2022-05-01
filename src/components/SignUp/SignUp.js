import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="" placeholder="Enter Email" required/>
          </div>
          <div className="input-group">
          <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Password" required
            />
          </div>
          <div className="input-group">
          <label htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Password" required
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default SignUp;