

// import React, { useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import NavbarAd from './NavbarAd'
// import Sidebar from './Sidebar'
// import SiderbarMob from './SiderbarMob'

// function AppBlog() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     formData.append("category", category);
//     formData.append("image", image);

//     try {
     
//       await axios.post("http://localhost:9000/api/auth/blogs", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Blog added successfully");
      
//       // Clear the form fields
//       setTitle('');
//       setContent('');
      
//       setCategory('');
//        // Reset the file input by key
//        document.getElementById('imageInput').value = '';
//        setImage(null);
//     } catch (error) {
//       console.error("Error adding blog:", error.message);
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <Wrapper>
//       <NavbarAd/>
//        <div className="container-fluid">
//          <div className="row mx-0 justify-content-center mt-2">
//            <div className="col-lg-1" id='nav1'>
//               <Sidebar/>
//            </div>
//            <div className="col-lg-1" id='nav2'>
//               <SiderbarMob/>
//            </div>
//            <div className="col-lg-11">
//                <div className="container">
//                <div className="row">
//            <div className="col-lg-3"></div>
//            <div className="col-lg-4 px-lg-2 px-xl-0 px-xxl-3">
//         <form onSubmit={handleSubmit} class="w-100 rounded-1 p-4 border bg-white">
//         <div className="Add d-flex justify-content-center">
//         <h2>Add Blog</h2>
//       </div>
//       <label class="d-block mb-4">
//         <span class="form-label d-block">Tittle</span>
//         <input
//           required
//           name="title"
//           type="text"
//           class="form-control"
//           placeholder="Add Tittle"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </label>

//       <label class="d-block mb-4">
//         <span class="form-label d-block">Categary</span>
//         <select
//           required
//           name="categary"
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           class="form-select"
//         >
//           <option>Categary-Type</option>
//           <option>Categary-1</option>
//           <option>Categary-2</option>
//           <option>Categary-3</option>
//           <option>Categary-4</option>
//           <option>Categary-5</option>
//         </select>
//       </label>

//       <label class="d-block mb-4">
//         <span class="form-label d-block">Content</span>
//         <textarea
//           name="content"
//           class="form-control"
//           rows="6"
//           placeholder="Leave Contant hear..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         ></textarea>
//       </label>

//       <label class="d-block mb-4">
//         <span class="form-label d-block">Select Image</span>
//         {/* <input
//           required
//           name="image"
//           class="form-control"
//           type="file"
//           accept="image/*"
//            id="imageInput"
//           onChange={handleImageChange}
//         /> */}
//         <input
//   required
//   name="image"
//   class="form-control"
//   type="file"
//   accept="image/*"
//   id="imageInput"
//   key={image ? 'hasImage' : 'noImage'}
//   onChange={handleImageChange}
// />

//       </label>

//       <div class="mb-3 text-center">
//         <button type="submit" class="btn btn-primary px-5 rounded-3">
//           Submit
//         </button>
//       </div>
//     </form>
//               </div>
//               <div className="col-lg-5">

//               </div>
//               </div></div>
//            </div>
//           </div>
//         </div>
    
//     </Wrapper>
//   );
// }

// export default AppBlog;

// const Wrapper = styled.div`

//  .container{
//      margin-top: 6rem;
//      margin-bottom: 2rem;
//  }
//  #sider{

//  }
//  #nav1{
//      display: block;
//      @media screen and (max-width: 768px) {

//      display: none;

//    }
//  }
//    #nav2{
//      display: none;
//      @media screen and (max-width: 768px) {

//     display: block;

//   }
// }

// `