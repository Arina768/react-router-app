import React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => (
  <div>
    <nav>
      <Link to="/">Main</Link>
      <Link to="/login">Log In</Link>
      <Link to="/registration">Registration</Link>
    </nav>
  </div>
);