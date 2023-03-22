import { Rating } from "@mui/material";
import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div>
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Produts id, title, price, rating, image */}
      <div className="product-row">
        <Product
          id={1}
          title='Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray'
          image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX522_.jpg"
          price={703.99}
          rating={5}
        />
        <Product
          id={1}
          title="KYY Portable Monitor 15.6inch 1080P FHD USB-C Laptop Monitor HDMI Computer Display HDR IPS Gaming Monitor w/Premium Smart Cover & Speakers, External Monitor for Laptop PC Mac Phone PS4 Xbox Switch"
          image="https://m.media-amazon.com/images/I/81rsMys9S8L._AC_SX679_.jpg"
          price={189.99}
          rating={5}
        />
      </div>
      <div className="product-row">
        <Product
          id={3}
          title="PlayStation PS5 Console – God of War Ragnarök Bundle"
          image="https://m.media-amazon.com/images/I/61SUJDrCTLL._SX522_.jpg"
          price={559}
          rating={5}
        />
        <Product
          id={4}
          title="Meta Quest 2 - Advanced All-In-One Virtual Reality Headset - 128 GB (Renewed Premium)"
          image="https://m.media-amazon.com/images/I/61kwRNPtMpL._SX522_.jpg"
          price={349.99}
          rating={5}
        />
        <Product
          id={5}
          title="Unstoppable Entrepreneur: Strategies for Overcoming Adversity and Achieving Success Paperback – February 12, 2023"
          image="https://m.media-amazon.com/images/I/510cte7ehYL._SX331_BO1,204,203,200_.jpg"
          price={14.99}
          rating={4}
        />
      </div>

      <div className="product-row">
        <Product
          id={2}
          title="SteelSeries Apex Pro Mini Wireless Mechanical Gaming Keyboard – World’s Fastest Keyboard – Adjustable Actuation – Compact 60% Form Factor – RGB – PBT Keycaps – Bluetooth 5.0 – 2.4GHz – USB-C"
          image="https://m.media-amazon.com/images/I/71HnlGGoM1L._AC_SX679_.jpg"
          price={213.65}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
