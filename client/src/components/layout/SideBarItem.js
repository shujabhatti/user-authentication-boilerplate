import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Color from "../constants/Colors";

const SideBarItem = (props) => {
  return (
    <li id={props.id}>
      <Link to={props.link} onClick={props.onClick}>
        <i className={`material-icons left`} style={iconStyle}>
          {props.icon}
        </i>
        {props.text}
      </Link>
    </li>
  );
};

const iconStyle = {
  color: Color.primaryHex,
};

SideBarItem.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

SideBarItem.defaultProps = {
  link: "/",
  text: "Side Nav Item",
};

export default SideBarItem;
