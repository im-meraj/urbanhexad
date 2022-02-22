import './review.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Review = () => {
    return (
      <div className="review">
        <div className="review__container">
          <div className="review__header">
            <h1 className="review__title">
              What Our Customers
              <br />
              Are Saying
            </h1>
            <div className="review__slide__container">
              <div className="review__slide__quote">
                <span className="review__quote">"</span>
              </div>
              <div className="review__slide__text">
                <p className="review__text">
                  When we needed design and architecture specialists, your team
                  was there for
                  <br />
                  us. You took all our ideas and demands into consideration and
                  made a great
                  <br />
                  project.
                </p>
                <div className="review__bottom">
                  <div className="review__bottom__author">
                    <span className="review__author">
                      <b>- Thomson Zarki</b>
                    </span>
                    <span className="review__arrow">
                      <ArrowBackIcon className="arrow__icon-left" />
                      <ArrowForwardIcon
                        className="arrow__icon-right"
                        fontSize="large"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Review;