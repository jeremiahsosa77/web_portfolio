import React from 'react';
import ContactMenu from './ContactMenu';
import "../styles/contact.css";
import Avatar from "../avatar/Avatar.js";

const Contact = () => {
  return (
    <>
      <Avatar page="skills" />
      <ContactMenu />
    </>
  );
};

export default Contact;
