import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Resources() {
  return (
    <>
      <div className="resource">
        <h3>Helpful Resources</h3>
        <div className="alll">
          <Link to="https://www.amnesty.org/en/what-we-do/arms-control/gun-violence/">
            More Information
          </Link>
          <Link to="https://kidshealth.org/en/parents/gun-safety.html">
            Protect kids
          </Link>
          <Link to="https://health.ucdavis.edu/what-you-can-do/resources/WYCD_PatientHandout_2.28.19.pdf">
            Home safety measures
          </Link>
          <Link to="https://www.thehotline.org/resources/safety-planning-around-guns-and-firearms/">
            Call to action
          </Link>
        </div>
      </div>
    </>
  );
}
