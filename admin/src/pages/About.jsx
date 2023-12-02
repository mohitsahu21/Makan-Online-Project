import React from 'react'
import styled from 'styled-components'
import house from '../images/house.jpg'
import cull from '../images/cul1.cc3dc9f1.png'
import pretty from '../images/home.carousal-1.avif'
import Ownership from '../images/home.carousal-2.jpeg'
import honer from '../images/tm1.bbe99f34.png'
import Happy from '../images/mantra.1e357178.png'
import logo from '../images/logo.png'
import profile from '../images/dummy-profile.jpg'
import Navbar from "../components/Navbar";


function About() {
  return (
    <>
      <Container>
        <Navbar/>
        <div>
          <div className="mt-5 container-fluid">
            <div className="container-fluid" id="About">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 col mt-5 d-block">
                      <h1 className="About mt-5 d-flex  justify-content-start">About Us</h1>
                      <p>At makan.com, we understand that people everywhere are searching for a home to
                        call their own. A home is a cherished memory that lasts forever, where the walls
                        embrace memories, the ceilings shelter love and laughter, where the quiet corners
                        offer a much-needed pause and life itself becomes a reason to celebrate.</p>

                      <p>We want to make the journey as joyful as the moment when you finally find the
                        perfect home. So we begin by partnering with our customers from the start and
                        being there when it matters the most - right from online search to brokers to home
                        loans to paperwork to finally finding that perfect home. At makan.com, we help
                        you find joy.</p>

                      <h4>Our Vision</h4>

                      <p>Changing the way India experiences property.</p>

                      <h4>Our Mission</h4>

                      <p>To be the first choice of our consumers and partners in discovering, renting, buying, selling,
                        financing a home, and digitally enabling them throughout their journey. We do that with data,
                        design, technology, and above all, the passion of our people while delivering value to our
                        shareholders.</p>
                    </div>

                    <div className=" col-lg-6 col-sm-12 col-xxl-6 mt-5 ">
                      <img src={house} alt='House' className='main-img img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="container-fluid">
            <div className="container-fluid" id="Our-Value">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item ">
                    <div className='mission'>
                      <div className='row'>
                        <div className='col-7 col-sm-12 mission-2'>
                          <img src={cull} className=" w-100 " alt="Our-Vslue" />
                        </div>
                        <div className='house-mission col-lg-5'>
                          <h3>Our Mission</h3>
                          <p>We find our joy in breaking rules and making some of
                            our own. we are a team of enthusiastic game changers,
                            quiet geniuses and hands-on revolutionaries eager to
                            take on the world. We are helping india find not just
                            their perfect homes, but find their joy.</p>
                          <p>Click Out What Drive Us. </p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img src={pretty} className="d-block w-100" alt="Excellence" />
                  </div>
                  <div className="carousel-item">
                    <img src={Ownership} className="d-block w-100" alt="Ownership" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" container-fluid" >
            <div className="container-fluid" id="About">
              <div className="row">
                <div className="col-lg-12" >
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className='into-center'>
                        <div className="mantra">
                          <h3 className='spreading'>Is spreading joy your mantra too?</h3>
                          <pre>Shoot us an email at careers@makan.com
                            and we'll be happy to meet you</pre>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <img src={Happy} className="d-block w-100 h-80 mt-5" alt="happy House with Family" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" container-fluid">
            <div className="container-fluid Our" id="Our">
              <div className="row ceo-row">
                <div className="col-12">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="ceo row" >
                          <div className=" col-lg-6 mt-5">
                            <h2>The Team</h2>
                            <div className='row'>
                              <div className='ceo-pic col-lg-6 col-sm-12'>
                                <img src={profile} alt=" team" className='passport' />
                              </div>
                              <div className='col-lg-6 col-sm-12'>
                                <h5>Shubhanshu Jaiswal</h5>
                                <h6>Group Ceo</h6>
                              </div>

                            </div>
                            <p>A serial entrepreneur, Dhruv has started and successfully exited several
                              ventures across a wide spectrum of domains including education, mining
                              and fintech. Dhruv co-founded iTrust Financial Advisors, an online
                              financial advisory and distribution company which was bought by Karvy
                              Private Wealth.Prior to this, he was the CEO of General Electric’s (GE)
                              infrastructure business in India and also led the Institutional Sales
                              function for GE in India. </p>

                            <p>Dhruv holds a Bachelors and Masters degree in Materials Science and
                              Engineering from Northwestern and Stanford University respectively and
                              an MBA from Harvard Business School.</p>
                          </div>

                          <div className='col-lg-6  '>
                            <img src={honer} alt='House' className='pretty-house' />
                          </div>

                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='container-fluid'>
              <div className='container-fluid' id='Rea-Group'>
                <div className='row'>
                  <div className='rea col-lg-6 col-sm-12'>
                    <div className='Group'>
                      <h2 className='mt-5 '>A part of <i>REA</i> Group</h2>
                    </div>
                    <p>Makaan.com was acquired by REA India in May 2015, with a vision to establish a true "marketplace"
                      in real estate. With consumer ratings on a large number of sellers, credible listings data, and
                      real-time intelligence on property search, Makaan.com has quickly emerged as the preferred partner
                      for consumers looking to rent, buy or sell a home. Makaan.com offers its online consumers maximum
                      property options and has become one of the largest advertising platforms in online real estate in
                      India.
                    </p>
                  </div>

                  <div className='col-lg-6 col-sm-12 mt-5 re-group'>
                    <img src={logo} alt='logo' className='logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='container-fluid map-box'>
          <div className="row">

            <div className="col-lg-8 col-sm-12 first-child">
              <h3 className=" map-main">Find Us Hear</h3>
              <div className="map-container border border-primary rounded mt-3">
                <iframe className="map" title='makanonline' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.179981810829!2d79.92040930961065!3d23.163630310964717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGURU%20INFO%20SYSTEMS-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%7CBest%20Software%20company%20in%20jabalpur%7CIT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1700317566925!5m2!1sen!2sin" allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12 secand-child'>
              <h3>Makan.com</h3>
              <p>1815 Wright Town,
                Jabalpur, Madhya pradesh INDIA
                482002
                Phone:+91-7440992424
                Fax: +91-01X4-4866XXX</p>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}
export default About;

const Container = styled.div`
 body{
  overflow: hidden;
  margin:0;
  padding:0;
  border:Border-box;
  font-family: 'Open Sans', sans-serif;
  background-color:#ffcaca;
  font-weight:600;
}
h1{
    color:#ce3132;
    margin-left: 28px;
    margin-top: -35px;
  @media only screen and (max-width: 750px) {
    margin-left:20px;
 }
}

 h2{
    color:#ce3132;
    margin-left:156px;
    margin-top:-35px;
  @media only screen and (max-width: 750px) {
    margin-left:114px;
 }
  @media only screen and (min-width:751px )and (max-width:1024px)  {
    margin-left:70px;
  }
  @media only screen and (min-width:1600px) and (max-width: 3200px) {
    margin-top:15px;
    margin-left:460px;
    font-size:70px;
}
}

h3{
   color:#ce3132;
   display:flex;
   align-items:center;
   justify-content:center;
  @media only screen and (max-width: 750px) {
    font-size:20px;
  }
  @media only screen and (min-width:1600px) and (max-width: 3200px) {
    font-size:50px;
  }
}
h4{
   color:#ce3132;
   margin-top:16px;
   margin-left:25px;
  @media only screen and (max-width: 750px) {
    margin-top: 16px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1600px) {
    margin-bottom:-7px;
}
}
h5{
    color:#ce3132;
    margin-top:100px;
  @media only screen and (max-width: 750px) {
    margin-top: 15px;
    margin-left: 75px;
  }
  @media only screen and (min-width:751px )and (max-width:1000px)  {
    margin-top:10px;
    margin-left:60px;
  }
  @media only screen and (min-width:1001px )and (max-width:1024px)  {
    margin-top:100px;
    margin-left:30px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1600px) {
    margin-left: 38px;
}
  @media only screen and (min-width:1600px) and (max-width: 3200px) {
    font-size:40px;
    margin-top:240px;
    margin-left:-365px;
  }
}

h6{
   color:#ce3132;
   margin-left:22px;
  @media only screen and (max-width: 750px) {
    margin-left: 125px;
  }
  @media only screen and (min-width:751px )and (max-width:1024px)  {
    margin-left:80px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1600px) {
    margin-left: 60px
  }
  @media only screen and (min-width:1600px) and (max-width: 3200px) {
    font-size:30px;
    margin-left:-265px;
  }
}

p{
   color:gray;
   margin-top:25px;
   margin-left:25px;
  @media only screen and (max-width: 750px) {
    margin-top:2px;
    margin-left:20px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1600px) {
    margin-top: 10px;
  }
  @media only screen and (min-width:1600px) and (max-width: 3200px) {
    font-size:29px;
  }
}

pre{
   font-weight:600;
   font-family: 'Open Sans', sans-serif;
   color:gray;
  @media only screen and (max-width: 750px) {
    font-size:9px;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px){
      margin-top:25px;
      font-size:30px;
    }
}

.main-img{
  width: 725px;
  height: 576px;
  border-radius:25px;
  margin-bottom:50px;
  @media only screen and (max-width: 750px) {
    display:none;
  }
   @media only screen and (min-width:1023px )and (max-width:1025px)  {
    height:660px;
  }  
  @media only screen and (min-width:1600px) and (max-width:3200px){
    width:1560px;
    height:745px;
  }
}

.carousel-item{
  width:100%;
  height:500px;
  object-fit:cover;
@media only screen and (min-width:1600px) and (max-width:3200px){
  height:900px;
}
}
.into-center{
    display:grid;
    place-items:center;
    height:90vh;
  @media only screen and (max-width: 750px) {
    height:5vh;
  }
  @media screen and (min-width:751px) and (max-width:1025px){
    height:30vh;
  }
  @media screen and (min-width:1025px) and (max-width:1600px){
    height:70vh;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px){
    height:95vh;
  }
}

.passport{
     width:200px;
     height:200px;
     margin-left: 133px;
     margin-top: 19px;
  @media only screen and (max-width: 750px) {
     margin-left: 65px;
     margin-top: 5px;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px){
      margin-left:509px;
    }
  @media only screen and (min-width:751px )and (max-width:1024px)  {
    margin-left:31px;
  }
}
.pretty-house {
  @media only screen and (min-width:1600px) and (max-width:3200px){
    margin-left: 121px;
    width: 1000px;
    margin-top: 100px
    }
}
.logo{
    width:450px;
    display:grid;
    place-content:center;
    height:20vh;
    margin-left: 125px;
    margin-top: 25px;
  @media only screen and (max-width: 750px) {
    width: 200px;
    display: grid;
    place-content: center;
    margin-left: 50px;
    margin-top: 150px;
  }
  @media only screen and (min-width:751px )and (max-width:1024px)  {
    margin-top:0px;
    height:10vh;
  }

}
.Box{
  background-color:#FF7722;
}

.mission{
  background-color:#FF7722;
  object-fit:cover;
}

#Rea-Group{
  margin-top: 20px;
  margin-bottom: 100px;
  display:none;
}
.rea{
    display:grid;
    place-content:center;
    height:40vh;
  @media only screen and (max-width: 750px) {
    width: 300px;
    display: grid;
    place-content: center;
    margin-left: 28px;
    margin-top:25px ;
  }
}
.house-mission{
   display:grid;
   place-content:center;
   height:75vh;
}
.Box-2{
  margin-top:50px;
}
.ceo{
   background-color:#EDf2F0;
   object-fit:cover;
  @media only screen and (min-width:1600px) and (max-width:3200px){
      height:1000px;
    }
}
.map-box{
    width:97%;
    height:100%;
    background-color:#EDf2F0;
    margin-bottom:100px;
  @media only screen and (max-width:1024px){
    margin-top:25px;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px){
     margin-top:450px;
     height:1000px;
    }
  @media only screen and (max-width:750px){
      margin-top:25px;
    }
}
.map {
    width: 100%;
    height:99%;
    border-radius:15px;
    border:none;
}
.map-container {
      width:100%;
      height:25rem;
    @media only screen and (min-width:1600px) and (max-width:3200px){
      height:50rem;
    }

  }
.first-child{
      padding: 40px 0px 40px 20px;
  @media only screen and (max-width:768px) {
      padding: 40px 15px 40px 15px;
    }
  }

.secand-child{
     display:grid;
     place-content:center;
     height:80vh;
     border-radius:15px;
  @media only screen and (max-width:768px) {
      padding: 40px 15px 40px 15px;
      height:30vh;
    }
  @media only screen and (max-width:1024px) {
      height:30vh;
    }
  @media only screen and (min-width:1600px) and (max-width:3200px){
      height:90vh;
    }
}
#Our-Value{
  @media only screen and (max-width: 750px) {
    height:265px;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px){
      height:1000px;
    }
}
#Our{
  height:500px;
  @media only screen and (max-width: 750px) {
    margin-top:50px;
  }
}
.value{
    @media only screen and (max-width: 750px) {
    display:none;
    height:487px;
  }
}
.Group{
  @media only screen and (max-width: 750px) {
    margin-left:-93px;
  }
.ceo-row{
  @media only screen and (min-width:751px) and (max-width:1024px) {
    margin-top:25px;
  }
}
}
`;

