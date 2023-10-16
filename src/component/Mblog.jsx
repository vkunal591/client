import React from "react";
import Tata from "./img/tata-1mg-franchise.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";


export default function Mblog() {
  return (
    <>
      <div className="mt-3" style={{ width: "100%" }}>
        <img src={Tata} className="card-img-top" alt="..." />

        <div className="">
          <h5 className="ms-3 mt-2">Tata 1Mg fre</h5>
          <p>
            <span className="mx-3">
              <FontAwesomeIcon icon={faCalendar} className="mx-2 icon-color" />
              date
            </span>{" "}
            <span className="mx-3">
              <FontAwesomeIcon icon={faTag} className="mx-2 icon-color" />
              Category
            </span>{" "}
            <span className="mx-3">
              <FontAwesomeIcon icon={faIndustry} className="mx-2 icon-color" />
              Industry
            </span>
          </p>
          <p className="ms-3 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus architecto accusantium, totam ratione eligendi incidunt
            tenetur officia, asperiores nisi nostrum et est praesentium
            doloribus exercitationem eos tempora recusandae fugit!
          </p>
          <a href="#" className="btn btn-primary position-relative translate-middle" style={{top:"90%",left:"85%", borderRadius:"0px"}}>Read More</a>
        </div>
      </div>
    </>
  );
}
