import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Cards() {
  return (
    <Wrapper>
    <div className="row" id='cardrow'>
        
    
        <div className="col-lg-3 col-md-12">
          <div className="card" id="card2">
            <div className="card-body d-flex justify-content-between">
              <i className="bi  bi-building h1"></i>
              <div className="">
                <h6 className="card-title" style={{ color: " #5a626d" }}>
                  Property
                </h6>

                <p className=" h6 text-center text-dark">19</p>

                <p className="view h6">View Detail</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          
          <div className="card" id="card3">
            <div className="card-body d-flex justify-content-between">
            <i className="bi bi-file-post  h1 float-end"></i>
              <div className="">
                <h6 className="card-title mx-3" style={{ color: " #5a626d" }}>
                Blog
                </h6>

                <p className=" h6 text-center text-dark">  <i className="bi bi-currency-rupee"></i>5200</p>

                <p className="view h6">View Detail</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <div className="card" id="card4">
            <div className="card-body d-flex justify-content-between">
              <i className="bi bi-people-fill h1"></i>
              <div className="">
                <h6 className="card-title">Total User</h6>

                <p className=" h6 text-center text-dark">256</p>

                <p className="view h6"><Link to="/all_patient" className=" text-decoration-none" style={{color:"red"}}>View Detail</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <div className="card" id="card4">
            <div className="card-body d-flex justify-content-between">
              <i className="bi bi-people-fill h1"></i>
              <div className="">
                <h6 className="card-title">Total User</h6>

                <p className=" h6 text-center text-dark">256</p>

                <p className="view h6"><Link to="/all_patient" className=" text-decoration-none" style={{color:"red"}}>View Detail</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cards
const Wrapper = styled.div`
     .dotrem {
    list-style-type: none;
  }
  .dotrem1 {
    list-style-type: none;
    width: 25px;
    padding-left:4px;
  }

.data{
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
 
}

 
  #card2 {
    width: 20rem;
    height: 10rem;
    margin-top: 5px;
    border-radius: 1rem;

    background-image: linear-gradient(#fff0b4, #f3e8f2);
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
      width: 88%;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      width: 41rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
    width: 13rem;
  }
  }
  #card3 {
    width: 20rem;
    height: 10rem;
    background-image: linear-gradient( #cde6db,#f3e8f2);
    margin-top: 5px;
    border-radius: 1rem;
    @media screen and (max-width: 768px) {
      width: 88%;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      width: 41rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
    width: 13rem;
  }
  }
  #card4 {
    width: 20rem;
    height: 10rem;
    background-image: linear-gradient(#9dc5f8, #dfeefa);
    margin-top: 5px;
    border-radius: 1rem;
    @media screen and (max-width: 768px) {
      width: 88%;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      width: 41rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
    width: 13rem;
  }
  }

  .view {
    color: red;
    
    
    
  }
  #cardrow{
    margin-top: 1rem;
    margin-left: 7rem;
    
    @media screen and (max-width: 768px) {
   margin-left: -2rem;
   gap: 1rem;
    
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
   margin-left: 8rem;
  }
  }

`