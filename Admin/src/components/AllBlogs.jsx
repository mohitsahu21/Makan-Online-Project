// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from "styled-components";
// import NavbarAd from "./NavbarAd";
// import BlogAd from "./BlogAd";
// import Sidebar from "./Sidebar";
// import SiderbarMob from "./SiderbarMob";

// export default function AllBlogs() {

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/api/auth/blogs'); // Replace with your actual endpoint
//       setBlogs(response.data); // Assuming the data is an array of blogs
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };
//   return (                                              
//     <Wrapper>
//       <NavbarAd/>
//   <div className="container-fluid">
//     <div className="row">
//     <div className="col-lg-2" id='nav1'>
//                <Sidebar/>
//             </div>
//             <div className="col-lg-2" id='nav2'>
//                <SiderbarMob/>
//             </div>
//       <div className="col-lg-10">
//          <div className="">
//         <h3 className="post-heading fw-semibold mb-3 ms-lg-3">All Blogs</h3>
//         <div className="row  cardBox">
//         {blogs.map((blog) => (
         
//           <div className="col-12  col-xl-4 mb-1 " key={blog.id}>
//           <BlogAd blog={blog}/>
//             </div>

//         ))}

         

         
//           </div>
//       </div>
//       </div>
//     </div>
//   </div>

     
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   .post-heading {
//     margin-top: 5rem;
//     @media only screen and (max-width: 768px) {
//       font-size: 20px;
//       text-align: center;
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//       font-size: 20px;
//     }
//   }
//   #nav1{
//     display: block;
//     @media screen and (max-width: 768px) {
   
//     display: none;
    
//   }
// }
//   #nav2{
//     display: none;
//     @media screen and (max-width: 768px) {
   
//    display: block;
   
//  }
   
//   }
//   img {
//       border-radius: 10px;
//       transition: 0.4s ease-in-out;
//       cursor: pointer;
//     }
//     img:hover {
//       transform: scale(1.09);
//     }

// `;
