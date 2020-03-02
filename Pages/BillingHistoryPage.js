import React from 'react';
import TableHeaderComponent from '../Components/TableComponent/TableHeaderComponent';
import TableLineItem from '../Components/TableComponent/TableLineItem';

const BillingHistoryPage = () => {
  return(
    <>
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Billing History</h1>
            </div>
            <div className="">
            </div>

          </div>
        </div>
      </div>

      <div className="card border-0 box-shadow mb-5">
        <div className="card-body mx-4 mt-4">
          <TableHeaderComponent titleRowOne="Description" titleRowTwo="Invoice" titleRowThree="Duew Date" titleRowFour="Amount" />
          <TableLineItem rowOne="Dedicated" rowTwo="12341234" rowThree="Dec 15, 2019" rowFour="$24.99" />
          <TableLineItem rowOne="Dedicated" rowTwo="12341234" rowThree="Dec 15, 2019" rowFour="$24.99" />
          <TableLineItem rowOne="Dedicated" rowTwo="12341234" rowThree="Dec 15, 2019" rowFour="$24.99" />
          <TableLineItem rowOne="Dedicated" rowTwo="12341234" rowThree="Dec 15, 2019" rowFour="$24.99" />
        </div>
      </div>

      </>
  );
}

export default BillingHistoryPage;