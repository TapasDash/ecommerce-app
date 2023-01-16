import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star" //full star
              : value >= 0.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star" //empty star
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star" //full star
              : value >= 1.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star" //empty star
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star" //full star
              : value >= 2.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star" //empty star
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star" //full star
              : value >= 3.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star" //empty star
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star" //full star
              : value >= 4.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star" //empty star
          }
        />
      </span>
      <span>{text && text}</span>
      {/* it means if the text exists, then show it */}
    </div>
  );
};

//By setting the default props of rating, we do not have pass this golden color of star to every Rating component,
// we are stting it by default
Rating.defaultProps = { color: "#f8e825" };

//setting what types of props we can pass it down
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
