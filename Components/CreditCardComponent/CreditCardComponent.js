import React from 'react';
import { Link, NavLink } from "react-router-dom";

// import TableTitleComponent from '../TableComponent/TableTitleComponent';
// import TableHeaderComponent from '../TableComponent/TableHeaderComponent';
// import TableLineItem from '../TableComponent/TableLineItem';

const CreditCardComponent = () => {

    const creditCardIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Visa.svg';
  const warningIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/warning-triangle-2.svg';
  const questionMarkIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/question-circle.svg';

  return(
    <>
       <div className="card border-0 box-shadow mb-5">
      <div className="card-body mx-4 my-4 px-3">


    
        <h4 className="font-weight-bold mr-2 mb-4">Credit Cards</h4>

        <div className="mobile">
        <div className="d-flex d-flex-responsive-md mb-4 px-3">
          <div className="cc-icon-row"></div>
          <div className="flex-fill cc-info-row">Card number</div>
          <div className="flex-fill exp-date">Exp date</div>
          <div className="">Actions</div>
        </div>
        </div>

        <div className="d-flex rounded d-flex-responsive-md table-even-row px-3 py-2">

          <div className="cc-icon-row d-flex align-items-center justify-content-center">
            <img src={ creditCardIcon } />
          </div>

          <div className="flex-fill cc-info-row">
            <div className="mobile-content-padding">
              <h6>VISA 8744</h6>
              <p className="mb-0">Primary payment method</p>
            </div>
          </div>
          <div className="d-flex align-items-center mobile-content-padding exp-date">
            <span className="flex-fill">
                <span className="mr-2 primary-red">02 / 2020</span>
                <img src={ warningIcon } className="mr-1" /> 

              </span>
          </div>

      
          <div className="d-flex align-items-center">
            <Link to="/" className="mr-3">Remove</Link>
            <Link to="/">Update</Link>
          </div>
        </div>

      </div>
    </div>




    </>
  );
}

export default CreditCardComponent;