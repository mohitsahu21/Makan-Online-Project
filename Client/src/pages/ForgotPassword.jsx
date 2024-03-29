import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link,useNavigate} from "react-router-dom";
import NavbarMob from "../components/NavbarMob";
import axios from 'axios';
import cogoToast from 'cogo-toast';
import ReactGA from "react-ga4";


const ForgotPassword = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    
 const handleChange =  (e) =>{
      setEmail(e.target.value)
 } 
 const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!email){
      return cogoToast.error(`Please enter email`);
  }
    try{
       const res =await axios.post("https://bharatroofers.com/api/property/forgot-password",{ email: email });
       if (res?.data && res?.data?.success === true) {
        
        console.log(res?.data);
        cogoToast.success(`${res?.data?.message}`);
        navigate("/login")

       
        return;
      }
      if (res.data && res.data.success === false) {
       
        cogoToast.error(`${res?.data?.message}`);
        return;
      }
    }
    catch(err){
      if (err?.response && err.response?.data) {
          
        console.log(err);
        cogoToast.error(`${err.response?.data?.message}`);
      }  

    }

 }
  
    useEffect(()=>{
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      const handleTop = () => {
        window.scrollTo(0, 0);
      };
      handleTop();
    },[])
    return (
      <>
        <Container>
        <div className="nav1"><Navbar  isScrolled={isScrolled} /></div>
          <div className="nav2"><NavbarMob /> </div>
          <div>
            <div className="boxContainer">
              <div className="formcontent">
                <h1>Forgot Password</h1>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
                <p className="text-center">
                  
                  <span>
                    <Link to="/login">Return to login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  };
  
  export default ForgotPassword;

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
  .nav1{
    display: block;
    @media screen and (max-width: 1000px) {
    
    display: none;
    
  }
}
  .nav2{
    display: none;
  
    @media screen and (max-width: 1000px) {
   display: block;
   
 }
   
  }
`;

