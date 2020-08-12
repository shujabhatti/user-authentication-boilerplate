import React, { Fragment, useEffect } from "react";
import SideBarItem from "./SideBarItem";
import Color from "../constants/Colors";
import ImageContainer from "./ImageContainer";

import { logout } from "../../actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const selectedItem = (selItem) => {
  var elem = document.getElementById(selItem);
  if (elem) {
    elem.style.backgroundColor = Color.primaryHex;
    elem.childNodes[0].style.color = Color.fore;
    elem.childNodes[0].childNodes[0].style.color = Color.fore;
  }
};

const MainNav = (props) => {
  const { isAuthenticated, user } = props;

  useEffect(() => {
    selectedItem(props.selItem);
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    props.logout();
  };

  const authLinks = (
    <Fragment>
      <SideBarItem
        id={"home-id"}
        icon={"account_circle"}
        text={`Hello ${user && user.name}`}
      />
      <SideBarItem
        id={"exit-id"}
        icon={"exit_to_app"}
        text={"Logout"}
        onClick={onLogout}
      />
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <SideBarItem
        id={"login-id"}
        text={"Login"}
        icon={"lock"}
        link={"/login"}
      />
      <SideBarItem
        id={"reg-id"}
        text={"Register User"}
        icon={"assignment_turned_in"}
        link={"/register"}
      />
      <SideBarItem
        id={"about-id"}
        text={"About"}
        icon={"info"}
        link={"/about"}
      />
    </Fragment>
  );

  return (
    <Fragment>
      <nav style={{ background: Color.primaryHex }}>
        <div className='nav-wrapper'>
          <h6 href='#!' className='brand-logo center'>
            <span>User Authentication BoilerPlate</span>
          </h6>
          <a href='#!' className='sidenav-trigger' data-target='side-nav'>
            <i className='material-icons'>menu</i>
          </a>
        </div>
      </nav>
      <ul className='sidenav sidenav-fixed' id='side-nav'>
        <li>
          <ImageContainer
            className='responsive-img'
            src={require("../images/logo.png")}
            style={{
              width: "90%",
              height: "180px",
              margin: "auto",
            }}
            alt='Logo'
          />
        </li>
        <div className='divider'></div>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </Fragment>
  );
};

MainNav.defaultProps = {
  selItem: "home-id",
};

MainNav.propTypes = {
  selItem: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (obj) => dispatch(logout(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
