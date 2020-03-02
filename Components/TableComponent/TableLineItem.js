import React from 'react';
import { Link, NavLink } from "react-router-dom";


const TableLineItem = (props) => {
  return(
    <div className="d-flex mb-3">
      <div className="table-head-fill">
        <h5>{props.rowOne}</h5>
      </div>
      <div className="table-head-fill">
        <h5>{props.rowTwo}</h5>
      </div>
      <div className="table-head-fill">
        <h5>{props.rowThree}</h5>
      </div>

      <div className="table-head-fill">
        { props.rowFour === 'Pay Now' ? <Link to="/" className="link font-weight-bold">Pay Now</Link> : '' }
        { props.rowFour === 'Pay Early' ? <Link to="/" className="link font-weight-bold">Pay Early</Link> : '' }
      </div> 
   
    </div>
  );
}

export default TableLineItem;