import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.BWhZ1MzBOdI7B0KMu-Oo2gAAAA&pid=Api&P=0"
          className="card-img"
          alt="Background"
          height="500px"
        />

        <div className="card-img-overlay  d-flex flex-column justify-content-center">
          <div className="container">
            <h1 className="card-title    fw-bolder mb-0 ">
              NEW SEASON ARRIVALS
            </h1>
            <p className="card-text  lead fs-2 ">CHECK OUT ALL THE TRENDS </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
