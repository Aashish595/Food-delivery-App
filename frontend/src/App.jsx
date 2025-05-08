import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import "./App.css";
import { useState } from "react";
import Footer from "./component/Footer/Footer"; 
import LoginPopup from "./component/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<> </>}
      <div className="app">
    <Router> 
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
    </Router>
      </div>
      <Footer /> 
    </>
  )
}

export default App;
