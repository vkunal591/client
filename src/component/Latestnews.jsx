import React from "react";
import Subblog from "./Subblog";
import Sidebar from "./Sidebar";
import Amul from "./img/Amul-franchise-copy.webp";
import Berger from './img/Berger-paint-dealership-copy.webp';
import Besleri from './img/Bisleri-distributorship-copy.webp';
import Start from './img/How-to-Start-4.webp';
import Untitled from './img/Untitled-design-29.webp';
import Mrf from './img/mrf-tyre-jd-power-award-m_720x540.webp';
import Tata from './img/tata-1mg-franchise.webp';

export default function Latestnews() {
  return (
    <>
      <Sidebar />
      <div className=" mt-3" style={{ marginLeft: "5rem",marginBottom:"1rem", width: "63%" }}>
        <div className="mb-3" style={{ borderBottom: "2px solid skyblue", width: "100%" }}>
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
        
        <Subblog img1={Tata} img2={Amul} />
        <Subblog img1={Mrf} img2={Start} />
        <Subblog img1={Untitled} img2={Besleri} />
        <Subblog img1={Berger} img2={Tata} />
       
      </div>
    </>
  );
}
