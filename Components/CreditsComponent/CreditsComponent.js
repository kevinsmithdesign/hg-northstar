import React from 'react';

const CreditsComponent = () => {
  return(
    <>
      <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="mb-5 font-weight-bold">Credits</h4>
          <div className="text-center">
            <h6 className="font-weight-bold text-center">Sorry, no credits at this time</h6>
            <p className="mb-4">When available, credits are automatically applied to your next payment due.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditsComponent;