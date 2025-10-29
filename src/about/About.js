import React, { Component } from 'react';
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";
import LinkedInButton from "./LinkedInButton";

export default class About extends Component {
  render() {
    return <>
      <Avatar page="about" />
      {/* LinkedIn button (replace url inside component or pass a prop) */}
      <LinkedInButton />
      <AboutMenu />
    </>
  }
}
