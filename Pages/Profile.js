import React from 'react';
import Navbar from '../Components/Navbar/Navbar';


const Profile = () => {
  return(
    <>
        <Navbar/>
        <div className="container offset-container">

          <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">My Profile</h1>
            </div>
            <div className="">
            </div>

          </div>
        </div>
      </div>

<div className="card border-0 box-shadow">
  <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold mb-4">Personal Information</h4>

            <div className="row">
            <div className="col-lg-6">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="email" class="form-control" id="firstName" placeholder="First Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="email" class="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label for="streetAddress">Street Address</label>
                <input type="email" class="form-control" id="streetAddress" placeholder="Street Address" />
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="email" class="form-control" id="lastName" placeholder="Last Name" />
              </div> */}
              <div className="mt-5">
                <a href="" className="link font-weight-bold">+ Add second address line</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label for="country">Country</label>
                <input type="email" class="form-control" id="country" placeholder="Country" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="lastName">State</label>
                <input type="email" class="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label for="city">City</label>
                <input type="email" class="form-control" id="city" placeholder="City" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="zip">Zip</label>
                <input type="email" class="form-control" id="zip" placeholder="Zip" />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="email" class="form-control" id="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" />
              </div>
            </div>
          </div>

  </div>
</div>
</div>
</>
  );
}

export default Profile;