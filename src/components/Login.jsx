import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";


import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";


const Login = () => {
 
  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login-logo">
          <h2 className="login-logoTitle">
            {" "}
            <StorefrontSharpIcon />
            iSHOP
          </h2>
        </div>
      </Link>
      <div className="login-container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
          
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"  
        
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-signbtn" >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the eShop Website Conditions of Use and Sale.
          Please see our Privacy Notice, our Cookies Notices, and our Interest-based notice.
        </p>

        <button className="register-btn" >
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};

export default Login;
