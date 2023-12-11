// import React from "react";
// import styled from "styled-components";

// export default function () {
//   return (
//     <div>
//       <Wrapper>
//         <section>
//           <div className="container-fluid mb-4">
//             <div className="border border-1 rounded py-4 my-2">
//               <h1 className="text-center fw-bold" id="search-heading">
//                 Find a home you'll love
//               </h1>
//               <div className="tabs-container pt-2">
//                 <ul
//                   className="nav nav-tabs d-flex justify-content-center"
//                   id="categoryTab"
//                   role="tablist"
//                 >
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link active"
//                       id="houseTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#house-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="house-tab-pane"
//                     >
//                       House
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link"
//                       id="plotTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#plot-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="plot-tab-pane"
//                     >
//                       Plots
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link"
//                       id="commercialTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#commercial-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="commercial-tab-pane"
//                     >
//                       Commercial
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <div className="search-container row justify-content-center mt-2">
//                 <div className="main col-lg-6 col-md-8 col-10 border border-1 rounded-2 d-flex justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <i
//                       class="bi bi-geo-alt-fill fs-5 px-2"
//                       style={{ color: "red" }}
//                     ></i>
//                     <input
//                       type="text"
//                       id="search-box"
//                       className=""
//                       placeholder="Enter City,Location,Project"
//                     />
//                   </div>
//                   <select className="w-auto px-3 py-1 mx-2" id="mySelect">
//                     <option value="Flat+1" selected>
//                       Flat+1
//                     </option>
//                     <option value="Commercial">Commercial</option>
//                     <option value="Plots">Plots</option>
//                   </select>
//                   <div className="d-flex align-items-center">
//                     <i
//                       class="bi bi-currency-rupee fs-5"
//                       style={{ color: "red" }}
//                     ></i>
//                     <select
//                       className="w-auto px-3 py-1 mx-2"
//                       id="budget"
//                       placeholder="Budget"
//                     >
//                       <option selected>Budget</option>
//                       <option value="Flat+1">Flat+1</option>
//                       <option value="Commercial">Commercial</option>
//                       <option value="Plots">Plots</option>
//                     </select>
//                   </div>
//                   <button className="btn btn-danger px-3 fs-5">Search</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Wrapper>
//     </div>
//   );
// }

// const Wrapper = styled.div`
//   .search-container .main {
//     padding: 10px;
//     @media screen and (max-width: 768px) {
//       padding: 5px;
//     }
//   }
//   #search-heading {
//     @media screen and (max-width: 620px) {
//       font-size: 15px;
//       text-align: center;
//     }
//     @media only screen and (min-width: 620px) and (max-width: 768px) {
//       font-size: 30px;
//       text-align: center;
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//       font-size: 35px;
//     }
//     @media screen and (min-width: 1024px) and (max-width: 1600px) {
//       font-size: 40px;
//     }
//   }
//   input#search-box {
//     width: 300px;
//     @media screen and (max-width: 620px) {
//       width: 250px;
//     }
//     @media only screen and (min-width: 620px) and (max-width: 768px) {
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//     }
//     @media screen and (min-width: 1024px) and (max-width: 1600px) {
//     }
//   }

//   h1 {
//     font-family: "Playpen Sans", cursive;
//   }
// `;



// import React from "react";
// import styled from "styled-components";

// export default function () {
//   return (
//     <div>
//       <Wrapper>
//         <section>
//           <div className="container-fluid mb-4">
//             <div className="border border-1 rounded py-4 my-2">
//               <h1 className="text-center fw-bold" id="search-heading">
//                 Find a home you'll love
//               </h1>
//               <div className="tabs-container pt-2">
//                 <ul
//                   className="nav nav-tabs d-flex justify-content-center"
//                   id="categoryTab"
//                   role="tablist"
//                 >
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link active"
//                       id="houseTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#house-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="house-tab-pane"
//                     >
//                       House
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link"
//                       id="plotTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#plot-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="plot-tab-pane"
//                     >
//                       Plots
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link"
//                       id="apartmentTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#apartment-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="apartment-tab-pane"
//                     >
//                       Apartment
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className="nav-link"
//                       id="villaTab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#villa-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="villa-tab-pane"
//                     >
//                       Villa
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <div className="search-container row justify-content-center mt-2">
//                 <div className="main col-lg-6 col-md-8 col-10 border border-1 rounded-2 d-flex justify-content-between" id="main-col">
//                   <div className="row " id="inner-col">
//                     <div className="col-lg-4" id="res1">
                     
                        
//                   <div className="d-flex align-items-center">
                 
