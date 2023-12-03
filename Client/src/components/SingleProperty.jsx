import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link , useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import ContactUsModel from "./ContactUsModel";
import SideBlog from "./SideBlog";
import RelatedProperty from "./RelatedProperty";
import axios from 'axios';


function SingleProperty() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);
    const [propertyImages, setPropertyImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  

  // Function for fullscreen the image
  const toggleFullScreen = () => {
    const element = document.getElementById("carousel-inner");
  
    const fullscreenChangeHandler = () => {
      setIsFullScreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
  
      // Check if zoomable image exists
      const image = document.querySelector(".zoomable-image");
      if (image) {
        image.classList.remove("zoomed-image");
      }
    };
  
    if (!isFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  
    // Add event listener for fullscreen change
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    document.addEventListener("mozfullscreenchange", fullscreenChangeHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      fullscreenChangeHandler
    );
    document.addEventListener("msfullscreenchange", fullscreenChangeHandler);
  
    // Add click event listener for zooming
    const image = document.querySelector(".zoomable-image");
    if (image) {
      image.addEventListener("click", () => {
        image.classList.toggle("zoomed-image");
      });
    }
  };
  

  
    // useEffect(() => {
    //   // Fetch property details using propertyId
    //   const fetchProperty = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:4000/api/property/getPropertyById/${propertyId}`);
    //       console.log(response.data);
    //       setProperty(response.data.data); // Set property in state
    //       setLoading(false); // Set loading to false
    //       // Handle the response data as needed
    //     } catch (error) {
    //       console.error('Error fetching property:', error);
    //       setLoading(false); // Set loading to false in case of an error
    //       // Handle errors
    //     }
    //   };
  
    //   fetchProperty();
    // }, [propertyId]);

    
  useEffect(() => {
    // Fetch property details and property images concurrently
    const fetchData = async () => {
      try {
        const [propertyResponse, imagesResponse] = await Promise.all([
          axios.get(`http://localhost:4000/api/property/getPropertyById/${propertyId}`),
          axios.get(`http://localhost:4000/api/property/getPropertyImagesById/${propertyId}`),
        ]);

        setProperty(propertyResponse.data.data);
        setPropertyImages(imagesResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        // Handle errors
      }
    };

    fetchData();
  }, [propertyId]);

  
  const iframeCode = property?.property_location;
  const srcRegex = /src="([^"]+)"/;
  const match = iframeCode?.match(srcRegex);

  // Declare srcValue here
  let srcValue;

  if (match) {
    // Assign the value to srcValue
    srcValue = match[1];
    console.log(srcValue);
  } else {
    console.error('No src attribute found in the iframe code.');
  }

  console.log(propertyImages)
  console.log(property)
 

  return (
    <div>
      {loading ? (
        // <p>Loading...</p>
        // placeholder when load the page
        <div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
      ) : (

    <>
    
    <Container>
    <Navbar isScrolled={isScrolled} />
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 mt-4">
            <small> <span className="text-muted">{`All You Need To Know About ${property?.property_name}`} </span></small>
                <h3 className="mt-3">
                {property?.property_name}
                </h3>
                <div className="d-flex gap-3 justify-content-start"><span className="text-muted "><FaLocationDot/> {property?.property_address}</span>   <h4 className="me-2 text-info"><FaRupeeSign /> {property?.price}</h4>
              </div>

           {/* carousel for property images */}

              <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    {propertyImages &&
      propertyImages.map((image, index) => (
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          key={index}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
  </div>
  <div className="carousel-inner" id="carousel-inner">
    {propertyImages &&
      propertyImages.map((image, index) => (
        <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={image.image} className="d-block img-fluid mx-auto zoomable-image" onClick={toggleFullScreen}  alt="..." />
         
        </div>
      ))}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>
        </div>

        <div className="row">
            <div className="col-12 col-lg-8 mt-5">
              
              <h5 className="">PROPERTY DETAILS</h5>
              <div className="row mt-3 property-detail">
                <div className="col-4">
                    <span className="d-block">Property Id</span>
                   <span className="fw-semibold">{property?.id}</span>
                </div>
                <div className="col-4">
                <span className="d-block">Type</span>
                    <p className="fw-semibold">{property?.property_type}</p>
                </div>
                <div className="col-4">
                <span className="d-block">Number of BHK</span>
                    <p className="fw-semibold">{property?.bhk}</p>
                    </div>
                    <div className="col-4">
                    <span className="d-block">New/Resale</span>
                    <span className="fw-semibold">{property?.new_resale}</span>
                </div>
                <div className="col-4">
                <span className="d-block">Structur</span>
                    <p className="fw-semibold">{property?.structure}</p>
                </div>
                <div className="col-4">
                <span className="d-block">Square Feet</span>
                    <p className="fw-semibold">{`${property?.square_ft} Sq.Ft.`}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Dimention</span>
                    <p className="fw-semibold">{property?.dimension}</p>
                    </div>
                    <div className="col-4">
                    <span className="d-block">Car Parking</span>
                    <span className="fw-semibold">{property?.car_parking}</span>
                </div>
                <div className="col-4">
                <span className="d-block">Year Built</span>
                    <p className="fw-semibold">{property?.year_built}</p>
                </div>
                <div className="col-4">
                <span className="d-block">Facing</span>
                    <p className="fw-semibold">{property?.facing}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Furnishing</span>
                    <p className="fw-semibold">{property?.furnishing}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Carpet Area</span>
                    <p className="fw-semibold">{property?.carpet_area}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Bathroom</span>
                    <p className="fw-semibold">{property?.bathroom}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Property On Floor</span>
                    <p className="fw-semibold">{property?.property_on_floor}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Flooring</span>
                    <p className="fw-semibold">{property?.flooring}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Age of Property</span>
                    <p className="fw-semibold">{`${property?.age_of_property} years`}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Parking</span>
                    <p className="fw-semibold">{property?.parking}</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Lift</span>
                    <p className="fw-semibold">{property?.lift}</p>    
                </div>

              </div>
              <h5 className="mt-3">ABOUT PROPERTY</h5>
              <p className="text-muted about-property">
              {property?.property_description}
              </p>
              <div className="row">
                <div className="col-12 special-highlights">
                <h5 className="mt-3">SPECIAL HIGHLIGHTS :</h5>

                        <ul className="list p-0">
                          {property?.service_lift_available == 1 && (<li><p><PiArrowFatLineRightFill /> Service Lift Available</p></li>)}
                          {property?.common_visitor_parking == 1 && (<li><p><PiArrowFatLineRightFill /> Good No. of Common/Visitor Parking</p></li>)}
                          {property?.main_road_facing == 1 && (<li><p><PiArrowFatLineRightFill /> Main Road Facing</p></li>)}
                          {property?.working_24_7 == 1 && <li><p><PiArrowFatLineRightFill /> 24 X 7 working</p>  </li>}
                          {property?.good_ceiling_height == 1 && (<li><p><PiArrowFatLineRightFill /> Good Ceiling Height</p></li>)}
                          {property?.good_natural_light == 1 && (<li><p><PiArrowFatLineRightFill /> Good Natural Light in the unit</p>  </li>)}
                          {property?.attractive_entrance_gate == 1 && (<li><p><PiArrowFatLineRightFill /> Attractive entrance gate</p>  </li>)}
                          {/* { property.(<li><p><PiArrowFatLineRightFill /> Secured compound wall</p>  </li>)} */}
                          {property?.gated_community == 1 && (<li><p><PiArrowFatLineRightFill /> Gated community</p>  </li>)}
                          {property?.immediate_possession == 1 && (<li><p><PiArrowFatLineRightFill /> Immediate possession</p>  </li>)}
                          {/* {property. ( <li><p><PiArrowFatLineRightFill /> Peaceful & Pollution free environment.</p>  </li>)} */}
                          {property?.landscape_garden == 1 && (<li><p><PiArrowFatLineRightFill /> Landscape Garden</p>  </li>)}
                          {property?.water_supply_24_7 == 1 && (<li><p><PiArrowFatLineRightFill /> 24/7 Water Supply</p>  </li>)}
                          {property?.bore_well_water_24_7 == 1 && (<li><p><PiArrowFatLineRightFill /> 24/7 Bore Well Water</p>  </li>)}
                          {property?.environment_clearance_available == 1 && (<li><p><PiArrowFatLineRightFill /> Environment Clearance Available</p>  </li>)}

                        </ul>
                </div>
              </div>

              <div className="row ">
                <div className="col-12 amenities">
                <h5 className="mt-5">AMENITIES :</h5>
                <div className="row mt-3">
             {property?.swimming_pool==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Swimming Pool</p>
                  
              </div>)}
              
             {property?.terrace==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Terrace</p>
                  
              </div>)}
              
             {property?.air_conditioning==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Air Conditioning</p>
                  
              </div>)}
              
             {property?.cable_tv==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill /> Cable TV</p>
                  
              </div>)}
              
             {property?.balcony==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill /> Balcony</p>
                  
              </div>)}
              
             {property?.internet==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill /> Internet</p>
                  
              </div>)}
              
             {property?.computer==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Computer</p>
                  
              </div>)}
              
             {property?.dishwasher==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill /> Dishwasher</p>
                  
              </div>)}
              
             {property?.near_green_zone==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Near Green Zone</p>
                  
              </div>)}
              
             {property?.near_temple==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Near Temple</p>
                  
              </div>)}
              
             {property?.entry_gate==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Entry Gate</p>
                  
              </div>)}
              
             {property?.activity_area==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  Activity Area</p>
                  
              </div>)}
             {property?.security_24_7==1 && ( <div className="col-4">
              <p><PiArrowFatLineRightFill />  24/7 Security</p>
                  
              </div>)}
              
            
              
                    </div>
                   
                                    
                </div>
              </div>

              <div className="row">
                <div className="col-12 recommended">
                <h5 className="mt-3">RECOMMENDED :</h5>
                        <ul className="list p-0 ">
                          {property?.long_term_investment == 1 && (<li><p><PiArrowFatLineRightFill />  Long term investment</p>  </li>)}
                          {property?.own_purpose == 1 && (<li><p><PiArrowFatLineRightFill />  Own purpose</p>  </li>)}
                          {property?.investment == 1 && (<li><p><PiArrowFatLineRightFill />  Investment</p>  </li>)}
                        </ul>


                                 
                </div>
              </div>

            

              

              <div className="row ">
                <div className="col-12 ">
                <h5 className="mt-5">LOCATION</h5>

                <div className="map-container border border-primary rounded mt-3">
              
                <iframe className="map" src={srcValue}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
               
                   </div>                 
                </div>
              </div>

             

            </div>
            <div className="col-12 col-lg-4 mt-5 ">
                
                <ContactUsModel/>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-12">
                        <h5 className="mb-3">Interesting Blogs</h5>
                       <SideBlog/>
                       <SideBlog/>
                       <SideBlog/>
                       <SideBlog/>
                       <SideBlog/>
                        
                    </div>
                </div>
               
        </div>
        </div>

         <div className="row mt-5">

               
                
                <RelatedProperty/>
               
                                    
              
        </div> 

    </div>
    </Container>
    </>
      )}
      </div>
  )
}

