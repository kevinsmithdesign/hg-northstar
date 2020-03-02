import React from 'react';
import { Link, NavLink } from "react-router-dom";

const DomainCard = ({ domainName, domainState, renewDate, amountDue, hideDomainPackagesProps }) => {
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
                  <div className="text-secondary mb-0">Renew Date</div> 
                  <div className="font-weight-bold text-dark">{renewDate}</div>
                </div>
              </div>

              <div className="mr-5">
                <div className="text-secondary mb-0">Next Amount Due</div> 
                <div className="font-weight-bold text-dark">{amountDue}</div>
              </div>
            </div>

    
            <div className="">
          
              <div>
                <button className="btn btn-primary" onClick={ hideDomainPackagesProps }>Manage</button>
              </div>
              
            </div>
          </div>
        </div>
      </div> 
  );
}

export default DomainCard;