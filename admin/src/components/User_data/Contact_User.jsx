
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import SiderbarMob from '../SiderbarMob'
import NavbarAd from '../NavbarAd'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
function Contact_User() {
    const [userData, setUserData] = useState();

    useEffect(()=>{
        const AllUserData = async ()=>{

            try{
                const response = await axios.get('https://bharatroofers.com/api/auth/contact_us/data');
                 setUserData(response.data.data);
            }
            catch (error){
                console.error('Error fetching all user data:', error.response.data);

            }
        };
        AllUserData();
        
    },[]);
  return (
   <Wrapper>
    <NavbarAd/>
  <div className="row flex-nowrap">
    <div className="col-lg-2 col-1" id='sider'>
    <Sidebar/>
    </div>
    <div className="col-lg-2 col-1" id='sider1'>
    <SiderbarMob/>
    </div>
   
    <div className="col-lg-10 mt-2" id='set'>
      <div className="row">
   <div className="col-lg-12">
  <div className="widget-area-2 proclinic-box-shadow " id='tableres'>
                    <h5 className="widget-title" id='title'>Contact User</h5>

                    <div className="table-container"> 
      {userData ? (
        <table className="table table-bordered table-striped" id="tableres">
          <thead>
            <tr>
               <th>User id</th>  
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
            
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
                  </div>
   </div>
  



  </div>
   </div>
   </div>


    
   
   
   
   </Wrapper>
  )
}

export default Contact_User
const Wrapper = styled.div`
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
  #tableres{
    margin-top: 5rem;
    
  }
  .table-responsive{
    max-height: 35rem; /* Adjust the max height as needed */
  overflow-y: auto;
  @media screen and (max-width: 768px) {
  width: 20rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
  width: 42rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
  width: 72rem;
  margin-left: 2rem;
  }
  }
  #title{
    margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
    margin-left: 0rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
  
  margin-left: 2rem;
  }
  }

`