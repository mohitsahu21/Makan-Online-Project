

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import makan_logo from '../../images/Makaan_logo.jpg'
import styled from 'styled-components';

const NavbarAd = () => {
 

  

  return (
    <Wrapper>
    <Navbar
     
      variant="dark"
      expand="lg"
      fixed="top"
      className="transition-navbar-color bg-dark"
    >
      <Navbar.Brand href="#home">
        <img src={makan_logo} height={35} width={35} alt="" className='mx-2' />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto m-auto">
         
          <Nav.Link href="/" className='li'>Home</Nav.Link>
          <Nav.Link href="#about" className='li'>About</Nav.Link>
          <Nav.Link href="#contact" className='li'>Contact</Nav.Link>
          <Nav.Link href="#contact" className='li'>Blog</Nav.Link>
        </Nav>
        <button className="btn btn-outline-light mx-2 " type="submit">Registeration</button>
       <button className="btn btn-outline-light  mx-4 " type="submit">Login</button>

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