import React, { Fragment, useEffect } from "react";
import MainNav from "../layout/MainNav";

import { loadUser } from "../../actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = (props) => {
  useEffect(() => {
    props.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <MainNav selItem={"home-id"} />
      <div className='main'>
        <div className='row'>
          <h1>Home</h1>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
