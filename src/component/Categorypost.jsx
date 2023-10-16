import React from "react";
import Mpost from "./Mpost";
import Sidepost from "./Sidepost";
import Amul from "./img/Amul-franchise-copy.webp";
import Berger from './img/Berger-paint-dealership-copy.webp';
import Besleri from './img/Bisleri-distributorship-copy.webp';
import Mrf from './img/mrf-tyre-jd-power-award-m_720x540.webp';




export default function Categorypost() {
  return (
    <>
      <div className=" mt-3" style={{ borderBottom: "2px solid blue", marginLeft:"2.1rem", width:"64%" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "blue",
            color: "white",
            width: "110px",
            height: "35px",
            fontSize: "17px",
            textAlign: "center",
            paddingTop: "5px"
          }}
        >
          Recent Posts
        </div>
      </div>
 
        <div className="d-flex mt-4 category-box" style={{marginLeft:"2.3rem", width:"65%"}}>
          <Mpost img1={Besleri} />
          <Sidepost img1={Berger} img2={Mrf} img3={Amul} />
        </div>
       
      {/* </div> */}
    </>
  );
}
