import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from "react-responsive-carousel";

// Import images directly from the folder
import image1 from "../../../assets/images/carousel/s1.jpg";
import image2 from "../../../assets/images/carousel/s2.jpg";

const CustomCarousel = () => {
  return (
    <div className="carousel-container" style={{marginTop:"120px"}}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        transitionTime={500}
        showArrows={true}
        showThumbs={false}
        centerMode={false}
        showIndicators={true}
        dynamicHeight={true}
        height={400} // Carousel height can be adjusted here as well
      >
        <div>
          <img
            src={image1}
            alt="carousel-image-1"
            className="carousel-image"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="carousel-image-2"
            className="carousel-image"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={image1}
            alt="carousel-image-3"
            className="carousel-image"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="carousel-image-4"
            className="carousel-image"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
