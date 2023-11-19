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

      </Routes>
      <Footer />
    </>
  );
}

export default App;
