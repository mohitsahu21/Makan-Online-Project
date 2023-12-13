// import React from "react";
// import styled from "styled-components";
// import NavbarAd from "./NavbarAd";
// import SingleProperty from "./PropertyAd";
// import PropertyAd from "./PropertyAd";
// import Sidebar from "./Sidebar";
// import SiderbarMob from "./SiderbarMob";

// export default function AllProperties() {
//   return (                                              
//     <Wrapper>
//       <NavbarAd/>
// <div className="container-fluid">
//   <div className="row">
//   <div className="col-lg-2" id='nav1'>
//                <Sidebar/>
//             </div>
//             <div className="col-lg-2" id='nav2'>
//                <SiderbarMob/>
//             </div>
//     <div className="col-lg-10">
//       <div className="">
//         <h3 className="post-heading fw-semibold mb-3 ms-lg-3">All Properties</h3>
//         <div className="row  cardBox">
//           <div className="col-12  col-xl-4 mb-1 ">
//         <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//      <PropertyAd/>
//           </div>


//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>

        
      
//           <div className="col-12  col-xl-4 mb-1 ">
//         <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//      <PropertyAd/>
//           </div>


//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>

      
      
//           <div className="col-12  col-xl-4 mb-1 ">
//         <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//      <PropertyAd/>
//           </div>


//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>

//           <div className="col-12  col-xl-4 mb-1 ">
//       <PropertyAd/>
//           </div>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
 

      
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
  
// `;


import React, { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import styled from "styled-components";
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./responsive";
import CarouselPlaceholder from "./CarouselPlaceholder"
import { FaRupeeSign } from "react-icons/fa";
import NavbarAd from "./NavbarAd";
import Sidebar from "./Sidebar";
import SiderbarMob from "./SiderbarMob";


export default function PropertyType() {
 

  const [properties, setProperties] = useState(null);
  const [propertiesImages, setPropertiesImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectPropertyFor,setSelectPropertyFor] = useState('sale');

  const getAllProperties = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/property/getAllProperty/`);
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  }

  const getAllPropertiesImages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/property/getAllPropertyImages');
      setPropertiesImages(response.data);
    } catch (error) {
      console.error('Error fetching property images:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  }

  useEffect(() => {
    getAllProperties();
    getAllPropertiesImages();
  }, []);
  
  const filterProperties = () => {
    // Your filtering logic here based on searchTerm and selectedType
    // Update setFilteredProperties with the filtered result
    // For example, assuming properties.data is an array of properties
    const filteredResult = selectedType
    ? properties?.data.filter(
        (property) =>
          property?.property_type === selectedType &&
          property?.property_for === selectPropertyFor &&
          property?.property_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : properties?.data.filter((property) =>
        property?.property_for === selectPropertyFor &&
        property?.property_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  setFilteredProperties(filteredResult);
  }
  

  useEffect(() => {
    filterProperties();
  }, [searchTerm, selectedType, selectPropertyFor,properties]); // Trigger the filtering whenever searchTerm, selectedType, or properties change
  
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handlePropertyFor = (event) =>{
    setSelectPropertyFor(event.target.value)
  }

  console.log(properties);
  console.log(propertiesImages);
  console.log(filteredProperties)

  return (
    <Wrapper>
       
        
         <NavbarAd/>
         
       
      <div className="mb-4 mt-5 pt-5">
      
        
        

        {loading ? (
          // <p>Loading...</p>
              <CarouselPlaceholder/>
        ) : (

        // Render the component only if data is available
        
        properties && properties?.data.length > 0 ? (
            <div className="container-fluid">
              <div className="row">
              <h3 className="post-heading fw-semibold mb-3 ms-lg-3">
        <p className="text-uppercase text-center">Available Properties </p>
        </h3>

     
        <div className="d-flex justify-content-center">
            <form className="d-flex mt-4 justify-content-center searchBox ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
        <select
      className="form-select"
      aria-label="Property Type"
      onChange={handlePropertyFor}
    >
      <option value="sale">Sale</option>
      
      <option value="rent">Rent</option>

      {/* Add more property types as needed */}
    </select>
        <select
      className="form-select"
      aria-label="Property Type"
      onChange={handleTypeChange}
    >
      <option value="">All Types</option>
      <option value="house">House</option>
      <option value="villa">Villa</option>
      <option value="plot">Plot</option>
      <option value="flat">Flat</option>
      <option value="land">Land</option>
      <option value="farmLand">Farm Land</option>
      <option value="farmHouse">Farm House</option>
      <option value="commercial">Commercial</option>

      {/* Add more property types as needed */}
    </select>
    
      </form>
            </div>
              
              <div className="col-lg-2" id='nav1'>
               <Sidebar/>
            </div>
            <div className="col-lg-2" id='nav2'>
               <SiderbarMob/>
            </div>
            <div className="col-lg-10"> 
          <div className="row cardBox">
            
         
           
              
              {filteredProperties?.map((property) => {
                const matchingImages = propertiesImages?.data.filter(
                  (image) => image.property_id == property.id
                );
                const imageSrc = matchingImages && matchingImages.length  > 0  ? matchingImages[0].image : null;
                console.log(imageSrc)
                return (
                  <div className="col-lg-4 col-md-6 col-12 mb-4" key={property.id}>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                      <Link to={`/property/${property.id}`}>
                        <img src={imageSrc ? imageSrc : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1701323109~exp=1701326709~hmac=da85cae6601708a5416a585b78ba630517ba8a0b698f72df228ae5ae10f58c58&w=900" } className="card-img-top" alt={`Property ${property.id}`} />
                      </Link>
                      <div className="card-body address">
                        <p className="card-text d-inline">
                          <span className="fs-5"><BiCategoryAlt /></span> {property.property_address}
                        </p>
                        <Link to={`/property/${property.id}`} style={{ textDecoration: 'none' }}>
                          <h5 className="card-title mt-2">{property.property_name}</h5>
                        </Link>
                        <h5 className="card-text"><FaRupeeSign />{property.price}</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <span className="fs-5"><CgCalendarDates /></span> {property.created_at}
                            
                          </small>
                          
                        </p>
                        <button className="btn btn-success  btn-sm ">Edit</button>
      <button className="btn btn-danger mx-3 mx-md-1 btn-sm ">Delete</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            
          </div>
          </div>
          </div>
          </div>
        ):(
          // Display a message when no data is available
          <div className="no-data">
          <h5 className="text-center">Not available</h5>
          </div>
        )
        )}
      </div>
    </Wrapper>
  );
}



const Wrapper = styled.div`
.searchBox{
    height: 50px;
    width: 60%;
    @media only screen and (max-width: 760px) {
        width: 100%
     
    }
   
}
.address{
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
  
}
#nav1{
    display: block;
    
    @media screen and (max-width: 768px) {
   
    display: none;
    
  }
}
  #nav2{
    display: none;
    @media screen and (max-width: 768px) {
   
   display: block;
   
 }
   
  }
.post-heading {
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }
 h3 {
    font-family: "Playpen Sans", cursive;
  }
.card{
    border: none;
    margin: 1rem;
    
    
    
    img{
        border-radius: 10px;
        transition: 0.4s ease-in-out;
        cursor: pointer;
        height: 12rem;
        
        
       
        
    }
    img:hover{
             transform: scale(1.09);
        }
    
    .card-body{
        padding-left: 0;
        padding-right: 0;
        
      

    }
}
.no-data{
    height: 50vh;
}
    
`;

