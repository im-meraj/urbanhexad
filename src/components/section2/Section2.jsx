import './section2.css';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section2 = () => {
    return (
      <div className="section2">
        <div className="section2__container">
          <div className="section2__top">
            <h2 className="section2__title">
              We Provide Creative
              <br />
              Designer for Your
              <br />
              Home Project
            </h2>
          </div>
          <div className="section2__bottom">
            <div className="card__container">
              <div className="card__item">
                <div className="card__logo">
                  <img
                    src="https://res.cloudinary.com/immeraj/image/upload/v1645201124/urbanhexad_assets/i1_nwsr1d.png"
                    alt=""
                  />
                </div>
                <div className="card__head">
                  <h3 className="card__title">Architecture</h3>
                </div>
                <div className="card__text">
                  <p>
                    First stages in a project are very
                    <br />
                    important to understand your client's
                    <br />
                    needs.
                  </p>
                </div>
                <div className="card__btn">
                  <button className="cta-btn">
                    <span className="btn-text">Learn More</span>
                    <span className="arrow">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </div>
              </div>
              <div className="card__item">
                <div className="card__logo">
                  <img
                    src="https://res.cloudinary.com/immeraj/image/upload/v1645201124/urbanhexad_assets/i2_kopi5i.png"
                    alt=""
                  />
                  {/* <ApartmentIcon /> */}
                </div>
                <div className="card__head">
                  <h3 className="card__title">Interior Design</h3>
                </div>
                <div className="card__text">
                  <p>
                    First stages in a project are very
                    <br />
                    important to understand your client's
                    <br />
                    needs.
                  </p>
                </div>
                <div className="card__btn">
                  <button className="cta-btn">
                    <span className="btn-text">Learn More</span>
                    <span className="arrow">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </div>
              </div>
              <div className="card__item">
                <div className="card__logo">
                  <img
                    src="https://res.cloudinary.com/immeraj/image/upload/v1645201124/urbanhexad_assets/i3_yuomyr.png"
                    alt=""
                  />
                </div>
                <div className="card__head">
                  <h3 className="card__title">Plants</h3>
                </div>
                <div className="card__text">
                  <p>
                    First stages in a project are very
                    <br />
                    important to understand your client's
                    <br />
                    needs.
                  </p>
                </div>
                <div className="card__btn">
                  <button className="cta-btn">
                    <span className="btn-text">Learn More</span>
                    <span className="arrow">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section2;
