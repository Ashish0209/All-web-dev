import React, { useState } from "react";

const Register = () => {
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form">
            <label htmlFor="name">Full name</label>
            <input name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Already have an account? Login here.</button>
    </div>
    )
}

export default Register;