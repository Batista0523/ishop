import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://img-c.udemycdn.com/course/750x422/1405110_fac3_2.jpg"
          alt=""
          className="home-img"
        />
        <div className="home-row">
          <Product
            id="123"
            title="Iphone 14 pro max"
            price={1040.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/51iJx7YWDOL._AC_UF350,350_QL50_.jpg"
          />
          <Product
            id="1234"
            title="Audioengine HD6"
            price={699.99}
            rating={4}
            image="https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2015/46/772/g772HD6WAL-F.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="12345"
            title="Kid tablet"
            price={59.34}
            rating={4}
            image="https://media.wired.com/photos/5bd397cdc09dee5cbd062e90/191:100/w_2580,c_limit/amazonfirekids.jpg"
          />
          <Product
            id="1234567"
            title="Nordstrom Luggage Travel"
            price={99.34}
            rating={5}
            image="https://n.nordstrommedia.com/id/sr3/d7288eb7-812c-4aae-8967-6e85333dbd1a.jpeg?h=365&w=240&dpr=2"
          />
          <Product
            id="12"
            title="Mocoosy 12Pcs Red Roses Artificial"
            price={16.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71dEnbFkofL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="123456"
            title="LG - UltraGear 45 OLED Curved WQHD FreeSync and NVIDIA G-SYNC Compatible Gaming Monitor with HDR10 DisplayPort, HDMI, USB Black "
            price={1225.99}
            rating={5}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530356_sd.jpg;maxHeight=640;maxWidth=550"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
