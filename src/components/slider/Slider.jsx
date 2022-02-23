import './slider.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../../images';

const Slider = () => {
    const [width, setWidth] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []);

    return (
      <div className="slider__container">
          <motion.div className="slider__top">
            <motion.div className="slider__top__left">
              <motion.h3 className="slider__heading">
                We Build More
                <br />
                Projects Successfully
              </motion.h3>
            </motion.div>
            <motion.div className="slider__top__right">
              <span className="arrowLeft">
                <ArrowBackIcon className="arrow__icon" />
              </span>
              <span className="arrowRight">
                <ArrowForwardIcon className="arrow__icon" fontSize="large" />
              </span>
            </motion.div>
          </motion.div>
        <motion.div className="slider__container">
          <motion.div className="slider" ref={slider} whileTap={{cursor: "grabbing"}}>
            <motion.div animate={{x:10}} drag="x" dragConstraints={{ right:0, left:-width }} className="inner__slider">
              {images.map((image, index) => {
                return (
                  <motion.div className="slider__item" key={index}>
                    <img src={image} alt="" />
                    <motion.div className="slider__info__item">
                      <h6 className="info__title">Warung Boto Hotel</h6>
                      <p className="info__text">Jogja, Indonesia</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
}

export default Slider;
