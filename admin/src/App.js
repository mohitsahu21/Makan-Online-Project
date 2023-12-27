import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import FooterAd from './components/FooterAd';

import AllProperties from "./components/AllProperties";
import RegistrationAd from "./pages/RegistrationAd";
import LoginAd from "./pages/LoginAd";

import SingleProperty from "./components/SingleProperty/SingleProperty";

import ForgotPassword from './pages/ForgotPassword';
import Registered_User from './components/User_data/Registered_User';
import Interested_User from './components/User_data/Interested_User';
import Contact_User from './components/User_data/Contact_User';
import AddProperty from './components/AddProperty';
import AddImages from './components/AddImages';
import { useDispatch, useSelector } from "react-redux";
import EditProperty from './components/EditProperty';
import EditImages from './components/EditImages';
import PrivateRoute from './components/PrivateRoute';
import SoldProperties from './components/SoldProperties';
import SuggestedProperty from './components/SuggestedProperty';




function App() {
  const {currentAdmin} = useSelector((state) => state.admin)
  return (
    <>
     <div className="" style={{overflowX:"hidden"}}>
     
      <Routes>
        
        
        <Route path='/' element={currentAdmin ? <AdminHome/> : <LoginAd/>} />
        <Route path="/allproperties" element={<AllProperties/>} />
        <Route path="/soldproperties" element={<SoldProperties/>} />
       {/* <PrivateRoute path="/allproperties" element={<AllProperties />} />  */}
        <Route path="/admin_register" element={currentAdmin ?  <AdminHome/> :<RegistrationAd/>} />
        <Route path="/admin_forgot" element={ currentAdmin ?  <AdminHome/> :<ForgotPassword/>} />
        <Route path="/admin_login"  element={currentAdmin ?  <AdminHome/> : <LoginAd/>} />
        
      
        <Route path="/registered_user" element={<Registered_User/>} />
        <Route path="/interested_user" element={<Interested_User/>} />
        <Route path="/contact_user" element={<Contact_User/>} />


        <Route path="/admin/add-property" element={<AddProperty/>} />
        <Route path="/admin/add-property/add-images/:propertyId" element={<AddImages/>} />
        <Route path="/admin/suggested-property" element={<SuggestedProperty/>} />
        <Route path="/property/:propertyId" element={<SingleProperty/>} />
        <Route path="/property/edit-property/:propertyId" element={<EditProperty/>} />
        <Route path="/property/edit-property-images/:propertyId" element={<EditImages/>} />

       

      </Routes>
      {/* <FooterAd /> */}
      </div>
    </>
  )
}

export default App