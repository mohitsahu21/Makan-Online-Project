import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi';

import { CgCalendarDates } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from 'styled-components';
function PropertyAd() {
  return (
    <Wrapper>
       <div className="card shadow p-3 mb-5 bg-white rounded">
    <Link to="/single_property">
      {" "}
      <img
        src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg"
        className="card-img-top"
        alt="..."
      />{" "}
    </Link>
    <div className="card-body">
      <p className="card-text d-inline">
        <span className="fs-5">
          <BiCategoryAlt />
        </span>{" "}
        Jabalpur
      </p>
      <Link to="/single_property" style={{ textDecoration: "none" }}>
        {" "}
        <h6 className="card-title mt-2">
          2 Beds2 Baths 1,188 Sq Ft 350 S Durango Dr Unit 224 Las
          Vegos, NV 89145
        </h6>{" "}
      </Link>
      <h5 className="card-text">₹ 2,00,000</h5>
      <p className="card-text">
        <small className="text-body-secondary">
          {" "}
          <span className="fs-5">
            <CgCalendarDates />
          </span>{" "}
          7 hours ago
        </small> <button className="btn btn-success float-end">Edit</button>
      <button className="btn btn-danger mx-3 mx-md-1 float-end">Delete</button>
      </p>
     
    </div>
  </div>
  </Wrapper>
  )
}

export default PropertyAd
const Wrapper = styled.div`
  
  h3 {
    font-family: "Playpen Sans", cursive;
  }
  .card {
    border: none;
    margin: 1rem;

    img {
      border-radius: 10px;
      transition: 0.4s ease-in-out;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.09);
    }

    .card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }
`