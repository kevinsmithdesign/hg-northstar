import React from 'react';

const TableTitleComponent = (props) => {
  return(
        <div className="">
          <h4 className="mb-4 font-weight-bold">{props.tableTitle}</h4>
        </div>
  );
}

export default TableTitleComponent;