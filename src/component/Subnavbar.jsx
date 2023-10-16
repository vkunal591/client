import React, { useState } from "react";
import faceboook from "./img/facebook-f.svg";
import instagram from "./img/instagram.svg";
import youtube from "./img/youtube.svg";
import twitter from "./img/twitter.svg";


export default function Subnavbar() {
  // eslint-disable-next-line 
  const [latestnews, setLatestnews] = useState("News");
  //

  return (
    <>
      <nav className="navbar bg-body-tertiary px-5">
        <div className=" ">
          
          Latest News: <a href="">{latestnews} </a>
        </div>
        <div className="d-flex" style={{width:"200px"}}>
          <a className="navbar-brand" href="/">
            <img src={faceboook} alt="facebook" style={{height:"25px"}} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={twitter} alt="facebook" style={{height:"25px"}} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={youtube} alt="facebook"  style={{height:"25px"}} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={instagram} alt="facebook" style={{height:"25px"}} />
          </a>
        </div>
      </nav>
    </>
  );
}
