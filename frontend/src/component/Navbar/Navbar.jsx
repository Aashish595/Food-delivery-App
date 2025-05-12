import { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.css"; // Importing the CSS file
import { Link,useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate()

const logout = () => {
  setToken("")
  localStorage.removeItem("token")
  navigate("/")
  // setShowLogin(false)
}

  return (
    <div className="navbar">
      <Link to='/' ><img src={assets.main_logo} alt="" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active":""} >    home     </Link>
        <a href="#explore-menu" onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""} >    menu     </a>
        <a href="#app-download" onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >    mobile-app     </a>
        <a href="#footer" onClick={()=> setMenu("contact us")} className={menu==="contact us"?"active":""} >    contact us     </a>
   
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="h-6 w-6 " />
        <div className="navbar-search-icon">
         <Link to='/Cart' > <img src={assets.basket_icon} alt="" className=" cursor-pointer" /> </Link> 
         <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button className='signbutton' onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} className='white-filter' alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>}
      </div>
    </div>
  );
};

export default Navbar;
