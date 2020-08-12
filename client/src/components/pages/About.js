import React, { Fragment } from "react";
import MainNav from "../layout/MainNav";

const About = () => {
  return (
    <Fragment>
      <MainNav selItem={"about-id"} />
      <div className='main'>
        <div className='row'>
          <h1>About</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
