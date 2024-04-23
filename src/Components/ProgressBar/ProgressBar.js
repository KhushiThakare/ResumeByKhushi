import React from "react";
import './ProgressBar.css';
const ProgressBar = ({ completion }) => {
  return (
    <div className="progress-data">
      <div className="progress-head">
        <span className="progress-count">{`${completion}%`}</span>
        <span className="progress-txt">Resume Score</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${completion}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
