// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BlogList() {
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
//     <div>
//       <h2>Blog List</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//             <p>Category: {blog.category}</p>
//             {blog.image && <img src={`${blog.image}`} alt="Blog" />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BlogList;
