import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";



function App() {
  
  return (
    <>
    <div className="" style={{overflowX:"hidden"}}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      
       

      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
