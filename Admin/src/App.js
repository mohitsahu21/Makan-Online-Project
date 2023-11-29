import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import FooterAd from './components/FooterAd';

import AllProperties from "./components/AllProperties";
import RegistrationAd from "./pages/RegistrationAd";
import LoginAd from "./pages/LoginAd";
import AllBlogs from "./components/AllBlogs";
import BlogAd from "./components/BlogAd";
import PropertyAd from "./components/PropertyAd";
import SingleProperty from "./components/SingleProperty/SingleProperty";

import SingleBlog from "./components/SingleBlog/SingleBlog";
import AddBlog from "./components/AddBlog";
import Commercial from './components/Typesofproperty/Commercial';
import Villa from './components/Typesofproperty/Villa';
import Plot from './components/Typesofproperty/Plot';
import Land from './components/Typesofproperty/Land';
import Flat from './components/Typesofproperty/Flat';
import FarmHouse from './components/Typesofproperty/FarmHouse';
import FarmLand from './components/Typesofproperty/FarmLand';
import House from './components/Typesofproperty/House';


function App() {
  return (
    <>
     <div className="" style={{overflowX:"hidden"}}>
      <Routes>
        <Route path="/" Component={AdminHome} />
      
     
        <Route path="/allproperties" Component={AllProperties} />
        <Route path="/admin_register" Component={RegistrationAd} />
        <Route path="/admin_login" Component={LoginAd} />
        <Route path="/blogad" Component={BlogAd} />
        <Route path="/all_blogs" Component={AllBlogs} />
        <Route path="/propertyad" Component={PropertyAd} />
        <Route path="/single_property" Component={SingleProperty} />
        <Route path="/single_blog" Component={SingleBlog  } />
        <Route path="/add_blog" Component={AddBlog} />

        <Route path="/admin_house" Component={House} />
        <Route path="/admin_villa" Component={Villa} />
        <Route path="/admin_plot" Component={Plot} />
        <Route path="/admin_land" Component={Land} />
        <Route path="/admin_flat" Component={Flat} />
        <Route path="/admin_farmhouse" Component={FarmHouse} />
        <Route path="/admin_farmland" Component={FarmLand} />
        <Route path="/admin_commerical" Component={Commercial} />
       


      </Routes>
      <FooterAd />
      </div>
    </>
  )
}

export default App