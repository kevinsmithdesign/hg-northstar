import React from 'react';
import { Link, NavLink } from "react-router-dom";


const SelectTemplatePage = () => {
  return(
    <>
    <div className="container-fluid bg-light">
      <div className="container text-right py-3">
        <Link to="/choose-template" className="btn btn-secondary mr-3">Back</Link>
        <Link to="/" className="btn btn-primary">Choose Theme</Link>
      </div>
    </div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Outdoors.png" className="full-screen" />
    </>
  );
}

export default SelectTemplatePage;