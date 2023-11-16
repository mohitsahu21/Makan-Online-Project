import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Container>
        <Navbar isScrolled={isScrolled}/>
        <div>
          <div className="boxContainer">
            <div className="formcontent">
              <h1>Login</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success">Submit</button>
              </div>
              <p className="mb-0" >
                Don't have an account?{" "}
                <span>
                  <Link to="/register">Signup</Link>
                </span>
              </p>
              <p className="text-center">
              <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .boxContainer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .formcontent {
      background-color: #0dcaf0;
      padding: 1rem;
      border-radius: 1rem;
      height: auto;
      box-shadow: 1px 2px 34px #38c7e4;
      h1 {
        text-align: center;
        font-family: monospace;
        margin: 1rem 0;
        color: #08494c;
      }
    }
  }
`;
