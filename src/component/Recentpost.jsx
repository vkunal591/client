import React from "react";
import "./css/categorylist.css";

export default function Recentpost() {
  return (
    <>
      <div className=" mt-5">
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
            Recent Posts
          </div>
        </div>
        <ul className="pt-2 category-ul">
          <a href="/">
            <li>Delerships</li>
          </a>
          <a href="/">
            <li>Frenchisee</li>
          </a>
          <a href="/">
            <li>Petrol Pump</li>
          </a>
          <a href="/">
            <li>Delerships</li>
          </a>
          <a href="/">
            <li>Frenchisee</li>
          </a>
          <a href="/">
            <li>Petrol Pump</li>
          </a>
          <a href="/">
            <li>Delerships</li>
          </a>
        </ul>
      </div>
    </>
  );
}
