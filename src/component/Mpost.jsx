import React from "react";
import Tata from "./img/tata-1mg-franchise.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";

export default function Mpost(props) {
  return (
    <>
      <div className="mpost-box" style={{ width: "50%" }}>
        <img src={props.img1} className="card-img-top" alt="..." />

        <div className="">
          <h5 className="ms-3 mt-2">{props.title1}</h5>
          <p>
            <span className="mx-3">
              <FontAwesomeIcon icon={faCalendar} className="mx-2 icon-color" />
              {props.date}
            </span>{" "}
            <span className="mx-3">
              <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
              {props.category}
            </span>{" "}
            <span className="mx-3">
              <FontAwesomeIcon icon={faIndustry} className="mx-2 icon-color" />
              {props.industry}
            </span>
          </p>
          <p className="ms-3 mt-1">
          {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
