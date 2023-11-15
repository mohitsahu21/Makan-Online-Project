import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Search from "../components/Search";
import RecentlyPosted from "../components/RecentlyPosted";
import Suggestions from "../components/Suggestions";
import MostViewed from "../components/MostViewed";
import Poshhouse from "../components/Poshhouse";
import Pricedrop from "../components/Pricedrop";
import Luxuaryhouse from "../components/Luxuaryhouse";
import Navbar from "../components/Navbar";
export default function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Wrapper>
      <div>
        <div className="container-fluid px-0">
          <Navbar isScrolled={isScrolled} />
          <div className="bannerdiv">
            <Banner />
          </div>

          <Search />
          
          <section className="mx-2">
            <div className="tab-content" id="categoryTab">
              <div
                className="tab-pane fade show active"
                id="house-tab-pane"
                role="tabpanel"
                aria-labelledby="houseTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="plot-tab-pane"
                role="tabpanel"
                aria-labelledby="plotTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="commercial-tab-pane"
                role="tabpanel"
                aria-labelledby="commercialTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 1) 0%,
  //   rgba(0, 0, 0, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // For All Screens
  .nav-tabs {
    border-bottom: none; /* Remove the bottom border */
  }
  .nav-tabs .nav-item .nav-link {
    border: none;
    color: black;
  }
  .nav-tabs .nav-item .nav-link.active {
    color: #712cf9;
    font-weight: bold;
  }

  #search-box {
    border: none;
  }
  #search-box:focus {
    outline: none;
  }

  #mySelect {
    outline: 0px;
    border: 0px;
  }
  #budget {
    outline: 0px;
    border: 0px;
  }
  // -----------------------End------------------------------
  // For Different screens

  .container-fluid {
    @media only screen and (max-width: 768px) {
      padding: 2px;
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

  .bannerdiv {
    position: relative;
  }
`;
