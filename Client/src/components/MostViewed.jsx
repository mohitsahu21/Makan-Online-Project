import React from "react";
import styled from "styled-components";
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function MostViewed() {
  return (
    <Wrapper>
      <div className="mb-4">
        <h3 className="post-heading fw-semibold mb-3 ms-lg-3">
        Most Viewed
        </h3>
        <div className="row  cardBox">
            <div className="col-12 col-md-4 mb-4 ">
    <div className="card shadow p-3 mb-5 bg-white rounded">
   <Link to="/single-property" > <img  src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg" className="card-img-top" alt="..."/> </Link>
    <div className="card-body">
        
    <p className="card-text d-inline"><span className="fs-5"><BiCategoryAlt /></span> Jabalpur</p>
        <Link to="/single-property" style={{textDecoration: 'none'}} >  <h6 className="card-title mt-2">2 Beds2 Baths 1,188 Sq Ft
350 S Durango Dr Unit 224
Las Vegos, NV 89145</h6> </Link>
      <h5 className="card-text">₹ 2,00,000</h5>
      <p className="card-text"><small className="text-body-secondary"> <span className="fs-5"><CgCalendarDates /></span> 7 hours ago</small></p>
    </div>
  </div>
  </div>

  <div className="col-12 col-md-4 mb-4 ">
    <div className="card shadow p-3 mb-5 bg-white rounded">
   <Link to="/single-property" > <img  src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg" className="card-img-top" alt="..."/> </Link>
    <div className="card-body">
        
    <p className="card-text d-inline"><span className="fs-5"><BiCategoryAlt /></span> Jabalpur</p>
        <Link to="/single-property" style={{textDecoration: 'none'}} >  <h6 className="card-title mt-2">2 Beds2 Baths 1,188 Sq Ft
350 S Durango Dr Unit 224
Las Vegos, NV 89145</h6> </Link>
      <h5 className="card-text">₹ 2,00,000</h5>
      <p className="card-text"><small className="text-body-secondary"> <span className="fs-5"><CgCalendarDates /></span> 7 hours ago</small></p>
    </div>
  </div>
  </div>

  <div className="col-12 col-md-4 mb-4 ">
    <div className="card shadow p-3 mb-5 bg-white rounded">
   <Link to="/single-property" > <img  src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg" className="card-img-top" alt="..."/> </Link>
    <div className="card-body">
        
    <p className="card-text d-inline"><span className="fs-5"><BiCategoryAlt /></span> Jabalpur</p>
        <Link to="/single-property" style={{textDecoration: 'none'}} >  <h6 className="card-title mt-2">2 Beds2 Baths 1,188 Sq Ft
350 S Durango Dr Unit 224
Las Vegos, NV 89145</h6> </Link>
      <h5 className="card-text">₹ 2,00,000</h5>
      <p className="card-text"><small className="text-body-secondary"> <span className="fs-5"><CgCalendarDates /></span> 7 hours ago</small></p>
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
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }
 h3 {
    font-family: "Playpen Sans", cursive;
  }
.card{
    border: none;
    margin: 1rem;
    
    img{
        border-radius: 10px;
        transition: 0.4s ease-in-out;
        cursor: pointer;
        
        
    }
    img:hover{
             transform: scale(1.09);
        }
    
    .card-body{
        padding-left: 0;
        padding-right: 0;

    }
}
    
`;
