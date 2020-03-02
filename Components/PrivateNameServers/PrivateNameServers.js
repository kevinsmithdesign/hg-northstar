import React from 'react';

const PrivateNameServers = () => {
  return(
    <>
      <h2 className="mb-4 font-weight-bold">Private Name Servers</h2>
        <div className="card border-0 box-shadow">
          <div className="card-body mx-4 my-4">
            <h4 className="font-weight-bold">Please Note:</h4>
            <p className="mb-4">Private name servers are not supported on Shared Hosting, you must have a Reseller, VPS or Dedicated package in order to utilize this section. If you are not familiar with private name servers, this article will provide an explanation and an overview of the required steps for registering private name servers.</p>

            <div className="row">
              <div className="col-lg-6">
                <div class="form-group">
                  <input type="email" 
                        className="form-control" 
                        id="privateNameServers" 
                        placeholder="Private Name Servers" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="link my-2 font-weight-bold">+ Add</div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-primary px-5">Save</button>
            </div>

          </div>
        </div>
    </>
  );
}

export default PrivateNameServers;