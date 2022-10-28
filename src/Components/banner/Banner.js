import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerdata from "./Bannerdata";
import "./banner.css";

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {Bannerdata.map((dataa, index) => {
          return (
            <div>
              <div>
                <img className="image-slider" src={dataa.image} alt="" />
                <div class="slide-desc">
                  <p>{dataa.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
