import React from "react";
import faceboook from "./img/facebook-f.svg";
import instagram from "./img/instagram.svg";
import youtube from "./img/youtube.svg";
import twitter from "./img/twitter.svg";


export default function Footer() {


  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body tertiary px-5"
        data-bs-theme="dark"
        style={{ height: "100px" }}
      >
        <div className=" " style={{ color: "whitesmoke" }}>
          Copyright © 2023. All rights reserved. @ymwsolution
        </div>
        <div className="d-flex" style={{ width: "200px",backgroundColor:"whitesmoke", paddingLeft:"1.7rem" }}>
          <a className="navbar-brand" href="/">
            <img src={faceboook} alt="facebook" style={{ height: "25px" }} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={twitter} alt="facebook" style={{ height: "25px" }} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={youtube} alt="facebook" style={{ height: "25px" }} />
          </a>
          <a className="navbar-brand" href="/">
            <img src={instagram} alt="facebook" style={{ height: "25px" }} />
          </a>
        </div>
      </nav>
    </>
  );
}
