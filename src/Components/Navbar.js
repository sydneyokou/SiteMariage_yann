import {Link} from "react-router-dom";
  import React from "react";
  import './Navbar.css'
const Navbar = () => {
    return (
     
            <nav class="topnav">
                 <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                  
            </nav>
  
    
    

    );  
       
} 
export default Navbar;