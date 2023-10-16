import React from "react";
import Form from "./Form";
import Sidebar from "./Sidebar";

export default function Contactus() {
  return (
    <>
      <Sidebar />
      <div className="ms-5 contactus-box" style={{ width: "65%" }}>
        <h3 className="mt-4">Contact Us</h3>
        <p>
          If you have any query related like GST & other taxes, Business Ideas,
          Franchise, Dealership & Distributorship and Finance. And, if you want
          to take support from our team then fill the form given below our team
          will contact you shortly.
        </p>
        <hr className="my-5" />
        <Form />
      </div>
    </>
  );
}
