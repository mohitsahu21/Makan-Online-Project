import React from "react";
import styled from "styled-components";
import NavbarAd from "./NavbarAd";
import BlogAd from "./BlogAd";
import Sidebar from "./Sidebar";
import SiderbarMob from "./SiderbarMob";

export default function AllBlogs() {
  return (                                              
    <Wrapper>
      <NavbarAd/>
  <div className="container-fluid">
    <div className="row">
    <div className="col-lg-2" id='nav1'>
               <Sidebar/>
            </div>
            <div className="col-lg-2" id='nav2'>
               <SiderbarMob/>
            </div>
      <div className="col-lg-10">
         <div className="">
        <h3 className="post-heading fw-semibold mb-3 ms-lg-3">All Blogs</h3>
        <div className="row  cardBox">
          <div className="col-12  col-xl-4 mb-1 ">
        <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
     <BlogAd/>
          </div>


          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>

        
      
          <div className="col-12  col-xl-4 mb-1 ">
        <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
     <BlogAd/>
          </div>


          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>

      
      
          <div className="col-12  col-xl-4 mb-1 ">
        <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
     <BlogAd/>
          </div>


          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>

          <div className="col-12  col-xl-4 mb-1 ">
      <BlogAd/>
          </div>
          </div>
      </div>
      </div>
    </div>
  </div>

     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .post-heading {
    margin-top: 5rem;
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }
  #nav1{
    display: block;
    @media screen and (max-width: 768px) {
   
    display: none;
    
  }
}
  #nav2{
    display: none;
    @media screen and (max-width: 768px) {
   
   display: block;
   
 }
   
  }
  img {
      border-radius: 10px;
      transition: 0.4s ease-in-out;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.09);
    }

`;
