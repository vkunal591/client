import React, { useState, useEffect } from "react";

export default function View() {
  const [Contacts, setContacts] = useState([]);



  const host = " http://127.0.0.1:3001";

  // GEt All Contact
  const getallcontacts = async () => {
    // Api Call
    const response = await fetch(`${host}/api/contact`, {
      method: "GET",
      headers: {
        "Content-type": "application.json"
      }
    });
    const json = await response.json();

    setContacts(json);
    return json;
  };

  // const getdata = async () => {
  //   const data = await getallcontacts();
  //   setCustomers(data);
  //   console.log(data)
  // };

  useEffect(() => {
    //   getdata();
    getallcontacts();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col" style={{ width: "100%" }}>
          {Contacts.map((customer) => {
            return (
              <div
                className=" pt-2 pb-1"
                style={{
                  height: "max-content",
                  textAlign: "right",
                  width: "95%",
                  margin: "auto"
                }}
              >
                <hr style={{ border: "2px solid red" }} />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Name:{" "}
                  </span>{" "}
                  {customer.name}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Email:{" "}
                  </span>
                  {customer.email}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Phone:{" "}
                  </span>
                  {customer.phone}{" "}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Address:{" "}
                  </span>
                  {customer.address}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    City:{" "}
                  </span>
                  {customer.city}{" "}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    District:{" "}
                  </span>
                  {customer.district}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Pincode:{" "}
                  </span>
                  {customer.pincode}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    State:{" "}
                  </span>
                  {customer.state}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Country:{" "}
                  </span>
                  {customer.country}
                </h5>
                <br />
                <h5
                  style={{ textAlign: "right", fontWeight: "400" }}
                  className="card-title"
                >
                  {" "}
                  <span style={{ float: "left", fontWeight: "500" }}>
                    Details:{" "}
                  </span>
                  {customer.details}
                </h5>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
