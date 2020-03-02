import React from 'react';
import { Link, NavLink } from "react-router-dom";

import SiteTypeBtn from '../Components/SiteTypeBtn/SiteTypeBtn';
import ProgressBar from '../Components/ProgressBar/ProgressBar';




const AddWebsite = () => {
  return(
    <>

        <div className="container">
      <div className="my-5">
        <ProgressBar/>
      </div>
      <h1 className="text-center font-weight-bold mb-5">What type of site do you want to make?</h1>
      <div className="row">

        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
          <SiteTypeBtn cardTitle="Blog" cardIcon="vertical_split" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
          <SiteTypeBtn cardTitle="Portfolio" cardIcon="photo" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
          <SiteTypeBtn cardTitle="Online Store" cardIcon="shopping_cart" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
          <SiteTypeBtn cardTitle="Business" cardIcon="store" />
        </div>

   

          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
            <SiteTypeBtn cardTitle="Restaurants & Food" cardIcon="fastfood" />
          </div>
          <div className="col-lg-3 col-md-4 mb-4 col-sm-6 col-6">
            <SiteTypeBtn cardTitle="Photography" cardIcon="photo_camera" />
          </div>
          <div className="col-lg-3 col-md-4 mb-4 col-sm-6 col-6">
            <SiteTypeBtn cardTitle="Health & Wellness" cardIcon="fitness_center" />
          </div>
          <div className="col-lg-3 col-md-4 mb-4 col-sm-6 col-6">
            <SiteTypeBtn cardTitle="Other" cardIcon="important_devices" />


          </div>

  </div>

    <div className="my-5">
        <Link to="/" className="mr-3 text-muted"><small>EXIT</small></Link>
        {/* <Link to="/choose-template" className="btn btn-primary">Next</Link> */}
      </div>


    </div>
      </>
  );
}

export default AddWebsite;