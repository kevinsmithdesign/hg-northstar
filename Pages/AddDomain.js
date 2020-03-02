import React from 'react';
import Navbar from '../Components/Navbar/Navbar';


const AddDomain = () => {
  return(
    <>
    <Navbar />
    <div className="container offset-container">
            <div className="row">
        <div className="col-xl-12 col-xs-6">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white mb-5">Add Domain</h1>
            </div>
            <div className="">
              
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="col-lg-8">

      <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
              <div class="form-group">
                <input type="email" class="form-control" id="firstName" placeholder="Giddyup.com" />
              </div>
        </div>
      </div>
      </div>
      <div className="col-lg-4">
          <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold mb-4">Your Order</h4>
          <div className="d-flex mb-4">
            <div className="flex-fill">
              <p className="mb-0">Cloud-Hosting</p>
              <p className="text-secondary">Hatchling - 3 years</p>
            </div>
            <div className="font-weight-bold">$99.00</div>
          </div>
            <div className="d-flex mb-4">
            <div className="flex-fill">
              <p className="font-weight-bold">Total</p>
            </div>
            <div className="font-weight-bold">$99.00</div>
          </div>
          <div className="text-center">
            <div className="btn btn-primary px-5 py-2">Checkout</div>
          </div>
        </div>
        </div>
       </div>
      </div>

    </div>
    </>
  );
}

export default AddDomain;