import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


const HostingCard = ({ domainName, domainIdSubTitle, renewDateSubTitle, domainId, renewDate, accountType, accountTypeSubTitle, status, hideDomainPackagesProps, hideHostingPackagesProps, domainState, cpanelLogin, domainCard  }) => {



  return(
      <div className="card mb-4 border-0 box-shadow">
        <div className="card-body mx-4 my-3">
          <div className="d-flex d-flex-responsive">
            <div className="flex-fill d-flex align-items-center mobile-content-padding">
              <div className="mb-0">
                <div className="d-flex align-items-center">
                <div className="domain-status">
                  { domainState === "active" ?
                  <div className="domain-status-active mr-3"></div>:
                  <div className="domain-status-not-active mr-3"></div>}
                </div>
                  <h5 className="mb-0 domain-ellipsis">{domainName}</h5>
                </div>
              </div>
            </div>

            <div className="flex-fill d-flex align-items-center mobile-content-padding">
              <div className="mr-5">
                <div className="d-flex justify-content-center flex-column">
                  <div className="text-secondary mb-0">{domainIdSubTitle}</div> 
                  <div className="font-weight-bold text-dark">{domainId}</div>
                </div>
              </div>

              <div className="mr-5">
                <div className="text-secondary mb-0">{ renewDateSubTitle }</div> 
                <div className="font-weight-bold text-dark">{renewDate}</div>
              </div>

              <div className="">
                <div className="text-secondary mb-0">{ accountTypeSubTitle } </div>
                <div className="font-weight-bold text-dark">{accountType}</div>
              </div>
            </div>

       

      
    
            <div className="">
              { cpanelLogin === "true" ?
              <div>
                <button className="btn btn-outline-primary mr-3">cPanel</button> 
                <button className="btn btn-primary mr-3" onClick={ hideHostingPackagesProps }>Manage</button> 
              </div>
              :
              <div>
                {/* <button className="btn btn-transparent mr-3 disabled">cPanel</button> */}
                <div className="d-flex">
                <div>
                  <div className="placeholder-button mr-3 mobile-lg"></div>
                </div>
                <div>
                  <button className="btn btn-primary mr-3" onClick={ hideHostingPackagesProps }>Manage</button>
                </div>
                </div> 
              </div> }
            </div>
          </div>
        </div>
      </div> 
  );
}

export default HostingCard;