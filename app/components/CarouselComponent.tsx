"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const CarouselComponent = () => {
  const imageProp = ["/pizza1.jpg", "/pizza2.jpg", "/pizza3.jpg"];
  return (
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      emulateTouch
    >
      {imageProp.map((image, index) => (
        <div
          key={index}
          style={{ maxHeight: "36rem" }}
          className="brightness-50"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover brightness-50 overflow-hidden"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
