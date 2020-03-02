import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, NavLink } from "react-router-dom";


const ViewInvoicePage = () => {
  return(
    <>
    <Navbar/>
    <div className="container offset-container">
      <div className="row">
        <div className="col-xl-12 col-xs-6">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white mb-5">View Invoice</h1>
            </div>
            <div className="">
               <Link to="/comingsoon" className=""></Link> 
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card border-0 box-shadow mb-5">
          <div className="card-body mx-4 my-4">
            <div className="d-flex">
              <div className="flex-fill mb-4">
                <h4 className="font-weight-bold">Invoice for mydomain.com</h4>
              </div>
              <div>
                <Link to="/comingsoon" className="btn btn-outline-primary mr-3">Email</Link> 
              </div>
              <div>
                <Link to="/comingsoon" className="btn btn-outline-primary">Print</Link> 
              </div>
            </div>

            <div className="d-flex pb-4 border-bottom">
              <div className="flex-fill">
                <p className="text-secondary">Invoice ID</p>
                <h5 className="font-weight-bold">2341415</h5>
              </div>
              <div className="flex-fill">
                <p className="text-secondary">Customer ID</p>
                <h5 className="font-weight-bold">30036899</h5>
              </div>
              <div className="flex-fill">
                <p className="text-secondary">Date Paid</p>
                <h5 className="font-weight-bold">Oct. 23, 2020</h5>
              </div>
              <div className="flex-fill">
                <div className="text-right">
                  <p className="text-secondary">Payment Method</p>
                  <h5>VISA 3655</h5>
                </div>
              </div>
            </div>
            <div className="d-flex pt-4">
                    <div className="flex-fill max-width-view-invoice">
                <p className="text-secondary">Description</p>
                <h5 className="font-weight-bold">23414325</h5>
              </div>
              <div className="flex-fill">
                <p className="text-secondary">Hosting ID</p>
                <h5 className="font-weight-bold">SH-633 2322</h5>
              </div>
              <div className="flex-fill">
                 <p className="text-secondary"></p>
                <h5 className="font-weight-bold"></h5> 
              </div>
              <div className="flex-fill">
                <div className="text-right">
                  <p className="text-secondary">Amount Paid</p>
                  <h5 className="font-weight-bold">$11.95</h5>
                  <h5 className="font-weight-bold">$3.00</h5>    
                  <h5 className="font-weight-bold">$14.95</h5>    
                  <h5 className="font-weight-bold">$14.95</h5>
                </div>
              </div>
    

            </div>
          </div>
        </div>
      </div>

      </div>
      </>
  );
}

export default ViewInvoicePage;