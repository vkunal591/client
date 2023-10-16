import React from "react";
import Mblog from "./Mblog";
import Subblog from "./Subblog";
import Sidebar from "./Sidebar";
import Amul from "./img/Amul-franchise-copy.webp";
import Mrf from './img/mrf-tyre-jd-power-award-m_720x540.webp';


export default function Blogs() {
  return (
    <>
      <Sidebar />
      <div className=" mt-3" style={{ marginLeft: "5rem", width: "60%" }}>
        <div style={{ borderBottom: "2px solid skyblue", width: "100%" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "skyblue",
              color: "white",
              width: "110px",
              height: "35px",
              fontSize: "17px",
              textAlign: "center",
              paddingTop: "5px"
            }}
          >
            Categories
          </div>
        </div>
        <Mblog />
        <Subblog img1={Mrf} img2={Amul} />
        
      </div>
    </>
  );
}
