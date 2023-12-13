// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom';
// import { BiCategoryAlt } from 'react-icons/bi';
// import { CgCalendarDates } from 'react-icons/cg';

// function BlogAd({blog}) {
//   return (
//     <Wrapper>
//       <div className="card shadow p-3 mb-5 bg-white rounded">
//               <Link to="/single_blog">
//                 {" "}
//                 <img
//                   src={`${blog.image}`}
//                   className="card-img-top"
//                   alt="..."
//                 />{" "}
//               </Link>
//               <div className="card-body">
        
//         <p className="card-text d-inline"><span className="fs-5"><BiCategoryAlt /></span>  {blog.category}</p>
//         <Link to="/blog/single-blog" style={{textDecoration: 'none'}} >  <h5 className="card-title mt-2">{blog.title}</h5> </Link>
//       <p className="card-text">{blog.content}</p>
//       <p className="card-text"><small className="text-body-secondary"> <span className="fs-5"><CgCalendarDates /></span>  AUGUST 24, 2022</small></p>
//     </div>
//             </div>
//     </Wrapper>
//   )
// }

// export default BlogAd
// const Wrapper = styled.div`
    
//     h3 {
//     font-family: "Playpen Sans", cursive;
//   }
//   .card {
//     border: none;
//     margin: 1rem;
    

//     img {
//       border-radius: 10px;
//       transition: 0.4s ease-in-out;
//       cursor: pointer;
//     }
//     img:hover {
//       transform: scale(1.09);
//     }

//     .card-body {
//       padding-left: 0;
//       padding-right: 0;
//     }
//   }
// `