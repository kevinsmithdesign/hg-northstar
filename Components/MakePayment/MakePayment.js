import React from 'react';
import { Link, NavLink } from "react-router-dom";


const MakePayment = () => {

const creditCardIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Visa.svg';
const warningIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/warning-triangle-2.svg';
const questionMarkIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/question-circle.svg';


  return(
    <>
    <div className="card border-0 box-shadow mb-4">
      <div className="card-body mx-4 my-4">
        <h4 className="font-weight-bold mb-3">Current Invoice</h4>
        <p className="mb-0">No payments due. Invoices are generated <span className="font-weight-bold">5 days </span>before payment is due.</p>
      </div>
    </div>

    <div className="card border-0 box-shadow mb-5">
      <div className="card-body mx-4 my-4">


        <div className="d-flex">
          <div className="flex-fill">
             <div className="d-flex mb-4">
          <div>
            <h4 className="font-weight-bold mr-2">Pre-pay Packages</h4>
          </div>
          <div>
            <img src={ questionMarkIcon } />
          </div>
        </div>
          
          </div>
          <div>
            <input placeholder="Show all (8)" className="form-control" />
          </div>
        </div>   

        <div className="mobile">
        <div className="d-flex d-flex-responsive-md mb-4">
          <div className="description">Description</div>
          <div className="last-payment">Last payment</div>
          <div className="payment-method">Payment method</div>
          <div className="next-payment">Next payment due</div>
        </div>
        </div>

        <div className="d-flex rounded d-flex-responsive-md">
          <div className="description">
            <div className="mobile-content-padding">
              <h6>mydomain.com</h6>
              <p className="mb-0">Domain registration</p>
            </div>
          </div>
          <div className="last-payment mobile-content-padding">
            <p className="mb-0">Feb 2, 2019</p>
            <Link to="/">View invoice</Link>
          </div>
          <div className="d-flex align-items-center payment-method mobile-content-padding">
              <span className="font-weight-bold">
                <img src={ creditCardIcon } className="mr-1" /> 
                <span className="mr-2 primary-red">VISA 8788</span>
                <img src={ warningIcon } />
              </span>
          </div>
          <div className="next-payment">
            <p className="mb-0"><span className="mr-1">Feb 2, 2020</span><img src={ warningIcon } /></p>
            <span><b className="mr-1">$9.87</b> <Link to="/">Pay now</Link></span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default MakePayment;