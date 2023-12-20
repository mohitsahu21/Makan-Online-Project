import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import CarouselPlaceholder from './CarouselPlaceholder';
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";


const SearchModel = () => {
    const [properties,setProperties] = useState(null);
    const [loading, setLoading] = useState(true);
    const [propertiesImages, setPropertiesImages] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [propertyFor,setPropertyFor] = useState("sale");
    const [propertyBudget,setPropertyBudget] = useState("");


//     const getAllPropertiesImages = async () => {
//         try {
//           const response = await axios.get('http://localhost:4000/api/property/getAllPropertyImages');
//           setPropertiesImages(response.data);
//         } catch (error) {
//           console.error('Error fetching property images:', error);
//         } finally {
//           setLoading(false); // Set loading to false regardless of success or error
//         }
//       }

//   const getAllProperties = async () => {
//        try{
//           const response = await axios.get('http://localhost:4000/api/property/getAllProperty');

//           setProperties(response.data);
//        }
//        catch(error){
//         console.error('Error fetching properties:', error);

//        }
//        getAllPropertiesImages();
//   }


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllProperty');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    const getAllPropertiesImages = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
        setPropertiesImages(response.data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    getAllPropertiesImages();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const isSearchTermEmpty = searchTerm.trim() === "";
  const isPropertyTypeSelected = propertyType !== "";
  const isPropertyForSelected = propertyFor !== "Select Property For Buy/Rent";
  // const isPropertyBudgetSelected = propertyBudget !== "Budget";


  let filteredProperties;
  if(!isSearchTermEmpty || isPropertyForSelected){
     filteredProperties = properties?.data.filter((property) =>{
        const includesSearchTerm = isSearchTermEmpty || property?.property_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPropertyType = isPropertyTypeSelected ? property.property_type.toLowerCase() === propertyType.toLowerCase() : true;
    const matchesPropertyFor = isPropertyForSelected ? property?.property_for.toLowerCase() === propertyFor.toLowerCase() : false;
    // const matchesPropertyBudget = isPropertyBudgetSelected ? property.price <= Number(propertyBudget) : true;
    
    // Include the property address filtering
    const matchesPropertyAddress =
      isSearchTermEmpty ||
      property?.property_address.toLowerCase().includes(searchTerm.toLowerCase());
    return (includesSearchTerm || matchesPropertyAddress) && matchesPropertyFor && matchesPropertyType;
    // && matchesPropertyBudget && matchesPropertyType;

     }
    // property.property_name.toLowerCase().includes(searchTerm.toLowerCase());

  
  
)};
console.log(propertyFor);
console.log(propertyType);
console.log(propertyBudget)
 
// If search term is empty, set filteredProperties to an empty array

// const showZeroPropertyFound = isSearchTermEmpty && !loading;

 
  


  return (
    <Wrapper>
       
    <div className="search-container row justify-content-center mt-5 ">
    <div className="main col-lg-6 col-md-8 col-8 border border-1 rounded-2 d-flex justify-content-between" id="main-col">
      <div className="row " id="inner-col">
        <div className="col-lg-4 col-md-4" id="res1">
         
      <form>      
      <div className="d-flex align-items-center">
     
       <i
          className="bi bi-geo-alt-fill fs-5 px-2"
          style={{ color: "red" }}
        ></i>
      
        <input
          type="text"
          id="search-box"
          className="border rounded-5"
          placeholder="Enter Location Or Project"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
      </div>
      </form>
      
      </div>
  
      <div className="col-lg-2 col-md-2" id="res2">
      <select  className="form-select" onChange={(e) => setPropertyFor(e.target.value)} required>
        
        <option value="sale">Buy</option>
        <option value="rent">Rent</option>
      
      </select></div>
       <div className="col-lg-2 col-md-2" id="res2">
      <select
      className="form-select"
      aria-label="Property Type"
      onChange={(e) => setPropertyType(e.target.value)}
      
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

      
    </select>
    </div>
      {/* <div className="col-lg-2 align-items-center " id="res3">
        <i
          class="bi bi-currency-rupee fs-5"
          style={{ color: "red" }}
        ></i>
        <select
         
          className="w-auto px-3 py-1 "
          id="budget"
          placeholder="Budget"
          
          onChange={(e) => setPropertyBudget(e.target.value)}
        >
          <option selected>Budget</option>
          <option value="1000000">10 L</option>
          <option value="2500000">25 L</option>
          <option value="5000000">50 L</option>
          <option value="10000000">1 Cr</option> 
          <option value="any">Any</option>
        </select>
      </div> */}
      <div className="col-lg-2 col-md-2 " id="res4">
      <button className="btn btn-danger px-3 fs-5" id="btnsearch1" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {
         
             
            }}>Search</button></div>
      </div>
    </div>

    {/* model */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-fullscreen " role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title mx-auto" id="exampleModalLabel">
                    Total {filteredProperties?.length ? filteredProperties?.length: "0"} Property Found
                    </h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className='col-12'>
                  {/*  */}
                    <div className="mb-4">
      
      {/* <h3 className="post-heading fw-semibold mb-3 ms-lg-3">
      <p className="text-uppercase text-center">Available </p>
      </h3> */}
      

      {loading ? (
        // <p>Loading...</p>
            <CarouselPlaceholder/>
      ) : (

      // Render the component only if data is available
      
      filteredProperties  && filteredProperties?.length > 0 ? (
          <div className="container-fluid">
        <div className="row cardBox">
         
            
            {filteredProperties.map((property) => {
              const matchingImages = propertiesImages?.data.filter(
                (image) => image?.property_id == property.id
              );
              const imageSrc = matchingImages && matchingImages.length  > 0  ? matchingImages[0].image : null;
              console.log(imageSrc)
              return (
                <div className="col-lg-4 col-md-6 col-12 mb-4" key={property.id}>
                  <div className="card shadow p-3 mb-5 bg-white rounded">
                    <a href={`/property/${property.id}`} target='blank'>
                      <img src={imageSrc ? imageSrc : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1701323109~exp=1701326709~hmac=da85cae6601708a5416a585b78ba630517ba8a0b698f72df228ae5ae10f58c58&w=900" } className="card-img-top" alt={`Property ${property.id}`} />
                    </a>
                    <div className="card-body address">
                      <p className="card-text d-inline">
                        <span className="fs-5"><FaLocationDot /></span> {property.property_address}
                      </p>
                      <a href={`/property/${property.id}`} target='blank' style={{ textDecoration: 'none' }}>
                        <h5 className="card-title mt-2">{property.property_name}</h5>
                      </a>
                      <h5 className="card-text"><FaRupeeSign />{property.price}</h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <span className="fs-5"><CgCalendarDates /></span> posted on : {moment(property.created_at).fromNow()} 
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          
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
            
             
            
               <div className="d-flex justify-content-center gap-2">
                   
                 
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>

            </div>
                    
                    </div>
                 
                </div>
              </div>
            </div>
  </div>
  </Wrapper>
  )
}

export default SearchModel;

const Wrapper = styled.div`

.address{
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
  
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

.search-container .main {
    padding: 10px;
    @media screen and (max-width: 768px) {
      padding: 5px;
      
    }
  }
  #search-heading {
    @media screen and (max-width: 620px) {
      font-size: 15px;
      text-align: center;
    }
    @media only screen and (min-width: 620px) and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 35px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1600px) {
      font-size: 40px;
    }
  }
  input#search-box {
    width: 300px;
    height: 2.1rem;
    @media screen and (max-width: 768px) {
      width: 280px;

    }
  
  }

  h1 {
    font-family: "Playpen Sans", cursive;
  }
  #btnsearch1{
    margin-left: 11rem;
    width: 85%;
     border-radius: 5rem;
     height: 42px;
     font-weight: 500;

     
    @media screen and (max-width: 768px) {
    margin-left: 2rem;
    width: 85%;
     border-radius: 5rem;
     height: 2.6rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      
      margin-left: 2rem;
    width: 115%;
     border-radius: 5rem;
     height: 2.6rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1400px) {
      
      margin-left: 8rem;
    width: 115%;
     border-radius: 5rem;
     height: 2.6rem;
     
    }
  }
  #main-col{
    width: 60rem;
    @media screen and (max-width: 768px) {
      width: 90%
      
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 90%;
    }
    @media screen and (min-width: 1024px) and (max-width: 1600px) {
      width: 90%
    }
  }
  #inner-col{
    @media screen and (max-width: 768px) {
      gap: 1rem;
    }
  }
  #res1{
    @media screen and (max-width: 768px) {
      margin-left: 0rem;
      
    }
  }
  #res2{
    @media screen and (max-width: 767px) {
      margin-left: 2rem;
      width: 80%;

      
    }
  }
  #res3{
    
    @media screen and (max-width: 768px) {
      margin-left: 2.3rem;
    }
  }
  #budget{
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background-color: white;
    @media screen and (max-width: 768px) {
      margin-left: -0.3rem;
      width: 19.5rem;
    }
  }
  #mySelect{
   
    @media screen and (max-width: 768px) {
      background-color: white;
      width: 19.5rem;
      margin-left: 2rem;
    }
  }

    
`;