import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";

function SideBlog() {
  return (
   <>         
             <div className="card mb-3" style={{ border:"none"}}>
  <div className="row g-0 d-flex align-items-center">
    <div className="col-md-4 mt-2">
      <img src="https://www.homes.com/blog/wp-content/uploads/2019/02/Hosue-with-pool-760x428.jpg" className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body py-0 px-0 px-sm-3">
      <p className="card-text d-inline"><small className="text-muted"><BiCategoryAlt />Selling a home</small>    <span className="fs-5"></span> </p>
        <h6 className="card-title mb-0">Card title</h6>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default SideBlog