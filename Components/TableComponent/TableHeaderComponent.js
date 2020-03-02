import React from 'react';

const TableHeaderComponent = (props) => {
  return(
        <div className="d-flex">
          <div className="table-head-fill">
            <p className="text-secondary ">{props.titleRowOne}</p>
          </div>
          <div className="table-head-fill">
            <p className="text-secondary">{props.titleRowTwo}</p>
          </div>
          <div className="table-head-fill">
            <p className="text-secondary">{props.titleRowThree}</p>
          </div>
          <div className="table-head-fill">
            <p className="text-secondary">{props.titleRowFour}</p>
          </div>
        </div>
  );
}

export default TableHeaderComponent;