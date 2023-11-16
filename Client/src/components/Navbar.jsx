import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaPowerOff } from "react-icons/fa";

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <>
      <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : " "}`}>
          <div className="left flex a-center">
            <div className="brand flex a-center j-center">
              <img src="/" alt="logo" srcset="" />
            </div>
          </div>
          <div className="mid-nav">
            {" "}
            <ul className="links d-flex">
              {links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right d-flex a-center">
            <Link to="/register">
              <button className="btn btn-info">Registeration</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-info">Login</button>
            </Link>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 4rem;
    align-item: center;
    transition: 0.3s ease-in-out;
    .left {
      display: flex;
      align-items: center;
      .brand {
        img {
          height: 4rem;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
  .links {
    list-style: none;
    gap: 2rem;

    li {
      a {
        color: white;
        text-decoration: none;
        font-family: "Playpen Sans", cursive;
      }
    }
  }

  .mid-nav {
    display: flex;
    align-items: center;
  }
`;
