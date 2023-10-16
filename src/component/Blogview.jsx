import React, { useState } from "react";
import Tata from './img/tata-1mg-franchise.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";


export default function Blogview() {
  const [showlist, setshowlist] = useState("45px");
// eslint-disable-next-line 
  const Show = () => {
    if (showlist == "45px") {
      setshowlist("max-content");
    } else {
      setshowlist("45px");
    }
  };
  return (
    <>
      <Sidebar />
      <div className="ms-5" style={{ width: "65%" }}>
        <div class="mt-3 mx-auto" style={{ width: "100%" }}>
          <img
            src={Tata}
            class="card-img-top"
            alt=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ducimus architecto accusantium, totam ratione eligendi incidunt
              tenetur officia, asperiores nisi nostrum et est praesentium
              doloribus exercitationem eos tempora recusandae fugit!"
          />

          <div class="">
            <h5 className="ms-3 mt-2">First slide label</h5>
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
            <div
              id="simple-list-example"
              class="d-flex flex-column gap-2 simple-list-example-scrollspy ps-5"
              style={{
                backgroundColor: "whitesmoke",
                height: `${showlist}`,
                overflowY: "hidden"
              }}
              onClick={Show}
            >
              <button
                className="mt-2"
                style={{
                  position: "absolute",
                  left: "60%",
                  border: "1px solid white"
                }}
              >
                Show List
              </button>
              <a class="p-1 rounded" href="#simple-list-item-1">
                Item 1
              </a>
              <a class="p-1 rounded" href="#simple-list-item-2">
                Item 2
              </a>
              <a class="p-1 rounded" href="#simple-list-item-3">
                Item 3
              </a>
              <a class="p-1 rounded" href="#simple-list-item-4">
                Item 4
              </a>
              <a class="p-1 rounded" href="#simple-list-item-5">
                Item 5
              </a>
              <a class="p-1 rounded" href="#simple-list-item-6">
                Item 6
              </a>
              <a class="p-1 rounded" href="#simple-list-item-7">
                Item 7
              </a>
              <a class="p-1 rounded" href="#simple-list-item-8">
                Item 8
              </a>
              <a class="p-1 rounded" href="#simple-list-item-9">
                Item 9
              </a>
              <a class="p-1 rounded" href="#simple-list-item-10">
                Item 10
              </a>
            </div>
            <p className="ms-3 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ducimus architecto accusantium, totam ratione eligendi incidunt
              tenetur officia, asperiores nisi nostrum et est praesentium
              doloribus exercitationem eos tempora recusandae fugit!
            </p>
            <div class="row">
              <div class="col-1"></div>
              <div class="col-8">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#simple-list-example"
                  data-bs-offset="0"
                  data-bs-smooth-scroll="true"
                  class="scrollspy-example"
                  tabindex="0"
                >
                  <h4 id="simple-list-item-1">Item 1</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-2">Item 2</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-3">Item 3</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-4">Item 4</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-5">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-6">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-7">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-8">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <p className="" style={{paddingLeft:"2.5rem"}}>
                    {" "}
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>{" "}
                    <li>Lorem ipsum dolor sit amet</li>{" "}
                    <li>Lorem ipsum dolor sit amet</li>{" "}
                    <li>Lorem ipsum dolor sit amet</li>{" "}
                    <li>Lorem ipsum dolor sit amet</li>{" "}
                    <li>Lorem ipsum dolor sit amet</li>
                  </p>
                  <h4 id="simple-list-item-9">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                  <h4 id="simple-list-item-10">Item 5</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore ducimus architecto accusantium, totam ratione
                    eligendi incidunt tenetur officia, asperiores nisi nostrum
                    et est praesentium doloribus exercitationem eos tempora
                    recusandae fugit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
