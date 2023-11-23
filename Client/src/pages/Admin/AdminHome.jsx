import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/AdminComp/Sidebar'
import NavbarAd from '../../components/AdminComp/NavbarAd'
import { Card } from 'react-bootstrap'
import Cards from '../../components/AdminComp/Cards'
import Chart from '../../components/AdminComp/Chart'
import BarChart from '../../components/AdminComp/BarChart'
import SiderbarMob from '../../components/AdminComp/SiderbarMob'


function AdminHome() {
  return (
  <Wrapper>
<NavbarAd/>

 
  <div className="row flex-nowrap">
    <div className="col-lg-1 col-1" id='sider'>
    <Sidebar/>
    </div>
    <div className="col-lg-1 col-1" id='sider1'>
    <SiderbarMob/>
    </div>
   
    <div className="col-lg-11 mt-2" id='set'>
      <div className="row">
   <div className="col-lg-12">
    <h3 className='hdd'>Dashboard
    <h6 className='mt-2'>Welcome to Makaan Online</h6>
   </h3>
   </div>
   <div className="col-lg-12">
    <Cards/>
   </div>
<div className="row" id='chartrow'>
    <div className="col-lg-6 mt-3">
<Chart/>
    </div>
    <div className="col-lg-6 mt-3">
<BarChart/>
    </div>
</div>


  </div>
   </div>
   </div>
  </Wrapper>
  )
}

export default AdminHome

const Wrapper = styled.div`
.hdd{
    margin-top: 5rem;
    margin-left: 8rem;
    @media screen and (max-width: 768px) {
   
        margin-top: 4rem;
    margin-left: 2rem;
    }
}
#chartrow{
    margin-top: 5rem;
    margin-left: 7rem;
    @media screen and (max-width: 768px) {
   margin-left: -2rem;
   margin-top: 2rem;
   gap: 1rem;
   margin-bottom: 12px;
    
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
   margin-left: 8rem;
  }
  }
  #sider{
    display: block;
    @media screen and (max-width: 768px) {
   
    display: none;
    
  }
}
  #sider1{
    display: none;
    @media screen and (max-width: 768px) {
   
   display: block;
   
 }
   
  }
`