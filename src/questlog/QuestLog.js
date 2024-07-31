import React from "react";
import "../styles/questLog.css";

const QuestLog = () => {
    return (
      <div className="quest-log">
        <div className="quest-log-header" >
          Quest Log
        </div>
        <div className="quest-log-content">

        <div className="quest">
            <h3>/_\  "Project Pursuit" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Creat atleast 5 meaningful projects by the end of December</p>
          </div>

          <div className="quest">
            <h3>/_\  "Internship Hunter" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Secure first software engineering internship.</p>
          </div>
  
          <div className="quest">
            <h3>/_\  "Hackathon Hijack" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Participate and take a top spot in a hackathon.</p>
          </div>
  
          <div className="quest">
            <h3>/_\  "Academic Weapon" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Get straight A's in upcoming semester</p>
          </div>
  
          <div className="quest">
            <h3>/_\  "Redemption" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Graduate with a bachelor's degree and a 3.5 GPA or higher.</p>
          </div>
  
          <div className="quest">
            <h3>/_\  "Secured Bag" Quest</h3>
            <p><strong>[OBJECTIVE]</strong> - Secure a full-time software engineering job</p>
          </div>
        </div>
      </div>
    );
  };

export default QuestLog;