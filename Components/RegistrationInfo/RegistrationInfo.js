import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';

const RegistrationInfo = () => {

  const [moreContactInfo, setMoreContactInfo] = useState('off');
  const allContactInfo = () => {
    setMoreContactInfo(moreContactInfo === 'off' ? 'on' : 'off' );
  }

  return(
    <>
      <div className="card border-0 box-shadow">
        <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold mb-4">Update Registration Information</h4>
          <div className="d-flex">
            <div className="mr-3" onClick={ allContactInfo }>
              <CheckBox/>
            </div>
            <div>
              <p className="">Use this info for all contact types</p>
            </div>
          </div>

          <h4 className="font-weight-bold">Admin Contact</h4>


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

          { moreContactInfo === 'on' ?

          <div className="mt-5">
          <h4 className="font-weight-bold">Tech Contact</h4>

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

                    <h4 className="font-weight-bold mt-5">Billing Contact</h4>


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

          <div className="text-center mt-4">
            <button className="btn btn-outline-primary mr-4">Cancel</button>
            <button className="btn btn-primary">Save</button>
          </div> 
       

        </div> 
        
        : '' }
        </div>
      </div>
    </>
  );
}

export default RegistrationInfo;