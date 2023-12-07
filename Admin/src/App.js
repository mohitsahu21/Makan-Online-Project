import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import FooterAd from './components/FooterAd';

import AllProperties from "./components/AllProperties";
import RegistrationAd from "./pages/RegistrationAd";
import LoginAd from "./pages/LoginAd";
import PropertyAd from "./components/PropertyAd";
import SingleProperty from "./components/SingleProperty/SingleProperty";

import SingleBlog from "./components/SingleBlog/SingleBlog";
import Commercial from './components/Typesofproperty/Commercial';
import Villa from './components/Typesofproperty/Villa';
import Plot from './components/Typesofproperty/Plot';
import Land from './components/Typesofproperty/Land';
import Flat from './components/Typesofproperty/Flat';
import FarmHouse from './components/Typesofproperty/FarmHouse';
import FarmLand from './components/Typesofproperty/FarmLand';
import House from './components/Typesofproperty/House';
import ForgotPassword from './pages/ForgotPassword';
import Registered_User from './components/User_data/Registered_User';
import Interested_User from './components/User_data/Interested_User';
import Contact_User from './components/User_data/Contact_User';



function App() {
  return (
    <>
     <div className="" style={{overflowX:"hidden"}}>
      <Routes>
        <Route path="/" Component={AdminHome} />
      
     
        <Route path="/allproperties" Component={AllProperties} />
        <Route path="/admin_register" Component={RegistrationAd} />
        <Route path="/admin_forgot" Component={ForgotPassword} />
        <Route path="/admin_login" Component={LoginAd} />
      
     
        <Route path="/propertyad" Component={PropertyAd} />
        <Route path="/single_property" Component={SingleProperty} />
        <Route path="/single_blog" Component={SingleBlog  } />
       

        <Route path="/admin_house" Component={House} />
        <Route path="/admin_villa" Component={Villa} />
        <Route path="/admin_plot" Component={Plot} />
        <Route path="/admin_land" Component={Land} />
        <Route path="/admin_flat" Component={Flat} />
        <Route path="/admin_farmhouse" Component={FarmHouse} />
        <Route path="/admin_farmland" Component={FarmLand} />
        <Route path="/admin_commerical" Component={Commercial} />
       
        <Route path="/registered_user" Component={Registered_User} />
        <Route path="/interested_user" Component={Interested_User} />
        <Route path="/contact_user" Component={Contact_User} />
       

       


      </Routes>
      <FooterAd />
      </div>
    </>
  )
}

export default App