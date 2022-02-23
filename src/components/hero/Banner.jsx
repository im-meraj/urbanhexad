import React from 'react';
import './banner.css';

const Banner = () => {
    return (
      <>
        <div className="container">
          <div className="left">
            <h1 className="banner__heading">
              We Believe in <br />
              Great Architecture
            </h1>
            <p className="banner__text">
              The first and most trusted marketplace of <br /> design & build
              house in The World
            </p>
            <button className="btn btn-primary">View Project</button>
          </div>
            <div className="right">
          <img
            className="banner__img"
            src="https://res.cloudinary.com/immeraj/image/upload/v1645103329/banner_nauaiv.png"
            alt="banner"
          />
          </div>
        </div>
      </>
    );
}

export default Banner;
