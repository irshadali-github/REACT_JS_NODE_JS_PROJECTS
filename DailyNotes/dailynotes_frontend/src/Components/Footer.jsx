import React from "react";
import "./Footer.css"

function Footer(){
    const currentYear=new Date().getFullYear();
   return(
    <footer>
        <div className="container">
        <h5 className="footer">copyright ⓒ {currentYear} </h5>
        </div>
    </footer>
    
   ); 
}
export default Footer;