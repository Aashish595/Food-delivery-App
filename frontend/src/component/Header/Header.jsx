import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


function Header() {


  return (
    <div className='header' style={{ backgroundImage: `url(${assets.header})` ,
    backgroundRepeat: 'no-repeat',
      
      }}  >
      
        <div className=' header-contents '  >
        
             <h2>Order your favorite food here</h2>
             <p>Indulge in a curated selection of mouthwatering dishes made from the freshest ingredients. 
                Whether you're craving a classic favorite or eager to try something new, our diverse menu is designed to satisfy your taste buds.
                Elevate your dining experience with every bite and let your cravings lead the way.</p>
                <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
               
        </div>

    </div>
  )
}

export default Header
