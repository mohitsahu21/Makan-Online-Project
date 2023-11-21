import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";


function SingleBlog() {
    const [isScrolled, setIsScrolled] = useState(false);
  return (
    <>
    <Container>
    <Navbar isScrolled={isScrolled}/>
    <div className="container mt-5">
              <div className="row p-4 heading">
                  <div className="col-12 text-center mt-4">
                  <p className="card-text d-inline p-4"><span className="fs-5"><BiCategoryAlt /></span> Selling a home</p>
                      <h1 className="">7 Home Staging Secrets: Lighting Can Make All The Difference</h1>
                      <p className="card-text"><small className="text-body-secondary"> <span className="fs-5"><CgCalendarDates /></span>  AUGUST 24, 2022</small></p>
                  </div>
              </div>

                  <div className="row mt-4 ">
                      <div className="col-12">
                        <img  className="img-fluid images"  src="https://www.homes.com/blog/wp-content/uploads/2019/02/Hosue-with-pool-760x428.jpg"  />
                         

                      </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                    <h4 className="subtitle mt-4">1. What Do You Use the Room For? </h4>
                    <p className="Content text-secondary lh-lg">As you contemplate where to add lighting within your home, consider each space’s utility first: how much light does a person need to make this area functional? For example, your kitchen probably has overhead lighting built in, but focused task lighting can brighten it further and make cooking simpler and safer. <br/>
                    <br/>
                    Consider adding a lighting system underneath your cabinets, should the space need a brighter glow. The same goes for the bathroom, where primping happens. A bright light over or around the mirror can transform a dark, gloomy bathroom into a functional place to get ready.
                    </p>

                    <h4>2. Modernize Light Fixtures </h4>
                    <p className="text-secondary lh-lg">As potential buyers peruse your home, they’re sure to look at where the light’s coming from and evaluate those fixtures, too. You might think an old fixture isn’t something you have to fix. A new homeowner can swap it out for something that suits their tastes, right? This is true, but it could affect your bottom line if the person buying your home knows they have to update the fixtures.
                    <br/>  <br/>

So, go ahead and swap out any chandelier or fixture that feels old-fashioned. You should also make sure every bulb works, whether it’s part of a dangling lamp or a simple recessed bulb. Buyers will want to know how the lighting looks in every area they enter. If a bulb is out, this could risk the sale of the home.
                    
                    Consider adding a lighting system underneath your cabinets, should the space need a brighter glow. The same goes for the bathroom, where primping happens. A bright light over or around the mirror can transform a dark, gloomy bathroom into a functional place to get ready.
                    </p>

                    


                    </div>
                  </div>

    </div>
    </Container>
    </>
  )
}

export default SingleBlog

const Container = styled.div`

 .heading{
    border-bottom: 1px solid #d8d2d2;

 }
.images{
    @media only screen and (min-width: 768px) {
        width: 1160px;
        height: 462px;
        border-radius: 10px;
     
    }

}

`;