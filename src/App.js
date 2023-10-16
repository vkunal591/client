import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Sitenamebar from "./component/Sitenamebar";
import Subfooter from "./component/Subfooter";
import Subnavbar from "./component/Subnavbar";
import Blogs from "./component/Blogs";
import Latestnews from "./component/Latestnews";
import Services from "./component/Services";
import Contactus from "./component/Contactus";
import Aboutus from "./component/Aboutus";
import Blogview from "./component/Blogview";
import View from "./component/View";

function App() {
  return (
    <Router>
      <>
        <Subnavbar />
        <Sitenamebar />
        <Navigation />
        <Routes>
        <Route
            exact
            path="/con-add"
            element={
              <React.Fragment>
               <View />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Home />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/latest-news"
            element={
              <React.Fragment>
                <Latestnews />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/blogs"
            element={
              <React.Fragment>
                <Blogs />
       
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/services"
            element={
              <React.Fragment>
                <Services />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/contact-us"
            element={
              <React.Fragment>
                <Contactus />
              </React.Fragment>
            }
          />
           <Route
            exact
            path="/about-us"
            element={
              <React.Fragment>
                <Aboutus />
              </React.Fragment>
            }
          />
             <Route
            exact
            path="/blog-view"
            element={
              <React.Fragment>
                <Blogview />
              </React.Fragment>
            }
          />
        </Routes>

        <Subfooter />
        <Footer />
      </>{" "}
    </Router>
  );
}

export default App;
