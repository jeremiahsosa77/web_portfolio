import React from 'react';
import "../styles/linkedin.css";
import linkedinIcon from "../assets/linkedin.svg";

// Replace the default `url` with your LinkedIn profile URL or pass `url` prop
const LinkedInButton = ({ url = "https://www.linkedin.com/in/jeremiahsosa77" }) => {
  return (
    <a
      className="linkedin-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Connect on LinkedIn"
    >
      <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
    </a>
  );
};

export default LinkedInButton;
