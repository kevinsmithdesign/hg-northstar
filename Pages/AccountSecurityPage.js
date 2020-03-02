import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const AccountSecurityPage = () => {
  return(
    <>
    <Navbar/>
    <div className="container offset-container">

      <div className="card border-0 box-shadow mb-5">
        <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold mb-4">Login Information</h4>
          <div className="row">
            <div className="col-lg-6">
              <div class="form-group">
                <label for="firstName">Email</label>
                <input type="email" class="form-control" id="firstName" placeholder="Email" />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="lastName">Password</label>
                <input type="email" class="form-control" id="lastName" placeholder="Password" />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="form-group">
                <label for="streetAddress">Pin</label>
                <input type="email" class="form-control" id="streetAddress" placeholder="Pin" />
              </div>
            </div>
      
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary mr-4">Cancel</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>

       <div className="card border-0 box-shadow mb-5">
        <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold mb-4">  Regional Tax Registration Numbers</h4>
          <p className="mb-5">Some countries and credit card issuers require customers to provide additional information when purchasing goods and services. The different regional registrations we support are listed below to allow customers in those regions the ability to manage that information.</p>
          <h4 className="font-weight-bold mb-4">Brazil</h4>

          <p>The Cadastro de Pessoas Físicas (CPF; Portuguese for "Natural Persons Register") is the Brazilian individual taxpayer registry identification, a number attributed by the Brazilian Federal Revenue to both Brazilians and resident aliens who pay taxes or take part, directly or indirectly, in activities that provide revenue for any of the dozens of different types of taxes existing in Brazil.</p>
          <button className="btn btn-outline-primary px-5 mb-5">Add</button>

          <h4 className="font-weight-bold mb-4">Argentine Republic</h4>
          <p>The Single Tax Identification Code ( CUIT ) is a key that is used in the tax system of the Argentine Republic to be able to unequivocally identify the autonomous natural or juridical persons, susceptible of being taxed.</p>
          <button className="btn btn-outline-primary px-5 mb-5">Add</button>

          <h4 className="font-weight-bold mb-4">United States of America</h4>
          <p>Tax-exempt status may be available for some qualifying businesses,  governments, non-profit entities, and educational institutions. US sales tax exemptions are granted at the state level and you must provide Hostgator with a valid tax registration number to sign up for tax  exemption.</p>
          <button className="btn btn-outline-primary px-5 mb-5">Add</button>

           <div className="text-center mt-4">
            <button className="btn btn-outline-primary mr-4">Cancel</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
       </div> 
      </div>
    </>
  );
}

export default AccountSecurityPage;