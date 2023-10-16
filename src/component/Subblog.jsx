import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";


export default function Subblog(props) {
  return (
    <>
      <div className="d-flex " style={{width:"100%"}}>
        <div className="me-2" style={{ width: "51%" }}>
          <img src={props.img1} className="card-img-top" alt="..." />

          <div className="">
            <h5 className="ms-3 mt-2">Distribution</h5>
            <p>
              <span className="mx-3">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="mx-2 icon-color"
                />
                date
              </span>{" "}
              <span className="mx-3">
                <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
                Category
              </span>{" "}
              <span className="mx-3">
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="mx-2 icon-color"
                />
                Industry
              </span>
            </p>
            <p className="ms-2 mt-1">
            Your profits and margin depends on the total sales you have made. If you are able to make enough sales then you will be eligible for company bonus schemes.These schemes usually start after 6 -12 months from the date, you start your dealership. If you succeed in meeting those sales targets then you can expect good profits. There are some profits:
            </p>
            <a
              href="#"
              className="btn btn-primary position-relative translate-middle"
              style={{ top: "90%", left: "85%", borderRadius: "0px" }}
            >
              Read More
            </a>
          </div>
        </div>
        <div className="ms-2" style={{ width: "51%" }}>
          <img src={props.img2} className="card-img-top" alt="..." />

          <div className="">
            <h5 className="ms-3 mt-2">Frenchise</h5>
            <p>
              <span className="mx-3">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="mx-2 icon-color"
                />
                date
              </span>{" "}
              <span className="mx-3">
                <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
                Category
              </span>{" "}
              <span className="mx-3">
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="mx-2 icon-color"
                />
                Industry
              </span>
            </p>
            <p className="ms-3 mt-1">
            Your profits and margin depends on the total sales you have made. If you are able to make enough sales then you will be eligible for company bonus schemes.These schemes usually start after 6 -12 months from the date, you start your dealership. If you succeed in meeting those sales targets then you can expect good profits. There are some profits:
            </p>
            <a
              href="#"
              className="btn btn-primary position-relative translate-middle"
              style={{ top: "90%", left: "85%", borderRadius: "0px" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
