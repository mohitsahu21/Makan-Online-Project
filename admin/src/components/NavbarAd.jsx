

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import makan_logo from '../images/Makaan_logo.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../redux/admin/adminSlice";

const NavbarAd = () => {
  const dispatch = useDispatch();
  const {currentAdmin,loading,error} = useSelector((state) => state.admin);

  const handleLogout = () => {
    dispatch(logout())
}
  

  return (
    <Wrapper>
    <Navbar
     
      variant="dark"
      expand="lg"
      fixed="top"
      className="transition-navbar-color bg-dark"
    >
      <Navbar.Brand >
       <Link to="/"> <img src={makan_logo} height={35} width={35} alt="" className='mx-2' /></Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto m-auto">
         
          <Nav.Link className='li'></Nav.Link>
          <Nav.Link  className='li'></Nav.Link>
          <Nav.Link  className='li'></Nav.Link>
          <Nav.Link  className='li'></Nav.Link>
        </Nav>
        {currentAdmin ? 
         ( <>
          <NavDropdown title={currentAdmin.user.name} id="navbarScrollingDropdown" className='text-white me-5'>
            <NavDropdown.Item href="#action3" onClick={handleLogout}>Logout</NavDropdown.Item>
            
           
          
          </NavDropdown>
          
         

        
         </>)
         :
         (
          <>
            <Link to="/admin_register"> <button className="btn btn-outline-light mx-2 " type="submit">Registeration</button></Link>
       <Link to="/admin_login"><button className="btn btn-outline-light  mx-4 " type="submit">Login</button></Link>
          </>
         )
        
      
      }
       

      </Navbar.Collapse>
    </Navbar>
    </Wrapper>
  );
};

export default NavbarAd;
const Wrapper = styled.div`
  .li{
    color: white;
         font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
         padding: 1rem;
  }
  .btn{
    font-weight: bold;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
  }
  
`