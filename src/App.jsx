import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Feedback from "./Components/Feedback";
import Login from "./Components/userlogin";
import Signin from "./Components/Signin";
import ProductList from "./Components/ProductList";
import Offer from "./Components/Offer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        
        <Route 
  path="/products" 
  element={
    <>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '50px', 
        marginBottom: '60px',
         color: 'white'
      }}>
        <ProductList />
      </div>
    </>
  } 
/>   
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Welcome to AgriBzar</h1>} />
        <Route path="/offers" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
