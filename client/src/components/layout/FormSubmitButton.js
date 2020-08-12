import React from "react";
import PropTypes from "prop-types";
import Color from "../constants/Colors";

const FormSubmitButton = (props) => {
  return (
    <div>
      <input
        type='submit'
        value={props.text}
        className={`col s12 btn-small waves-effect waves-dark`}
        tabIndex='-1'
        style={{ ...buttonStyle, ...props.style }}
        {...props}
      />
    </div>
  );
};

const buttonStyle = {
  color: Color.fore,
  background: Color.primaryHex,
  width: "100%",
};

FormSubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

FormSubmitButton.defaultProps = {
  text: "Submit Button",
};

export default FormSubmitButton;
