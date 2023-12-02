import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import BlogPost from "../components/BlogPost";

function Blogs() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    // useEffect(() => {
    //     // Fetch data from your backend API
    //     fetch('your-backend-api-url')
    //       .then(response => response.json())
    //       .then(data => setBlogPosts(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);

  return (
    <>
    <Container>
    <Navbar isScrolled={isScrolled}/>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 text-center mt-5">
                <h1 className="">Blogs For Homes</h1>
                <p>Here's the popular blogs.</p>
                
               
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <form className="d-flex mt-4 justify-content-center searchBox ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div>
        </div>
       
         {/* <div>
      {blogPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
       </div> */}

        <div className="row mt-5 cardBox">
            <div className="col-12 col-md-4 mb-4 ">
            <BlogPost/>
            </div>
            <div className="col-12 col-md-4 mb-4">
            <BlogPost/>
            </div>
            <div className="col-12 col-md-4 mb-4">
            <BlogPost/>
            </div>
            <div className="col-12 col-md-4 mb-4">
            <BlogPost/>
            </div>
            <div className="col-12 col-md-4 mb-4">
            <BlogPost/>
            </div>
            <div className="col-12 col-md-4 mb-4">
            <BlogPost/>
            </div>
        </div>
        

    </div>
    </Container>
    </>
  )
}

export default Blogs

const Container = styled.div`
.searchBox{
    height: 50px;
    width: 60%;
    @media only screen and (max-width: 760px) {
        width: 100%
     
    }
   
}
.cardBox{
   
    margin: auto;
}
     
`;