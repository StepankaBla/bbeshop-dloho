import React, { useEffect, useState } from "react";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export const Home = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div className="home">
      <HeroBanner />
      <div className="banner">
        <h2>Easy shopping!</h2>
        <span>guaranteed quality</span>
      </div>
      <div className="container">
        <div className="container_img">
          <MDBCarousel showControls dealy={2000} dark showIndicators>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="/img/1.jpg"
              alt="..."
            >
             
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="/img/2.jpg"
              alt="..."
            >
             
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="/img/3.jpg"
            >
             
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={4}
              src="/img/4.jpg"
            >
              
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </div>
      <div className="pay">
        <img src="/img/pay.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
