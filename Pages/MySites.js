import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

import WebsitesCard from '../Components/WebsitesCard/WebsitesCard';
import { Link, NavLink } from "react-router-dom";


const MySites = () => {


  return(
    <div>
    <Navbar/>

<div className="container offset-container">
        <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">My Sites</h1>
            </div>
            <div className="">
               <Link to="/addwebsite" className="btn btn-outline-light">Add Site</Link> 
            </div>
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <WebsitesCard domainName="mywebsiteisamazing.com" btnType="editWebsite" />
          </div>
          <div className="col-lg-4">
            <WebsitesCard domainName="turbodesign.com" btnType="editWebsite" />
          </div>
          <div className="col-lg-4">
            <WebsitesCard domainName="mysticalcreatures.com" btnType="editWebsite" />
          </div>
        </div>
        </div>

    </div>
  );
}

export default MySites;