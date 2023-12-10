import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import SingleBlog from "./components/SingleBlog";
import SingleProperty from "./components/SingleProperty";
import AddProperty from "./pages/Admin/AddProperty";
import PopularCategory from "./components/PopularCategory";
import AddImages from "./pages/Admin/AddImages";
import AddsuggestedProperty from "./pages/Admin/AddsuggestedProperty";
import Luxuaryhouse from "./components/Luxuaryhouse";
import NavbarMob from "./components/NavbarMob";
import PropertyType from "./components/PropertyType";
import RentedProperties from "./components/RentedProperties";

function App() {
  
  return (
    <> 
      
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/blog/single-blog" element={<SingleBlog/>} />
        <Route path="/single-property" element={<SingleProperty/>} />
        <Route path="/property/:propertyId" element={<SingleProperty/>} />
        <Route path="/property/propertyType/:propertyType" element={<PropertyType/>} />
        <Route path="/property/propertiesForRent" element={<RentedProperties/>} />


        <Route path="/admin" element={<AddProperty/>} />
        <Route path="/admin/add-property" element={<AddProperty/>} />
        <Route path="/admin/add-property/add-images/:propertyId" element={<AddImages/>} />
        <Route path="/admin/add-suggested-property" element={<AddsuggestedProperty/>} />
        <Route path={`/popular-apartment-searches/:name`} element={<PopularCategory/>}  />
        <Route path={`/popular-house-searches/`} element={<AddProperty/>}  />
        <Route path={`/popular-villa-searches/`} element={<AddProperty/>}  />
        <Route path={`/popular-plot-searches/`} element={<AddProperty/>}  />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
