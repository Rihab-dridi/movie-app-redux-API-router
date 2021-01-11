import React, {components} from 'react';
import {Link} from 'react-router-dom';
import "./NavBarChild.css";


const NavBarChild =()=>{
 
        return (
          <nav className="navbar">
        <div style={{display:"flex", marginLeft:"33px"}}>
          <img style={{ width:"40px",height:"40px",padding:"0" }}src="https://www.pngmart.com/files/5/Movie-PNG-Image.png"></img>
          <h1 className="noun" >  CINé </h1>
        </div>
          <ul  className="items">
              
          <Link to='/'>
             <li>Home</li>
          </Link>
         

           <Link to='/Movies/Add'>
             <a> <li>Movies</li></a>
            </Link>

           <Link to='/Detail-List'>
             <a> <li>Details</li></a>
           </Link>
          </ul>
             
          </nav>
  )

    
}



export default NavBarChild
