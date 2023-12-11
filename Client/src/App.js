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
import Singleblog1 from "./components/Blogs/Single Blogs/Singleblog1";
import Singleblog2 from "./components/Blogs/Single Blogs/Singleblog2";
import Singleblog3 from "./components/Blogs/Single Blogs/Singleblog3";
import Singleblog4 from "./components/Blogs/Single Blogs/Singleblog4";
import Singleblog5 from "./components/Blogs/Single Blogs/Singleblog5";
import Singleblog6 from "./components/Blogs/Single Blogs/Singleblog6";
import Singleblog7 from "./components/Blogs/Single Blogs/Singleblog7";

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
        <Route path="/blogs/single-blog1" element={<Singleblog1/>} />
        <Route path="/blogs/single-blog2" element={<Singleblog2/>} />
        <Route path="/blogs/single-blog3" element={<Singleblog3/>} />
        <Route path="/blogs/single-blog4" element={<Singleblog4/>} />
        <Route path="/blogs/single-blog5" element={<Singleblog5/>} />
        <Route path="/blogs/single-blog6" element={<Singleblog6/>} />
        <Route path="/blogs/single-blog7" element={<Singleblog7/>} />
        <Route path="/single-property" element={<SingleProperty/>} />
        <Route path="/property/:propertyId" element={<SingleProperty/>} />

        <Route path="/admin" element={<AddProperty/>} />
        <Route path="/admin/add-property" element={<AddProperty/>} />
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
