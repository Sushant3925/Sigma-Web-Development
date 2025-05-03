import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            {/* Link tag is used as a Anchor tag but it does not reload the page while moving to another page */}
            {/* NavLink is used to check which page is currently active */}
              <ul>
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Home"> <li>Home</li></NavLink>
               <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Contact"> <li>Contact us</li></NavLink>
               <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"> <li>About</li></NavLink>
              </ul>
               {/* <Link to="/User"> <li>Profile</li></Link> */}
                
        </nav>
    </div>
  )
}

export default Navbar
