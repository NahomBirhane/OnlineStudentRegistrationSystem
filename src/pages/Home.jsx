import React, { useEffect } from "react";
import Slider from "../components/Slider";
import "../comp_css/Slider.css";
import e1 from "../picture/e1.png";
import b1 from "../picture/b1.png"
import h1 from "../picture/h1.png"
import e2 from "../picture/e2.png";
import b2 from "../picture/b2.png";
import h2 from "../picture/h2.png";
import e3 from "../picture/e3.png";
import b3 from "../picture/b3.png";
import h3 from "../picture/h3.png";
import e4 from "../picture/e4.avif";
import b4 from "../picture/b4.png";
import h4 from "../picture/h4.png";

const Home = () => {
  const veritycard = [
 
       e1, b1, h1, e2, b2, h2, e3, b3, h3, e4, b4, h4,
  ];
  const slideImages = [
    "https://i.ebayimg.com/thumbs/images/g/mAgAAOSwqW9lMvCw/s-l1200.jpg",
    "https://www.livemint.com/lm-img/img/2023/09/23/1600x900/rhh_1695470152346_1695470161360.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/210512100135-macbook.jpg?q=x_0,y_0,h_1125,w_1999,c_fill/h_833,w_1480",
  ];
  const slideImages2 = [
    "https://s3.us-west-2.amazonaws.com/social-images.manning.com/walls6/twitter.png",
    "https://images.prismic.io/turing/65a6b0057a5e8b1120d5959d_Best_React_Books_Learning_React_by_Alex_Banks_and_Eve_Porcello_2_11zon_98b601256f.webp?auto=format,compress",
    "https://m.media-amazon.com/images/I/81ycHtBjMWL._AC_UF1000,1000_QL80_.jpg",
  ];
  const styleFixedImg = {
    width: "100%",
    height: "70vh",
    marginTop: "1px",
    marginBottom: "10px",
  };
  useEffect(() => {
    document.title = "Habesha Mini Online Market";
    return () => {
      document.title = "Habesha Mini Online Market";
    };
  }, []);

  return (
    <div className="home-container">
      <div className="image-row">
        <div className="image-column">
          <Slider style={styleFixedImg} images={slideImages} interval={4000} />
        </div>
        <div className="image-column">
          <img
            className="fixed-img"
            src="https://ae01.alicdn.com/kf/A849de4636ef546f494780d09eb4d05a62/FORUDESIGNS-Ethiopian-Clothing-Traditional-Dress-for-Woman-Female-Party-Habesha-Dress-Elegant-Skirts-Luxury-Design-Ethiopia.jpg"
            alt="Image"
          />
        </div>
        <div className="image-column">
          <Slider style={styleFixedImg} images={slideImages2} interval={5000} />
        </div>
      </div>
      <div className="cardbox">
        {veritycard.map((el, index) => (
          <img src={el} alt={`image${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;