import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../NavbarAd'
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import ContactUsModel from "../SingleProperty/ContactUsModel";
import SideBlog from "../SingleProperty/SideBlog";
import RelatedProperty from "../SingleProperty/RelatedProperty";


function SingleBlog() {
    const [isScrolled, setIsScrolled] = useState(false);
   

  return (
    <>
    <Container>
    <Navbar isScrolled={isScrolled} />
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 mt-4">
            <small> <span className="text-muted">All You Need To Know About 1596 Sq.Ft. 3 BHK Residential Independent House </span></small>
                <h3 className="mt-3">
                1596 Sq.Ft. 3 BHK Residential Independent House / Villa for Sale in Katara Hills
                </h3>
                <div className="d-flex gap-3 justify-content-start"><span className="text-muted "><FaLocationDot/> Katara Hills,Bhopal</span>   <h4 className="me-2 text-info"><FaRupeeSign /> 2,49,500</h4>
              </div>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.homes.com/listings/116/9760447643-035979161/267-lincoln-ave-new-rochelle-ny-primaryphoto.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.homes.com/listings/116/8860447643-035979161/267-lincoln-ave-new-rochelle-ny-buildingphoto-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.homes.com/listings/116/3960447643-035979161/267-lincoln-ave-new-rochelle-ny-buildingphoto-4.jpg" className="d-block w-100" alt="..."/>
    </div>
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
                   <span className="fw-semibold">RP230623-152218-1023</span>
                </div>
                <div className="col-4">
                <span className="d-block">Type</span>
                    <p className="fw-semibold">Residential Independent House / Villa</p>
                </div>
                <div className="col-4">
                <span className="d-block">Total Room</span>
                    <p className="fw-semibold">3</p>
                    </div>
                    <div className="col-4">
                    <span className="d-block">Salable Area</span>
                    <span className="fw-semibold">1596 Sq.Ft.</span>
                </div>
                <div className="col-4">
                <span className="d-block">City</span>
                    <p className="fw-semibold">Bhopal</p>
                </div>
                <div className="col-4">
                <span className="d-block">Location</span>
                    <p className="fw-semibold">Katara Hills</p>    
                </div>
                <div className="col-4">
                <span className="d-block">Facing</span>
                    <p className="fw-semibold">East</p>
                    </div>
                    <div className="col-4">
                    <span className="d-block">Furnishing</span>
                    <span className="fw-semibold">Semi Furnished</span>
                </div>
                <div className="col-4">
                <span className="d-block">Possession Status</span>
                    <p className="fw-semibold">Immediately</p>
                </div>
                <div className="col-4">
                <span className="d-block">Transaction</span>
                    <p className="fw-semibold">Resale</p>    
                </div>

              </div>
              <h5 className="mt-3">ABOUT PROPERTY</h5>
              <p className="text-muted about-property">
              3 BHK Residential House - 1596 Sq-ft For Sale Katara Hills, Bhopal. More Detail: 3Beds, 3Baths, 2Balconies, Semi-Furnished Carpet Area - 840 sqft ₹5,714/sqft Transaction Type - Resale Status - Ready to Move Additional Rooms - 1 Study Room Facing - East Furnished Status - Semi-Furnished Type Of Ownership - Freehold Age Of Construction - 5 to 10 years Price Breakup - ₹48 Lac Address - Fortune Soumya Atlantis, Katara Hills, Bhopal, Madhya Pradesh Furnishing - Semi-Furnished Type of Ownership - Freehold Overlooking - Garden/Park, Main Road Age of Construction - 5 to 10 years Additional Rooms - Puja Room, Study. For More Details About this Property : Call - 8827795555, 7974789284, 7067217769 Mail ID - makaanonline21@gmail.com
              </p>
              <div className="row">
                <div className="col-12 special-highlights">
                <h5 className="mt-3">SPECIAL HIGHLIGHTS :</h5>

                                  <ul className="list p-0">
                                      <li><p><PiArrowFatLineRightFill /> Good No. of Common/Visitor Parking</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Main Road Facing</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> 24 X 7 working</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Good Ceiling Height</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Good Natural Light in the unit</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Attractive entrance gate</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Secured compound wall</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Gated community</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Immediate possession</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Peaceful & Pollution free environment.</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> 24/7 Water Supply</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Environment Clearance Available</p>  </li>

                                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 recommended">
                <h5 className="mt-3">RECOMMENDED :</h5>
                <ul className="list p-0 ">
                                      <li><p><PiArrowFatLineRightFill />  Good No. of Common/Visitor Parking</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> Main Road Facing</p>  </li>
                                      <li><p><PiArrowFatLineRightFill /> 24 X 7 working</p>  </li>
                                      

                                  </ul>


                                 
                </div>
              </div>

              <div className="row other-feature">
                <div className="col-12">
                <h5 className="mt-5">OTHER FEATURE :</h5>
                <div className="row mt-3">
                <div className="col-4">
                    <span className="d-block">Carpet Area</span>
                    <span className="fw-semibold">840 Sq.Ft.</span>
                </div>
                <div className="col-4">
                <span className="d-block">Bathromm</span>
                    <p className="fw-semibold">3</p>
                </div>
                <div className="col-4">
                <span className="d-block">Age Of Property</span>
                    <p className="fw-semibold">5-10 years</p>
                    </div>
                    </div>
                    <div className="col-4">
                <span className="d-block">Parking</span>
                    <p className="fw-semibold">1</p>
                    </div>
                                    
                </div>
              </div>

              <div className="row ">
                <div className="col-12 amenities">
                <h5 className="mt-5">AMENITIES :</h5>
                <div className="row mt-3">
                <div className="col-4">
                <p><PiArrowFatLineRightFill />  Balcony</p>
                    
                </div>
                <div className="col-4">
                <p><PiArrowFatLineRightFill /> Entry Gate</p>
                    
                </div>
                <div className="col-4">
                <p><PiArrowFatLineRightFill /> 24/7 Security</p>
                   
                    </div>
                    </div>
                    <div className="col-4">
                    <p><PiArrowFatLineRightFill />  Activity Area</p>
                    
                    </div>
                                    
                </div>
              </div>

              <div className="row ">
                <div className="col-12 ">
                <h5 className="mt-5">LOCATION</h5>
                <div className="map-container border border-primary rounded mt-3">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.179981810829!2d79.92040930961065!3d23.163630310964717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGURU%20INFO%20SYSTEMS-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%7CBest%20Software%20company%20in%20jabalpur%7CIT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1700317566925!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  )
}

export default SingleBlog

const Container = styled.div`

.carousel-item{
    @media only screen and (min-width: 992px) {
        height: 80vh;
    img{
      height: 100%;
        
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