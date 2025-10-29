import React from 'react';
import "../styles/linkedin.css";
import linkedinIcon from "../assets/linkedin.svg";

// Default URL set to the user's LinkedIn profile (replace or override via prop)
const LinkedInButton = ({ url = "https://www.linkedin.com/in/jeremiah-sosa/" }) => {
  return (
    <a
      className="linkedin-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Connect on LinkedIn"
      aria-label="Connect on LinkedIn"
    >
      <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
    </a>
  );
};

export default LinkedInButton;
