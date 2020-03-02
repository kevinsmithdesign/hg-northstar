import React from 'react';
import Navbar from '../Components/Navbar/Navbar';


const HelpSupportPage = () => {
  return(
    <>
    <Navbar/>
        <div className="container offset-container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex">
                <div className="flex-fill">
                  <h1 className="text-white">Help & Support</h1>
                </div>
                <div className="">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="card border-0 box-shadow">
                <div className="card-body my-4 mx-4">
                  <h4 className="text-center mb-4 mt-3 font-weight-bold">Chat with a real, live human</h4>
                  <div className="text-center font-weight-bold">
                    <button className="btn btn-primary">Start Live Chat</button>
                  </div>
                </div>
              </div>
            </div>

             <div className="col-lg-7">
              <div className="card border-0 box-shadow ">
                <div className="card-body text-center my-4 mx-4">
                  <h4 className=" font-weight-bold mb-4">Call on the actual telelphone</h4>
                  <p>Tool Free</p>
                  <p className="text-primary">844-945-3310</p>
                  <p>Outside of USA</p>
                  <p className="text-primary">00 +1-713-574-5287</p>
                </div>
              </div>
            </div>
          </div>


        </div>
    </>
  );
}

export default HelpSupportPage;