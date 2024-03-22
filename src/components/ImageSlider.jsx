import React from "react";
import Marquee from "react-fast-marquee";
import photo1 from "../assets/11.jpg";
import photo2 from "../assets/15.jpg";
import photo3 from "../assets/3.jpg";
import photo4 from "../assets/16.jpg";
import photo5 from "../assets/17.jpg";
import photo7 from "../assets/10.jpg";
import photo6 from "../assets/14.jpg";
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <>
      <Marquee direction="right" speed={100} delay={5} className="mt-64 mb-24">
        <div className="image_wrapper">
          <img src={photo5} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={photo1} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={photo3} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={photo4} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={photo2} alt="" />
        </div>
        <div className="image_wrapper">
            <img src={photo7} alt="" />
        </div>
        <div className="image_wrapper">
            <img src={photo6} alt="" />
        </div>
      </Marquee>
    </>
  );
};

export default ImageSlider;
