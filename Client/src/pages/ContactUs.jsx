import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import cogoToast from 'cogo-toast';
import axios from 'axios';



function ContactUs() {
    const [isScrolled, setIsScrolled] = useState(false);
  
   
    const [formData , setFormData] = useState({});
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await axios.post("http://localhost:9000/api/auth/contact_us", formData);
    
        if (res.data.success === true) {
          cogoToast.success(`${res.data.message}`);
          
        }
        setFormData({});
      } catch (error) {
        console.log(error.response.data.error);
        cogoToast.error(`${error.response.data.error}`);
      }
    };
    
    

  return (
    <>
    <Container>
    <Navbar isScrolled={isScrolled}/>
    <div className='container boxContainer mt-5'>
        <div className='row'>
            <div className='col-12 mt-5'>
              <h4 className='text-center'>CONTACT US</h4>
            </div>
             </div>
        <div className='row mb-5'>
            <div className='col-12 col-md-6'>
                  <ul className="list p-0">
                    <div className="d-flex align-items-center gap-3">
                    <span className="display-6"><FaLocationDot/></span>
                      <li className='mt-4'>
                         <h6> Office Address</h6>
                          <p>C-304,Ample Heights,E-8 Extension Arera Colony Bhopal –MP, Hrinagar, Durg, Bhilai, Raipur - CG</p>
                      </li>
                    </div>
                      <div className="d-flex align-items-center gap-3">
                      <span className="display-6"><BiSolidContact /></span>
                      <li className='mt-5'>  <h6>Phone Number </h6>
                          <p> office: +91-8827795555 / +91-7489924666</p>
                          <p>Mobile: +91-8827795555</p>
                      </li>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                      <span className="display-6"><MdEmail /></span>
                      <li className='mt-5'><h6> Email Address</h6>
                          <p>makaanonline20@gmail.com</p>
                      </li>
                      </div>
                  </ul>

            </div>
            <div className='col-12 col-md-6'>
            <form onSubmit={handleSubmit}>
       
        <div className="mb-3 mt-4">
          <input
            type="text"
            placeholder="Enter your fullname"
            name="name"
            className="form-control"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </div>

        
        <div className="mb-3 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="form-control"
            value={formData.email || ''}
            onChange={handleChange}
          />
        </div>

        
        <div className="mb-3 mt-4">
          <input
            type="text"
            placeholder="Enter your 10 digit mobile number"
            name="phone"
            maxLength={10}
            className="form-control"
            value={formData.phone || ''}
            onChange={handleChange}
          />
        </div>

       
        <div className="mb-3">
          <textarea
            placeholder="Write message"
            className="form-control"
            rows="6"
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
          />
        </div>

     
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
            
        </div>
        </div>
    </div>
    </Container>
    </>
  )
}

export default ContactUs

const Container = styled.div`
 
  .boxContainer {



    .list{
        list-style: none;
    }
    

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