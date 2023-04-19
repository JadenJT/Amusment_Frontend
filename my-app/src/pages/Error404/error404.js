import React from "react";
import "./error404.css";
import whiteLogo_sad from '../../images/whitelogo_sad.png'




    function Error404() {
      return (
        <div>
        <img src={whiteLogo_sad} className="wLogo"></img>
        <p className="error404">404 Page Not <br></br>Found</p>
        <p className="description">The page you are looking for does not exist<br></br></p>
        </div>
      )
    }
    
    export default Error404