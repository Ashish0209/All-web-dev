import React, { useState } from "react";
// import * as Components from './Components';
import './index.css'
import Register from "./Register";

const App = () => {
  return (
    <>
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <label htmlFor="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
          </form>
          <button className="link-btn" >Don't have an account? Register here.</button>
        </div>
    </>
  );
};

export default App;