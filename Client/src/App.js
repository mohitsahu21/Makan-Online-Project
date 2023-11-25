import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AdminHome from "./pages/Admin/AdminHome";
import House from "./components/AdminComp/House";
import AllProperties from "./components/AdminComp/AllProperties";

function App() {
  
  return (
    <>
    <div className="" style={{overflowX:"hidden"}}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/house" Component={House} />
        <Route path="/allproperties" Component={AllProperties} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
