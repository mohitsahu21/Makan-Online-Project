import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AddProperty from "./pages/Admin/AddProperty";
import AddImages from "./pages/Admin/AddImages";

function App() {
  
  return (
    <> 
      <Routes>
        
        
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
    
       
      
        <Route path="/admin" element={<AddProperty/>} />
        <Route path="/admin/add-property" element={<AddProperty/>} />
        <Route path="/admin/add-property/add-images/:propertyId" element={<AddImages/>} />
       

      </Routes>
      <Footer />
    </>
  );
}

export default App;
