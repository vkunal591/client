import React from "react";
import Amul from "./img/Amul-franchise-copy.webp";
import Berger from './img/Berger-paint-dealership-copy.webp';
import Besleri from './img/Bisleri-distributorship-copy.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";

export default function Sidepost() {
  return (
    <>
      <div className="sidepost-box" style={{ width: "45%", marginLeft: "1rem" }}>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Besleri} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Besleri Distribution</h5>

                <p className="card-text" style={{fontSize:"13px"}}>
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mx-2 icon-color"
                    />
                    date
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
                    Category
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faIndustry}
                      className="mx-2 icon-color"
                    />
                    Industry
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Amul} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amul Distribution</h5>

                <p className="card-text" style={{fontSize:"13px"}}>
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mx-2 icon-color"
                    />
                    date
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
                    Category
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faIndustry}
                      className="mx-2 icon-color"
                    />
                    Industry
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Berger} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Berger Frenchise</h5>

                <p className="card-text" style={{fontSize:"13px"}}>
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mx-2 icon-color"
                    />
                    date
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
                    Category
                  </span>{" "}
                  <span className="mx-1">
                    <FontAwesomeIcon
                      icon={faIndustry}
                      className="mx-2 icon-color"
                    />
                    Industry
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
