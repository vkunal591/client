import React from "react";
import "./css/categorylist.css"

export default function Categorylist() {
  return (
    <>
      <div className="">
        <div style={{ borderBottom: "2px solid skyblue", width: "100%" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "skyblue",
              color: "white",
              width: "110px",
              height: "35px",
              fontSize: "17px",
              textAlign:"center",
              paddingTop:"5px"
            }}
          >
            Categories
          </div>
        </div>
        <ul className="pt-2 category-ul">
          <a href="/">
            <li>Delerships</li>
          </a>
          <a href="/">
            <li>Frenchisee</li>
          </a>

    
        </ul>
      </div>
    </>
  );
}
