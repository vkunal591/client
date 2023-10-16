import React from "react";
import Besleri from './img/Bisleri-distributorship-copy.webp';
import Start from './img/How-to-Start-4.webp';
import Untitled from './img/Untitled-design-29.webp';
import Mrf from './img/mrf-tyre-jd-power-award-m_720x540.webp';


export default function Sidecard(props) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 w-50 sidecard-box">
        <div className="col">
          <div className="card">
            <img src={Mrf} className="card-img-top" alt="..." />

            <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000042", color:"white",fontWeight:"600"}}>
            {/* <h5>{props.data[0].title}</h5>
                <p>
                Since no industry suffered significant losses as a result
                </p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
         
            <img src={Untitled} className="card-img-top" alt="..." />

            <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000042", color:"white",fontWeight:"600"}}>
            {/* <h5>{props.data[1].title}</h5>
                <p>
                If you are planning to start a paint dealership business in India,
                </p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Besleri} className="card-img-top" alt="..." />

            <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000042", color:"white",fontWeight:"600"}}>
            {/* <h5>{props.data[2].title}</h5>
                <p>
                Hello Friends, today we will discuss about the Mineral water distributorship business,
                </p> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Start} className="card-img-top" alt="..." />

            <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#00000042", color:"white",fontWeight:"600"}}>
            {/* <h5>{props.data[3].title}</h5>
                <p>
                If you are planning to start a paint dealership business in India
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
