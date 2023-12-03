import React from 'react'
import { Navbar, Nav, Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/Makaan_logo.jpg'

function NavbarMob() {
  return (
    <Wrapper>
    <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand mx-3" href="#"><img src={logo} height={35} width={35} alt="" /></a>
    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title d-flex gap-1" id="offcanvasNavbarLabel"><img src={logo} height={30} width={30} alt="" /><h6 className='mt-1'>Makaan Online</h6></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
         
   
         <Nav.Link  as={Link} to="/" className='li'>Home</Nav.Link>
          <Nav.Link  as={Link} to="/about" className='li'>About</Nav.Link>
          <Nav.Link  as={Link} to="/contact" className='li'>Contact</Nav.Link>
          <Nav.Link  as={Link} to="/blog" className='li'>Blog</Nav.Link>
          <Nav.Link  as={Link} to="/admin" className='li'>Admin</Nav.Link>
        </Nav>
        </ul>
        <Link to="/register"><button className="btn btn-outline-light mx-2 " type="submit">Registeration</button></Link>
      <Link to="/login"> <button className="btn btn-outline-light  mx-4 " type="submit">Login</button> </Link>
      </div>
    </div>
  </div>
</nav>
    
    </Wrapper>
  )
}

export default NavbarMob
const Wrapper = styled.div`
#offcanvasNavbar{
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
  .dropdown-toggle::after {
 
 margin-left: 1rem;
   
}
.li{
    color: black;
         font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
         padding: 1rem;
  }
  .li:hover{
    color: #712cf9;
  }
  
  .btn{
    font-weight: bold;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
  }
`