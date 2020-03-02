import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import RadioBtn from '../Components/RadioBtn/RadioBtn';


const PayBillPage = () => {
  return(
    <>
      <Navbar/>
      <div className="container offset-container">
        <div className="row">
          <div className="col-xl-12 col-xs-6">
            <div className="d-flex">
              <div className="flex-fill">
                <h1 className="text-white mb-5">Make a Payment</h1>
              </div>
              <div className="">
                {/* <Link to="/comingsoon" className="btn btn-outline-light">Pay Bill</Link>  */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="card border-0 box-shadow mb-4">
              <div className="card-body mx-4 my-4">
                <h4 className="font-weight-bold mb-4">Select Payment Method</h4>
                <RadioBtn radioBtnText="VISA 8566" />
                <RadioBtn radioBtnText="AMEX 5877" />
                <RadioBtn radioBtnText="PayPal" />
                <Link to="" className="link font-weight-bold">+ Add New</Link>


              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 box-shadow mb-5">
              <div className="card-body mx-4 my-4">
                <h4 className="font-weight-bold mb-4">Description</h4>
                <div className="d-flex mb-4">
                  <div className="flex-fill">SiteLock Plus</div>
                  <div className="font-weight-bold">$11.95</div>
                </div>
                <div className="d-flex mb-2">
                  <div className="flex-fill">Tax</div>
                  <div className="font-weight-bold">$3.00</div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-fill">SiteLock Plus</div>
                  <div className="font-weight-bold">$14.95</div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-fill">
                    <div className="font-weight-bold">Total</div>
                  </div>
                  <div className="font-weight-bold">$14.95</div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary px-5 py-2">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default PayBillPage;