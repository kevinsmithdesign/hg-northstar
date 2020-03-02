import React from 'react';
import { Link, NavLink } from "react-router-dom";

const PayPal = () => {
  return(
    <>
         <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="mb-5 font-weight-bold">PayPal</h4>
          <div className="text-center">
            <h6 className="font-weight-bold mb-4">To start a billing agreement with us, click the button below.</h6>
            <p className="mb-4">This action will require you to login to your PayPal account and accept a billing agreement for future automatic payments.</p>
            <button className="btn btn-primary px-4 py-2 mb-3">Link PayPal Account</button>
            <div className="">
            <Link to="/">Learn more</Link>
            </div>
          </div>    
        </div>
      </div>
    </>
  );
}

export default PayPal;