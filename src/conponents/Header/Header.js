import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h2>Welcome to my routing website. with header</h2>
    {/* you have to use link instead of using </a> tag otherwise page will reload*/}
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/about">About</Link>

      {/* display active route */}
      <h4>this is display active route</h4>
      <CustomLink to = "/">Home</CustomLink>
      <CustomLink to = "/friends">Friends</CustomLink>
      <CustomLink to = "/about">About</CustomLink>
    </div>
  );
};

export default Header;
