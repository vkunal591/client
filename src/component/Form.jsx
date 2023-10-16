import React, { useState } from "react";
import Alert from "./Alert";

export default function Form() {
  const [alershow, setalershow] = useState("Hide");
  const [submitstatus, setsubmitstatus] = useState("Submit");
  const [conInput, setConInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    details: ""
  });

  // console.log(conInput);
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setConInput({
      ...conInput,
      [name]: value
    });
  };

  const host = " http://127.0.0.1:3001";

  // Add Contact
  const addcontact = async (
    name,
    email,
    phone,
    address,
    city,
    district,
    pincode,
    state,
    country,
    details
  ) => {
    // Api Call
    const response = await fetch(`${host}/api/contact/contactus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        city,
        district,
        pincode,
        state,
        country,
        details
      })
    });

    const contact = await response.json();
    // setContacts(Contacts.concat(contact));
  };

  const handleSubmit = async (event) => {
    // eslint-disable-next-line
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      conInput.name.length > 3 &&
      re.test(conInput.email) &&
      conInput.phone.length > 9 &&
      conInput.pincode.length > 3
    ) {
      event.preventDefault();
      setsubmitstatus("Processing");
      await addcontact(
        conInput.name,
        conInput.email,
        conInput.phone,
        conInput.address,
        conInput.city,
        conInput.district,
        conInput.pincode,
        conInput.state,
        conInput.country,
        conInput.details
      );
      setsubmitstatus("Submited");
      setConInput({
        name: "",
        email: "",
        phone: "",
        address: "",
        district: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        details: ""
      });

      return setalershow("Hide");
      setTimeout(() => {
        setsubmitstatus("Submit");
      }, 5000);
    } else {
      return setalershow("Show");
    }
  };

  return (
    <>
      <div
        className="pt-3"
        style={{ backgroundColor: "#fbfbfb", borderRadius: "5px" }}
      >
        {alershow == "Show" ? <Alert /> : ""}

        <div
          action=""
          method="post"
          className="mx-auto"
          style={{ width: "90%" }}
        >
          <h3 style={{ textAlign: "center" }}>
            <span style={{ borderBottom: "3px solid skyblue" }}>
              Contact Form
            </span>
          </h3>
          Name:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={conInput.name}
            className="form-control mb-2"
            placeholder="Enter Full Name"
            aria-label="Enter your name"
            aria-describedby="basic-addon1"
          />
          Phone No:
          <div className="input-group mb-2 ">
            <span className="input-group-text" id="basic-addon1">
              +91
            </span>
            <input
              onChange={handleChange}
              type="number"
              name="phone"
              value={conInput.phone}
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              aria-describedby="basic-addon1"
            />
          </div>
          Email Id:
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={conInput.email}
            className="form-control mb-2"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="basic-addon2"
          />
          Address:
          <input
            onChange={handleChange}
            type="text"
            name="address"
            value={conInput.address}
            className="form-control mb-2"
            placeholder="Address"
            aria-label="address"
            aria-describedby="basic-addon1"
          />
          City:
          <input
            onChange={handleChange}
            type="text"
            name="city"
            value={conInput.city}
            className="form-control mb-2"
            placeholder="City"
            aria-label="city"
            aria-describedby="basic-addon1"
          />
          District:
          <input
            onChange={handleChange}
            type="text"
            name="district"
            value={conInput.district}
            className="form-control mb-2"
            placeholder="District"
            aria-label="District"
            aria-describedby="basic-addon1"
          />
          Pin Code:
          <input
            onChange={handleChange}
            type="Number"
            name="pincode"
            value={conInput.pincode}
            className="form-control"
            placeholder="Pin Code"
            aria-label="Pin Code"
            aria-describedby="basic-addon1"
          />
          State:
          <div id="scrollspyHeading4" className="mb-2">
            <select
              className="form-select"
              aria-label="Default select example"
              name="state"
              onChange={handleChange}
              value={conInput.state}
            >
              <option value="state">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          Country:
          <div id="scrollspyHeading4" className="mb-2">
            <select
              className="form-select"
              aria-label="Default select example"
              name="country"
              onChange={handleChange}
              value={conInput.country}
            >
              <option value="Not Selected">Select Country</option>
              <option value="India">India</option>
            </select>
          </div>
          <textarea
            className="mb-3"
            onChange={handleChange}
            name="details"
            id="additional"
            cols="120"
            rows="8"
            value={conInput.details}
            style={{ fontSize: "15px", border: "1px solid #e4e1e1" }}
          ></textarea>
          <a href="#alert" style={{ textDecoration: "none", color: "black" }}>
            <button
              className="btn subbtn mx-auto mb-3"
              id="submit"
              style={{
                width: "99%",
                backgroundColor: "var(--orangeText)",
                color: "black",
                fontSize: "20px",
                border: "1px solid black"
              }}
              onClick={handleSubmit}
            >
              {submitstatus}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
