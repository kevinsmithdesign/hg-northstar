import React from 'react';

const PayPalPage = () => {
  return(
    <>
    <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">PayPal</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="mb-4 font-weight-bold">PayPal Agreement</h4>
          <p className="mb-4">Want to automatically pay all of your HostGator incoices with PayPal? Start your PayPal agreement today and accept a billing agreement for future automatic payments.</p>
          <div className="text-center">
          <button className="btn btn-primary px-5 py-3">Start PayPal Agreement</button>
          </div>
        </div>
      </div>
      </>
  );
}

export default PayPalPage;