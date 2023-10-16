import React from "react";


export default function Mslidebox(props) {
  return (
    <>
      <div className="w-50 mslide-box">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{width:"95%",height:"90%"}}>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={props.img1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000070", color:"white", left:"0%",right:"0%", width:"100%",fontWeight:"600"}}>
                <h5>{props.data[0].title}</h5>
                <p>
                {props.data[0].description}
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={props.img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000070", color:"white", left:"0%",right:"0%", width:"100%",fontWeight:"600"}}>
                <h5>{props.data[1].title}</h5>
                <p>
                {props.data[1].description}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={props.img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000070", color:"white", left:"0%",right:"0%", width:"100%",fontWeight:"600"}}>
              <h5>{props.data[2].title}</h5>
                <p>
                {props.data[2].description}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    </>
  );
}
