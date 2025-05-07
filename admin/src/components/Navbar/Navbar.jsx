import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>Admin Panel</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder='Search...' />
        <button>Search</button>
      </div>
      <div className="profile">
        <img src={assets.profile_image} alt="" />
      
      </div>
       
    </div>
  )
}

export default Navbar
