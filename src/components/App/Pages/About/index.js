import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About page </h1>
      <Typography>This app is made only for fun and kinda learning</Typography>

      <Link to="/">Currency to sallary</Link>
    </div>
  );
};

export default AboutPage;
