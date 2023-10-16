import React from "react";
import "./css/subfooter.css"


export default function Subfooter() {


  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body tertiary px-5 subfooter-box"
        data-bs-theme="dark"
        style={{ height: "350px" }}
      >
        <div className="d-flex foot">
          <div
            className="card text-bg-dark mb-3 mx-4"
            style={{ maxWidth: "27rem" }}
          >
            <div
              className="card-header"
              style={{ borderBottom: "2px solid blue", fontSize: "20px" }}
            >
              About Us
            </div>
            <div className="card-body">
              <p className="card-text">
                The bulk of the card's content.. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Earum expedita sint veritatis,
                nobis ipsam cumque quasi optio cum pariatur nihil eos
                voluptatibus quibusdam maxime vero quidem eveniet accusamus quam
                debitis! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Dolor in facere, amet non, optio quas quisquam, assumenda
                praesentium hic sequi officiis! Maiores quasi hic provident
                pariatur at quidem dolor possimus.
              </p>
            </div>
          </div>
          <div
            className="card text-bg-dark mb-3 mx-4"
            style={{ maxWidth: "25rem" }}
          >
            <div className="card-header">Latest News</div>
            <div className="card-body">
              <ul className="pt-2 " style={{ width: "25rem" }}>
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
          </div>
          <div
            className="card text-bg-dark mb-3 mx-4"
            style={{ maxWidth: "25rem" }}
          >
            <div className="card-header">Navigation</div>
            <div className="card-body">
              <ul className="pt-2" style={{ width: "25rem" }}>
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
          </div>
        </div>
      </nav>
    </>
  );
}
