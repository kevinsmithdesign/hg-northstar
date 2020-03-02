{/* BILLING COMPONENT AND BILLING ARE DIFFERENT. BILLING NEEDS TO BE UPDATED TO BILLING PAGE. BILLING COMPONENT UPDATES WITH SECONDARY NAV AND IS NOT A PAGE. */}
import React from 'react';
import HostingPlanCard from '../HostingPlanCard/HostingPlanCard';


const BillingComponent = () => {
  return(
    <>
      <h2 className="mb-4 font-weight-bold">Billing</h2>
          <HostingPlanCard 
              TitleOne="Hosting Plan" 
              SubtitleOne="Shared / Baby"
              TitleTwo="Package ID"
              SubtitleTwo="3748589"
              TitleThree="Renewal Date"
              SubtitleThree="July 8, 2020"
              TitleFour="Renewal Amount"
              SubtitleFour="$143.40" 
              
              TitleThreeMobile="Renewal Date"
              SubtitleThreeMobile="July 8, 2020"
              TitleFourMobile="Renewal Amount"
              SubtitleFourMobile="$143.40"

              planBtn="yes"/>
    </>
  );
}

export default BillingComponent;
