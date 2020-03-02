import React from 'react';
import ToggleSwitchBtn from '../ToggleSwitchBtn/ToggleSwitchBtn';
import { Link, NavLink } from "react-router-dom";



const SettingsComponent = () => {

  const questionMarkIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/question-circle.svg';


  return(
    <>
      <h2 className="mb-4 font-weight-bold">Settings</h2>
      <div className="card bg-white border-0 box-shadow mb-5">
        <div className="card-body mx-4 my-4">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="font-weight-bold mb-4">Server Information</h4>
              <div className="mb-4">
              <p className="pr-4">Need assistance moving a domain you own from another hosting company to your HostGator account? <br/><Link to="">Request a migration</Link> from our support staff.</p>
              </div>

             
            </div>
            <div className="col-lg-4">
              <h4 className="font-weight-bold mb-4">cPanel Login</h4>
              <div className="mb-4">
                <h6 className="font-weight-bold">Username</h6>
                <p>dbottom</p>
              </div>
              <div className="mb-4">
              <h6 className="font-weight-bold">Password</h6>
              <div className="d-flex"><p className="mr-2">**************</p><a href="" className="link">Change</a></div>
              </div>

            </div>
            <div className="col-lg-4">

              <h4 className="font-weight-bold mb-4">Nameservers</h4>
              <div className="mb-4">
                <h6 className="font-weight-bold">Nameserver 1</h6>
                <p>ns6033.hostgator.com</p>
              </div>
              <div className="mb-4">
                <h6 className="font-weight-bold">Nameserver 2</h6>
                <p>ns6034.hostgator.com</p>
              </div>
            </div>
            <div className="col-lg-4">
               <div className="mb-3">
                <h6 className="font-weight-bold">Primary Domain</h6>
                <div className="d-flex"><p className="mr-2">scoobydoo.com</p><a href="" className="link">Change</a></div>
              </div>

              <div className="mb-4">
                <h6 className="font-weight-bold">Server</h6>
                <p className="">gator3017.hostgator.com</p>
              </div>
              <div className="mb-4">
                <div className="d-flex">
                  <div>
                    <div className="font-weight-bold mr-2">Shell Access</div>
                  </div>
                  <div>
                    <img src={ questionMarkIcon } />
                  </div>
                </div>
                <ToggleSwitchBtn /> 
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card box-shadow border-0 bg-grey-20">
                <div className="card-body mx-4 my-4">
                  <h4 className="font-weight-bold mb-4">Cancel Hosting</h4>
                  <p className="">Don't need hosting anymore? All add-ons and websites associated with this hosting package will aslo be canceled.</p>
                  <Link to="/" className="primary-red">Cancel this hosting</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsComponent;