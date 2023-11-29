import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import styled from "styled-components";

function Sidebar() {
  return (
    <Wrapper>
      <div className=" px-sm-2 px-0 " id="sidebar">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2">
        
        
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
            
                {" "}
                <a className="d-flex gap-2 text-decoration-none">
                  <i className="fs-4 bi bi-house-door-fill"></i>
                  <br />
                  <span className=" d-none d-sm-inline mt-2 mx-2" id="navleft1">
                  <Link to="/" className=" text-decoration-none text-black">Dashboard</Link>  
                  </span>{" "}
                </a>
             
            </li>
            <li>
              {" "}
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                  <i className="fs-4 bi  bi-building"></i> <br />
                  
                    
                  <span className="d-none d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Property
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/house">Add Property</Dropdown.Item>
          <Dropdown.Item href="#/villa"><Link to="/allproperties">All Property</Link></Dropdown.Item>
          
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
                  <span className="d-none d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Types
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item ><Link to='/admin_house' className=" text-decoration-none text-black">House</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/admin_villa" className=" text-decoration-none text-black">Villa</Link></Dropdown.Item>
          <Dropdown.Item><Link  to="/admin_plot" className=" text-decoration-none text-black">Plot</Link></Dropdown.Item>
          <Dropdown.Item ><Link  to="/admin_land" className=" text-decoration-none text-black">Land</Link></Dropdown.Item>
          <Dropdown.Item ><Link  to="/admin_flat" className=" text-decoration-none text-black">Flat</Link></Dropdown.Item>
          <Dropdown.Item ><Link  to="/admin_farmhouse" className=" text-decoration-none text-black">FarmHouse</Link></Dropdown.Item>
          <Dropdown.Item ><Link  to="/admin_farmland" className=" text-decoration-none text-black">FarmLand</Link></Dropdown.Item>
          <Dropdown.Item ><Link  to="/admin_commerical" className=" text-decoration-none text-black">Commercial</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
                </a>
             
            </li>
            <li>
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                  <i className="fs-4 bi bi-file-post"></i>
                  <br />
                   
                  <span className="d-none d-sm-inline" id="navleft">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Blog
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item ><Link to="/all_blogs">All Blog</Link></Dropdown.Item>
          <Dropdown.Item ><Link to="/add_blog">Add Blog</Link></Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </span>
                </a>
             
            </li>
            <li>
            
                <a className="nav-link px-0 align-middle d-flex gap-2">
                <i className="fs-4 bi bi-power"></i>
                  <br />
                  <span className=" d-none d-sm-inline mt-2 mx-2 " id="navleft">
                    Logout
                  </span>{" "}
                </a>
             
            </li>
          </ul>
          
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
const Wrapper = styled.div`
  #navleft1 {
    font-size: 1rem;
    color: #4f6470;
  }
  #navleft2 {
    font-size: 1rem;
    color: #4f6470;
  }
  #navleft {
    font-size: 1rem;
    color: #4f6470;
  }
  #sidebar {
    margin-top: 4.6rem;
    width: 15rem;
    height: 43rem;
    background-color: white;
    box-shadow: 5px 2px 2px #f4f6f9;


    @media screen and (min-width: 1020px) and (max-width: 1600px) {
      height: 43rem;
    }
  }
  .bi {
    color: #737373;
  }
.form-select{
    border: none;
}
 #menu{
    gap: 2rem;
    margin-top: 1rem;
 }
 .dropdown-toggle::after {
 
  margin-left: 1rem;
    
}

`;
