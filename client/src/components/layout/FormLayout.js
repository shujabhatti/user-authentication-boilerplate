import React from "react";
import PropTypes from "prop-types";

const FormLayout = (props) => {
  return (
    <div style={{ ...formContainer, ...props.style }} className='z-depth-4'>
      {props.children}
    </div>
  );
};

const formContainer = {
  position: "relative",
  margin: "5% auto 5% auto",
  padding: "20px",
  borderRadius: "5px",
  minHeight: "300px",
  height: "auto",
};

FormLayout.propTypes = {
  style: PropTypes.object,
  children: PropTypes.array,
};

export default FormLayout;
