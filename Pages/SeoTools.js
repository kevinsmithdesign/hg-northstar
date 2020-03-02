import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, NavLink } from "react-router-dom";
import BrochureCard from '../Components/BrochureCard/BrochureCard';
import BrochureFacts from '../Components/BrochureFacts/BrochureFacts';
import BrochurePlans from '../Components/BrochurePlans/BrochurePlans';

const SeoTools = () => {
  return(
        <>
        <Navbar/>
        <div className="container offset-container">
      <div className="row">
        <div className="col-xl-12 col-xs-6">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white mb-5">SEO Tools</h1>
            </div>
            <div className="">
               <Link to="/comingsoon" className=""></Link> 
            </div>
          </div>
        </div>
      </div>

    <BrochureCard/>
    <BrochureFacts/>
    {/* <BrochurePlans/> */}
    </div>
    </>
  );
}

export default SeoTools;