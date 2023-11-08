import React from "react";
import Slider from "react-slick";
import Image1 from "./jpg/cabin.jpeg";
import BackPatio from "./jpg/backpatio.jpeg";
import FrontPatio from "./jpg/frontpatio.jpeg";
import FirePit from "./jpg/firepit.jpeg";
import Snow from "./jpg/snow.jpeg";
import LivingRoom from "./jpg/livingroom.jpeg";
import Kitchen from "./jpg/kitchen.jpeg";
import Primary from "./jpg/primaryroom.jpeg";
import Master from "./jpg/masterbathroom.jpeg";
import GuestRoom from "./jpg/secondbr.jpeg";
import Loft from "./jpg/loft.jpeg";
import Snow2 from "./jpg/snow2.jpeg";
import PassWay from "./jpg/passway.jpeg";
import Canal from "./jpg/canal.jpeg";
import LivingRoom2 from "./jpg/livingroom2.jpeg";
import AFrame from "./jpg/aframe.jpeg";

const images = [
  Image1,
  Snow,
  PassWay,
  BackPatio,
  Canal,
  Snow2,
  FrontPatio,
  FirePit,
  AFrame,
  LivingRoom,
  LivingRoom2,
  Kitchen,
  Primary,
  Master,
  Loft,
  GuestRoom,
];

const Images: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <img key={index} src={image} alt="aframe" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Images;
