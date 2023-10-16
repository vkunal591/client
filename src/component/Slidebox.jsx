import React from "react";
import Mslidebox from "./Mslidebox";
import Sidecard from "./Sidecard";
import "./css/slidebox.css";
import Besleri from "./img/Bisleri-distributorship-copy.webp";
import Mrf from "./img/mrf-tyre-jd-power-award-m_720x540.webp";
import Tata from "./img/tata-1mg-franchise.webp";
import Data from "./Data.json";

export default function Slidebox() {
  return (
    <>
      <div className="d-flex mx-auto slidebox mt-3 slide-box">
        <Mslidebox img1={Tata} img2={Besleri} img3={Mrf} data={Data} />
        <Sidecard  data={Data} />
      </div>
    </>
  );
}
