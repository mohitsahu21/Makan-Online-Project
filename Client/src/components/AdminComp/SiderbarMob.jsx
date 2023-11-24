import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logo from '../../images/Makaan_logo.jpg'
function SiderbarMob() {
  return (
    <Wrapper>
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Offcanvas navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" id='btnside'>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title d-flex gap-2 " id="offcanvasNavbarLabel"><img src={logo} height={30} width={30} alt="" /><h6 className='mt-1'>Makaan Online</h6></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li>
            
                {" "}
                <a className="d-flex gap-2 text-decoration-none">
                  <i className="fs-4 bi bi-house-door-fill"></i>
                  <br />
                  <span className=" text-black  mt-2 mx-2" id="navleft1">
                    Dashboard
                  </span>{" "}
                </a>
             
            </li>
            <li>
              {" "}
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                  <i className="fs-4 bi  bi-building"></i> <br />
                 
                  <span className=" d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Property
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/house">Add Property</Dropdown.Item>
          <Dropdown.Item href="#/villa">All Property</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </span>
                </a>
             {" "}
            </li>
            <li>
            
                <a className="d-flex gap-2 text-decoration-none">
                  <i className="fs-4 bi bi-receipt-cutoff"></i>
                  <br />
                  <span className=" d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Types
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/house">House</Dropdown.Item>
          <Dropdown.Item href="#/villa">Villa</Dropdown.Item>
          <Dropdown.Item href="#/plot">Plot</Dropdown.Item>
          <Dropdown.Item href="#/apartment">Apartment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
                </a>
             
            </li>
            <li>
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                  <i className="fs-4 bi bi-file-post"></i>
                  <br />
                 
                
                  <span className=" d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Blog
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/house">All Blog</Dropdown.Item>
          <Dropdown.Item href="#/villa">Add Blog</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </span>
                </a>
             
            </li>
            <li>
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                <i className="fs-4 bi bi-power"></i>
                  <br />
                  <span className=" text-black  mt-2 mx-2 " id="navleft">
                    Logout
                  </span>{" "}
                </a>
             
            </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    
    
    
    </Wrapper>
  )
}

export default SiderbarMob
const Wrapper = styled.div`
 .bi {
    color: #737373;
  }
  #btnside{
    @media screen and (max-width: 768px) {
        margin-top: 1.5rem;
        border: none;
        margin-left: -1rem;
    }
  }
  #offcanvasNavbar{
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
  .dropdown-toggle::after {
 
 margin-left: 1rem;
   
}

`