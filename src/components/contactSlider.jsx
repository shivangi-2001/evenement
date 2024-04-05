import React, { useEffect, useRef, useState } from "react";

import photo1 from "../assets/10.jpg";
import photo2 from "../assets/11.jpg";
import photo3 from "../assets/I.jpg";
import photo4 from "../assets/L.jpg";
import photo5 from "../assets/E.jpg";
import photo6 from "../assets/A.jpg";

const carouselItems = [photo1, photo2, photo3, photo4, photo5, photo6];

const ContactSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img
            src={item}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      ))}
    </>
  );
};

export default ContactSlider;
