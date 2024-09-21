import React, { useState } from 'react';
import meter1 from "../assets/img/1.png";
import meter2 from "../assets/img/2.png";
import meter3 from "../assets/img/4.png";
import meter4 from "../assets/img/5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Astrophotography = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageData = [
    {
      src: meter1,
      title: "Galaxy 1",
      description: "This is a stunning view of Galaxy 1 captured using a long exposure technique."
    },
    {
      src: meter2,
      title: "Galaxy 2",
      description: "Taken from my backyard over a period of a week. It contains 20 hrs of good data down selected from ~35 hrs of data acquisition. The red dots are from the remnant of dead stars (nebulas, hydrogen gas clouds) within which blue new stars are forming. This object is 21 million light years away from Earth. Scope: C11 with a reducer.\
      Mount: EQ6-Pro \
      Camera:ZWO ASI553-Pro Single Shot Color Guidescope: OAG with ZWO mono camera Filter: UV/IR, -extreme Software: Asiair, Siril, Photoshop, BXT\
      Light: 120 sec sub 14.5 hrs broadband, 5 mins sub 5.5 hrs of -extreme\
      Flat, and Bias Frames for calibration Bortle: 7ish, outskirts of Los Angeles "
    },
    {
      src: meter3,
      title: "Lagoon Nebula",
      description: "Integration: 1.5 hrs, 1min sub, guided\
      Scope: Takahashi FS60.\
      Camera: zwo533mc single shot color"
    },
    {
      src: meter4,
      title: "Ring Nebula",
      description: "A close-up of the Ring Nebula, taken with Celestron 8\" scope at FL2000mm with Asi533mc camera and OAG."
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleNext = () => {
    setPhotoIndex((photoIndex + 1) % imageData.length);
  };

  const handlePrev = () => {
    setPhotoIndex((photoIndex - 1 + imageData.length) % imageData.length);
  };

  return (
    <section className="astrophotography" id="astrophotography">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="astrophotography-bx wow zoomIn">
              <h2>Astrophotography</h2>
              <p>My astro photographs<br /> Description here.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme astrophotography-slider"
              >
                {imageData.map((data, index) => (
                  <div className="item" key={index}>
                    <img
                      src={data.src}
                      alt={`Astro Image ${index + 1}`}
                      onClick={() => {
                        setPhotoIndex(index); 
                        setIsOpen(true);
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />

      {isOpen && (
        <div className="custom-lightbox">
          <button
            className="lightbox-custom-close"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <button
            className="lightbox-prev"
            onClick={handlePrev}
          >
            &#8249;
          </button>

          <div className="lightbox-content">
            <img src={imageData[photoIndex].src} alt={imageData[photoIndex].title} />
           
          </div>

          <button
            className="lightbox-next"
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};