//                    <i
//                       class="bi bi-geo-alt-fill fs-5 px-2"
//                       style={{ color: "red" }}
//                     ></i>
                  
//                     <input
//                       type="text"
//                       id="search-box"
//                       className=" border rounded-5"
//                       placeholder="Enter City,Location,Project"
//                     />
//                   </div>
                  
//                   </div>
//                   <div className="col-lg-2" id="res2">
//                   <select className=" px-2 py-1 mx-4 border rounded-5" id="mySelect">
//                     <option value="Flat+1" selected>
//                       Flat+1
//                     </option>
//                     <option value="Commercial">Commercial</option>
//                     <option value="Plots">Plots</option>
//                   </select></div>
//                   <div className="col-lg-2 align-items-center " id="res3">
                    
//                     <select
                     
//                       className=" px-3 py-1 border rounded-5"
//                       id="budget"
//                       placeholder="Budget"
//                     >
//                       <option selected>Budget</option>
//                       <option value="Flat+1">Flat+1</option>
//                       <option value="Commercial">Commercial</option>
//                       <option value="Plots">Plots</option>
//                     </select>
//                   </div>
//                   <div className="col-lg-2 align-items-center " id="res3">
                    
//                     <select
                     
//                       className=" px-3 py-1 border rounded-5"
//                       id="budget"
//                       placeholder="Property"
//                     >
//                       <option selected>Rent</option>
//                       <option value="Flat+1">Buy</option>
//                     </select>
//                   </div>
//                   <div className="col-lg-2" id="res4">
//                   <button className="btn btn-danger px-3 fs-6" id="btnsearch">Search</button></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Wrapper>
//     </div>
//   );
// }

// const Wrapper = styled.div`
//   .search-container .main {
//     padding: 10px;
//     @media screen and (max-width: 768px) {
//       padding: 5px;
      
//     }
//   }
//   #search-heading {
//     @media screen and (max-width: 620px) {
//       font-size: 15px;
//       text-align: center;
//     }
//     @media only screen and (min-width: 620px) and (max-width: 768px) {
//       font-size: 30px;
//       text-align: center;
//     }
//     @media screen and (min-width: 768px) and (max-width: 1024px) {
//       font-size: 35px;
//     }
//     @media screen and (min-width: 1024px) and (max-width: 1600px) {
//       font-size: 40px;
//     }
//   }
//   input#search-box {
//     width: 300px;
//     height: 2.1rem;
//     @media screen and (max-width: 768px) {
//       width: 310px;

//     }
  
//   }

//   h1 {
//     font-family: "Playpen Sans", cursive;
//   }
//   #btnsearch{
//     margin-left: 1rem;
//     width: 85%;
//      border-radius: 5rem;
//      height: 2.3rem;
//      font-weight: 500;

     
//     @media screen and (max-width: 768px) {
//     margin-left: 2rem;
//     width: 85%;
//      border-radius: 5rem;
//      height: 2.6rem;
//     }
//   }
//   #main-col{
//     width: 60rem;
//     @media screen and (max-width: 768px) {
//       width: 23.5rem
      
//     }
//     @media screen and (min-width: 1024px) and (max-width: 1600px) {
//       width: 60rem;
//     }
//   }
//   #inner-col{
//     @media screen and (max-width: 768px) {
//       gap: 1rem;
//     }
//   }
//   #res1{
//     @media screen and (max-width: 768px) {
//       margin-left: 0rem;
//     }
//   }
//   #res2{
//     @media screen and (max-width: 768px) {
//       margin-left: 0.6rem;
//     }
//   }
//   #res3{
    
//     @media screen and (max-width: 768px) {
//       margin-left: 2.3rem;
//     }
//   }
//   #budget{
//     margin-right: 0.5rem;
//     margin-left: 0.5rem;
//     background-color: white;
//     @media screen and (max-width: 768px) {
//       margin-left: -0.3rem;
//       width: 19.5rem;
//     }
//   }
//   #mySelect{
   
//     @media screen and (max-width: 768px) {
//       background-color: white;
//       width: 19.5rem;
//       margin-left: 2rem;
//     }
//   }


