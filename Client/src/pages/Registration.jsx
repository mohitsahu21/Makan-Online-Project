import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';
import cogoToast from 'cogo-toast';



const Registration = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData , setFormData] = useState({});

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleSumbit = async (e) =>{
    e.preventDefault();
    try{
      const res  = await axios.post("http://localhost:9000/api/auth/register", formData)
      console.log(res)
      if(res.data.success === true){
        cogoToast.success(`${res.data.message}`)
      }
    
    }
    catch(error){
      console.log(error.respone.data.error)
      cogoToast.error(`${error.respone.data.error}`)
    }

  }
  
  return (
    <>
      <Container>
        <Navbar isScrolled={isScrolled} />
        <div>
          <div className="boxContainer">
            <div className="formcontent">
              <h1>Register</h1>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="phone"
                  maxLength={10}
                  className="form-control"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={handleSumbit}>Submit</button>
              </div>
              <p>
                Allready have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Registration;
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
      padding: 1rem 2rem;
      border-radius: 1rem;
      height: auto;
      box-shadow: 1px 2px 34px #38c7e4;
      h1 {
        text-align: center;
        font-family: monospace;
        margin: 1rem 0;
        color: #08494c;
      }
      .form-label {
        margin-bottom: 0rem !important;
      }
    }
  }
`;
