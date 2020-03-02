import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, NavLink } from "react-router-dom";

const UpdateCreditCard = () => {
  return(
        <>
    <Navbar/>
    <div className="container offset-container">
      <div className="row">
        <div className="col-xl-12 col-xs-6">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white mb-5">Edit Credit Card</h1>
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
            <h4 className="font-weight-bold">Credit Card Info</h4>
            <p className="mb-4">This card has expired. Please update as services may be inturrupted.</p>
            <div className="d-flex mb-4">
              <div className="flex-fill pr-4">
                <label for="">Credit Card Number</label>
                <input className="form-control" />
              </div>
              <div className="pr-4">
                <label for="exampleInputEmail1">Exp Date</label>
                <input className="form-control" />
              </div>
              <div className="">
                <label for="exampleInputEmail1">CC Code</label>
                <input className="form-control" />
              </div>
              <div className="flex-fill"></div>
            </div>

            <label for="exampleInputEmail1">Name on card</label>
            <input className="form-control card-name mb-5"/>

            <div className="text-center">
              <Link to="" className="btn btn-outline-primary mr-4">Cancel</Link>
              <Link to="" className="btn btn-primary">Save changes</Link>
            </div>
      

    
    

            </div>
          </div>
        </div>
      </div>

      </>
  );
}

export default UpdateCreditCard;