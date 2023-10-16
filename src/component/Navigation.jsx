import React from "react";
import "./css/navigation.css";

export default function Navigation() {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <ul className="nav knav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/latest-news">
              LATEST NEWS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blogs">
              BLOGS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact-us">
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">
              ABOUT US
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