// `;


import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import CarouselPlaceholder from './CarouselPlaceholder';
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";


const SearchModel = () => {
    const [properties,setProperties] = useState(null);
    const [loading, setLoading] = useState(true);
    const [propertiesImages, setPropertiesImages] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [propertyFor,setPropertyFor] = useState("");
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
        const response = await axios.get('http://localhost:4000/api/property/getAllProperty');
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
        const response = await axios.get('http://localhost:4000/api/property/getAllPropertyImages');
        setPropertiesImages(response.data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    getAllPropertiesImages();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const isSearchTermEmpty = searchTerm.trim() === "";
  // const isPropertyTypeSelected = propertyType !== "Property Type";
  const isPropertyForSelected = propertyFor !== "Select Property For Buy/Rent";
  // const isPropertyBudgetSelected = propertyBudget !== "Budget";


  let filteredProperties;
  if(!isSearchTermEmpty ){
     filteredProperties = properties?.data.filter((property) =>{
        const includesSearchTerm = isSearchTermEmpty || property.property_name.toLowerCase().includes(searchTerm.toLowerCase());
    // const matchesPropertyType = isPropertyTypeSelected ? property.property_type.toLowerCase() === propertyType.toLowerCase() : true;
    const matchesPropertyFor = isPropertyForSelected ? property.property_for.toLowerCase() === propertyFor.toLowerCase() : true;
    // const matchesPropertyBudget = isPropertyBudgetSelected ? property.price <= Number(propertyBudget) : true;

    return includesSearchTerm  && matchesPropertyFor ;
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

  <div className="search-container row justify-content-center mt-2 ">
  <div className="main col-lg-6 col-md-8 col-10 border border-1 rounded-2 d-flex justify-content-between" id="main-col">
    <div className="row " id="inner-col">
      <div className="col-lg-4" id="res1">
       
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
        placeholder="Enter Project"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
    </div>
    </form>
    
    </div>
    {/* <div className="col-lg-3" id="res2">
    <select className="px-2 py-1 mx-4 border rounded-5" id="mySelect"  onChange={(e) => setPropertyType(e.target.value)}>
      <option  selected>
        Property Type
      </option>
      <option value="house">House</option>
      <option value="villa">Villa</option>
      <option value="plot">Plot</option>
      <option value="flat">Flat</option>
      <option value="land">Land</option>
      <option value="farmLand">Farm Land</option>
      <option value="farmHouse">Farm House</option>
      <option value="commercial">Commercial</option>
    </select></div> */}
    <div className="col-lg-3" id="res2">
    <select className=" w-auto px-3 py-1 mx-4" id="mySelect" onChange={(e) => setPropertyFor(e.target.value)}>
      <option  selected>
       Select Property For Buy/Rent
      </option>
      <option value="sale">Buy</option>
      <option value="rent">Rent</option>
    
    </select></div>
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
    <div className="col-lg-2" id="res4">
    <button className="btn btn-danger px-3 fs-5" id="btnsearch" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {
            
           
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
    
{/* 
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
                  <a href={/property/${property.id}} target='blank'>
                    <img src={imageSrc ? imageSrc : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1701323109~exp=1701326709~hmac=da85cae6601708a5416a585b78ba630517ba8a0b698f72df228ae5ae10f58c58&w=900" } className="card-img-top" alt={Property ${property.id}} />
                  </a>
                  <div className="card-body address">
                    <p className="card-text d-inline">
                      <span className="fs-5"><BiCategoryAlt /></span> {property.property_address}
                    </p>
                    <a href={/property/${property.id}} target='blank' style={{ textDecoration: 'none' }}>
                      <h5 className="card-title mt-2">{property.property_name}</h5>
                    </a>
                    <h5 className="card-text"><FaRupeeSign />{property.price}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <span className="fs-5"><CgCalendarDates /></span> {property.created_at}
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
    )} */}
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
      width: 310px;

    }
  
  }

  h1 {
    font-family: "Playpen Sans", cursive;
  }
  #btnsearch{
    margin-left: 16rem;
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
  }
  #main-col{
    width: 60rem;
    @media screen and (max-width: 768px) {
      width: 23.5rem
      
    }
    @media screen and (min-width: 1024px) and (max-width: 1600px) {
      width: 60rem;
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
    @media screen and (max-width: 768px) {
      margin-left: 0.6rem;
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