export default SingleProperty

const Container = styled.div`
/* CSS Styles for Zooming */
.zoomable-image {
  cursor: zoom-in;
  transition: transform 0.3s ease-in-out;
}

.zoomed-image {
  cursor: zoom-out;
  transform: scale(1.5); /* Adjust the scale factor for zoom level */
}

.carousel-inner{
  /* height: 100vh; */
  overflow: hidden;
  background-color: #eaebed;
}


.carousel-item{
    @media only screen and (max-width: 1025px) {
      
    img{
      
      /* width: 100%;
      height: 100%; */
      max-width: 100%;
      height: 70vh;
      
      
    }
     
    }  
    @media only screen and (min-width: 1025px) {
      
      img{
        object-fit: cover;
        /* width: 100%;
        height: 100%; */
        max-width: 150%;
        height: 100vh;
        
        
      }
       
      }
}
.list{
    list-style: none;
}

.map-container {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 0;
    padding-bottom: 56.25%; // 16:9 aspect ratio (adjust as needed)
  }

  .map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    .map-container {
      padding-bottom: 75%; // Adjust the aspect ratio for smaller screens
    }
  }
  .property-detail{
    font-size: small;
  }
  .special-highlights{
    font-size: 13px;
  }
  .about-property{
    font-size: 15px;
  }
  .recommended{
    font-size: 13px;
  }
  .other-feature{
    font-size: small;
  }
  .amenities{
    font-size: 13px;
  }
  


`;