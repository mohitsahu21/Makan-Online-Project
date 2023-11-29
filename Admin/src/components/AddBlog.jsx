import React from 'react'
import styled from 'styled-components'
import NavbarAd from './NavbarAd'
import Sidebar from './Sidebar'
import SiderbarMob from './SiderbarMob'

function AddBlog() {
  return (
    <Wrapper>
        <NavbarAd/>
        <div className="container-fluid">
          <div className="row mx-0 justify-content-center mt-2">
            <div className="col-lg-1" id='nav1'>
               <Sidebar/>
            </div>
            <div className="col-lg-1" id='nav2'>
               <SiderbarMob/>
            </div>
            <div className="col-lg-11">
                <div className="container">
                <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-4 px-lg-2 px-xl-0 px-xxl-3"> <form
                method="POST"
                class="w-100 rounded-1 p-4 border bg-white"
                action="https://herotofu.com/start"
                enctype="multipart/form-data">
                <div className='Add d-flex justify-content-center'>
                  <h2>Add Blog</h2>
                </div> 
                <label class="d-block mb-4">
                  <span class="form-label d-block">Tittle</span>
                  <input
                    required
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Add Tittle"
                  />
                </label>

                <label class="d-block mb-4">
                  <span class="form-label d-block">Categary</span>
                  <select required name="experience" class="form-select">
                    <option>Categary-Type</option>
                    <option>Categary-1</option>
                    <option>Categary-2</option>
                    <option>Categary-3</option>
                    <option>Categary-4</option>
                    <option>Categary-5</option>
                  </select>
                </label>

                <label class="d-block mb-4">
                  <span class="form-label d-block">Contant</span>
                  <textarea
                    name="message"
                    class="form-control"
                    rows="6"
                    placeholder="Leave Contant hear..."
                  ></textarea>
                </label>

                <label class="d-block mb-4">
                  <span class="form-label d-block">Select Image</span>
                  <input required name="cv" type="file" class="form-control" />
                </label>

                <div class="mb-3 text-center">
                  <button type="submit" class="btn btn-primary px-5 rounded-3">
                    Submit
                  </button>
                </div>

              </form>
              </div>
              <div className="col-lg-5">

              </div>
              </div></div>
           </div>
          </div>
        </div>


    </Wrapper>
  )
}

export default AddBlog
const Wrapper = styled.div`
    
.container{
    margin-top: 6rem;
    margin-bottom: 2rem;
}
#sider{
    
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
`