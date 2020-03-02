import React from 'react';
import { Link, NavLink } from "react-router-dom";
import ProgressBar from '../Components/ProgressBar/ProgressBar';
// import Templates from '../Data/templates.json';


const ChooseTemplatePage = () => {
  return(
      <div className="container">
        <div className="my-5">
          <ProgressBar progressStep={3} />
        </div>
        <h1 className="text-center font-weight-bold mb-5">Choose Template</h1>
        <div className="row">
          <div className="col-lg-4">
            <Link to="/select-template">
            <div className="card bg-white border-0 box-shadow">
              <div className="card-body">
                <img src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Outdoors.png" className="template-img" />
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/select-template">
            <div className="card bg-white border-0 box-shadow">
              <div className="card-body">
                <img src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Outdoors.png" className="template-img" />
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/select-template">
            <div className="card bg-white border-0 box-shadow">
              <div className="card-body">
                <img src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Outdoors.png" className="template-img" />
              </div>
            </div>
            </Link>
          </div>
        </div>
      <div className="my-5">
        <Link to="/feature-type" className="btn btn-secondary mr-3">Previous</Link>
        {/* <Link to="/choose-template" className="btn btn-primary">Next</Link> */}
      </div>


      {/*  { Templates.map((temp, index) => {
        return <p>{temp.id}</p>
      })}   */}




      </div>
  );
}

export default ChooseTemplatePage;