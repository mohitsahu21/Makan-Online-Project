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



import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <div>
      <Wrapper>
        <section>
          <div className="container-fluid mb-4">
            <div className="border border-1 rounded py-4 my-2">
              <h1 className="text-center fw-bold" id="search-heading">
                Find a home you'll love
              </h1>
              <div className="tabs-container pt-2">
                <ul
                  className="nav nav-tabs d-flex justify-content-center"
                  id="categoryTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="houseTab"
                      data-bs-toggle="tab"
                      data-bs-target="#house-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="house-tab-pane"
                    >
                      House
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="plotTab"
                      data-bs-toggle="tab"
                      data-bs-target="#plot-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="plot-tab-pane"
                    >
                      Plots
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="apartmentTab"
                      data-bs-toggle="tab"
                      data-bs-target="#apartment-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="apartment-tab-pane"
                    >
                      Apartment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="villaTab"
                      data-bs-toggle="tab"
                      data-bs-target="#villa-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="villa-tab-pane"
                    >
                      Villa
                    </button>
                  </li>
                </ul>
              </div>
              <div className="search-container row justify-content-center mt-2">
                <div className="main col-lg-6 col-md-8 col-10 border border-1 rounded-2 d-flex justify-content-between" id="main-col">
                  <div className="row " id="inner-col">
                    <div className="col-lg-4" id="res1">
                     
                        
                  <div className="d-flex align-items-center">
                 
                   <i
                      class="bi bi-geo-alt-fill fs-5 px-2"
                      style={{ color: "red" }}
                    ></i>
                  
                    <input
                      type="text"
                      id="search-box"
                      className=" border rounded-5"
                      placeholder="Enter City,Location,Project"
                    />
                  </div>
                  
                  </div>
                  <div className="col-lg-2" id="res2">
                  <select className=" px-2 py-1 mx-4 border rounded-5" id="mySelect">
                    <option value="Flat+1" selected>
                      Flat+1
                    </option>
                    <option value="Commercial">Commercial</option>
                    <option value="Plots">Plots</option>
                  </select></div>
                  <div className="col-lg-2 align-items-center " id="res3">
                    
                    <select
                     
                      className=" px-3 py-1 border rounded-5"
                      id="budget"
                      placeholder="Budget"
                    >
                      <option selected>Budget</option>
                      <option value="Flat+1">Flat+1</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Plots">Plots</option>
                    </select>
                  </div>
                  <div className="col-lg-2 align-items-center " id="res3">
                    
                    <select
                     
                      className=" px-3 py-1 border rounded-5"
                      id="budget"
                      placeholder="Property"
                    >
                      <option selected>Rent</option>
                      <option value="Flat+1">Buy</option>
                    </select>
                  </div>
                  <div className="col-lg-2" id="res4">
                  <button className="btn btn-danger px-3 fs-6" id="btnsearch">Search</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
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
    margin-left: 1rem;
    width: 85%;
     border-radius: 5rem;
     height: 2.3rem;
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
