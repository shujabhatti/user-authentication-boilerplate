import React from "react";
import PropTypes from "prop-types";

const ImageContainer = (props) => {
  return (
    <img
      {...props}
      src={props.src}
      alt={props.alt}
      className={props.className}
      style={{ ...imgContainer, ...props.style }}
    />
  );
};

const imgContainer = {
  width: "100%",
  height: "auto",
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

ImageContainer.defaultProps = {
  src: require("../images/user.png"),
  alt: "Image",
};

export default ImageContainer;
