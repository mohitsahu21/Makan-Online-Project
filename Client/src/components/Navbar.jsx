
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import makan_logo from '../images/Makaan_logo.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StickyNavbar = ({isScrolled}) => {
  const [navbarColor, setNavbarColor] = useState(isScrolled ? 'transparent' : 'dark');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newNavbarColor = scrollPosition > 50 ? 'dark' : 'transparent';
    setNavbarColor(newNavbarColor);
  };

  useEffect(() => {
    if(isScrolled){
      window.addEventListener('scroll', handleScroll);
    }
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
    <Navbar
      bg={navbarColor}
      variant="dark"
      expand="lg"
      fixed="top"
      className="transition-navbar-color"
    >
      <Navbar.Brand as={Link} to="/">
        <img src={makan_logo} height={35} width={35} alt="" className='mx-2' />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto m-auto">
         
          <Nav.Link  as={Link} to="/" className='li'>Home</Nav.Link>
          <Nav.Link  as={Link} to="/about" className='li'>About</Nav.Link>
          <Nav.Link  as={Link} to="/contact" className='li'>Contact</Nav.Link>
          <Nav.Link  as={Link} to="/blog" className='li'>Blog</Nav.Link>
        </Nav>
      <Link to="/register"><button className="btn btn-outline-light mx-2 " type="submit">Registeration</button></Link>
      <Link to="/login"> <button className="btn btn-outline-light  mx-4 " type="submit">Login</button> </Link>

      </Navbar.Collapse>
    </Navbar>
    </Wrapper>
  );
};

export default StickyNavbar;
const Wrapper = styled.div`
  .li{
    color: white;
         font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
         padding: 1rem;
         margin-left: 20px;
  }
  .btn{
    font-weight: bold;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
  }
  
`