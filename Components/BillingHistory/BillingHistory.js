import React from 'react';
import { Link, NavLink } from "react-router-dom";

// import TableHeaderComponent from '../TableComponent/TableHeaderComponent';
// import TableTitleComponent from '../TableComponent/TableTitleComponent';
// import TableLineItem from '../TableComponent/TableLineItem';



const BillingHistoryComponent = () => {

  const creditCardIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Visa.svg';
  const warningIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/warning-triangle-2.svg';
  const questionMarkIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/question-circle.svg';


  return(
    <>
          <div className="card border-0 box-shadow mb-5">
      <div className="card-body mx-4 my-4 px-3">


        <div className="d-flex mb-4 pl-3">
          <div className="flex-fill">
            <h4 className="font-weight-bold mr-2">Billing History</h4>
          </div>
          <div>
            <input placeholder="Search" className="form-control" />
          </div>
        </div>

        <div className="d-flex mb-4 pl-3">
          <div className="flex-fill">Filter by <b>All</b></div>
          <div>1 - 10 of 1,250</div>
        </div>
          
      
    

        <div className="mobile">
        <div className="d-flex d-flex-responsive-md mb-4 px-3">
          <div className="description">Description</div>
          <div className="last-payment">Payment method</div>
          <div className="payment-method">Date paid</div>
          <div className="next-payment">Payment amount</div>
        </div>
        </div>

        <div className="d-flex rounded d-flex-responsive-md table-even-row px-3 py-2">
          <div className="description">
            <div className="mobile-content-padding">
              <h6>mydomain.com</h6>
              <p className="mb-0">Domain registration</p>
            </div>
          </div>
          <div className="d-flex align-items-center last-payment mobile-content-padding">
            <span className="">
                <img src={ creditCardIcon } className="mr-1" /> 
                <span className="mr-2">8788</span>
              </span>
          </div>

          <div className="payment-method mobile-content-padding d-flex align-items-center">
            <p className="mb-0">Feb 2, 2019</p>
          </div>
      
          <div className="next-payment">
            <p className="mb-0">$7.10</p>
            <Link to="/">View invoice</Link>
          </div>
        </div>

      </div>
    </div>
    </>
  );

}

export default BillingHistoryComponent;