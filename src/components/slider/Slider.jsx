import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="carousel-container" id="works">
      <div className="carousel-title">
        <h3>Mis Projectos</h3>
      </div>

      <Carousel
        plugins={['arrows','centered',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 2
          }
        }
        ]}
        slides={Slides}
        breakpoints={{
          640: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 1
               }
             },
           ]
          },
          900: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 2
               }
             },
           ]
          }
        }}
      />
    </div>
  );
};

export default Slider;