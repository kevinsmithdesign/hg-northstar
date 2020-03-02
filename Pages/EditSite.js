import React from 'react';
import '../edit-site.scss';
import RadioBtn from '../Components/RadioBtn/RadioBtn';

import { Link, NavLink } from "react-router-dom";


const EditSite = () => {

  const wpHelper = () => {
    console.log('help');
  }

  return(
    <>
      <div className="bg-img">
    <div className="primary-bg py-3">
      <div className="text-right">
        <Link to="/" className="btn btn-default text-white">Exit Builder</Link>
      </div>
    </div>

    <div className="wp-helper-btn" onClick={ wpHelper}>
            <i className="material-icons md-24 ">arrow_forward</i>

    </div>
    {/* 
    <div className="d-flex">
      <div className="website-builder-nav">
        <div className="my-5 mx-5">
          <div className="mb-5">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Group%20Copy.svg" className="mb-5"/>
          <h5 className="font-weight-bold mb-3">Set up your site</h5>
            <RadioBtn radioBtnText="Select Template" />
            <RadioBtn radioBtnText="Install WordPress"  />
           </div>

            <h5 className="font-weight-bold mb-3">Customize Site</h5>
              <RadioBtn radioBtnText="Update Content" />
              <RadioBtn radioBtnText="Add Images"  />
              <RadioBtn radioBtnText="Style Theme"  />
              <RadioBtn radioBtnText="Add Additional Pages"  />
              <RadioBtn radioBtnText="Add Social Media Links"  />
           </div>




      
        </div>

      <div>test</div>
    </div> */}
    </div>
    </>
  );
}

export default EditSite;