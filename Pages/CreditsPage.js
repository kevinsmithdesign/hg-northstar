import React from 'react';

const CreditsPage = () => {
  return(
    <>
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Credits</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="mb-4 font-weight-bold">Credits</h4>
          <p className="mb-4">Credits available for you account will be shown here. HostGator will apply credits to first available due invoice.</p>
          <h5 className="font-weight-bold text-center">Sorry, no credits at this time</h5>
        </div>
      </div>

      </>
  );
}

export default CreditsPage;