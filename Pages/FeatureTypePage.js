import React from 'react';
import { Link, NavLink } from "react-router-dom";
import ProgressBar from '../Components/ProgressBar/ProgressBar';
import RadioBtn from '../Components/RadioBtn/RadioBtn';

const FeatureTypePage = () => {
  return(
    <div className="container">
      <div className="my-5">
        <ProgressBar progressStep={2} /> 
      </div>
      <h1 className="text-center font-weight-bold mb-5">What type of features do you want to include?</h1>
      <div className="row">
        <div className="col-lg-6">
          <RadioBtn radioBtnText="Blog" />
          <RadioBtn radioBtnText="SEO"/>   
          <RadioBtn radioBtnText="Gallery"/>
        </div>
        <div className="col-lg-6">
          <RadioBtn radioBtnText="Bookings"/>
          <RadioBtn radioBtnText="Animation"/>   
          <RadioBtn radioBtnText="Content Helper"/>
        </div>
      </div>
      <div className="my-5">
        <Link to="/addwebsite" className="btn btn-secondary mr-3">Previous</Link>
        <Link to="/choose-template" className="btn btn-primary">Next</Link>
      </div>
    </div>
  );
}

export default FeatureTypePage;