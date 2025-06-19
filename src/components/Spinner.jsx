import React from "react";
import "../styling/Spinner.scss";

function Spinner() {
  // This component renders a simple spinner for loading states
  return (
    <div className="spinner-overlay">
      <div className="spinner-circle"></div>
    </div>
  );
}

export default Spinner;
