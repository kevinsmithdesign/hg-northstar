import React from 'react';
import TableTitleComponent from '../Components/TableComponent/TableTitleComponent';
import TableHeaderComponent from '../Components/TableComponent/TableHeaderComponent';
import TableLineItem from '../Components/TableComponent/TableLineItem';

const CreditCardPage = () => {
  return(
    <>
     <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Credit Cards</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 box-shadow mb-5">
        <div className="card-body mx-4 mt-4">
          <TableHeaderComponent titleRowOne="Description" titleRowTwo="Due Date" titleRowThree="Amount" titleRowFour="" />
          <TableLineItem rowOne="SiteLock" rowTwo="Dec 2, 2019" rowThree="$35.29" rowFour="" />
        </div>
      </div>
      


      </>
  );
}

export default CreditCardPage;