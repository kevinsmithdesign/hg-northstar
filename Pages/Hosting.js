import React, { useState } from 'react';
import styled from "styled-components";

import Navbar from '../Components/Navbar/Navbar';


// import { Tabs, Tab, Panel } from '@bumaga/tabs';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';


//import Navbar from '../Components/Navbar/Navbar';
import HostingCard from '../Components/HostingCard/HostingCard';
import HostingPlanCard from '../Components/HostingPlanCard/HostingPlanCard';
import SecondaryNav from '../Components/SecondaryNav/SecondaryNav';
import MyProducts from '../Components/MyProducts/MyProducts';
import BillingComponent from '../Components/BillingComponent/BillingComponent';
import SettingsComponent from '../Components/SettingsComponent/SettingsComponent';
import CPanelComponent from '../Components/CPanelComponent/CPanelComponent';


import { Link, NavLink } from "react-router-dom";


{/* TABS ACTIVE STATE CODE STARTS */}
const cn = (...args) => args.filter(Boolean).join(' ')
const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <div className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </div>
  );
}
{/* TABS ACTIVE STATE CODE ENDS */}

const LightTabs = styled.div`
    .tab {
      padding:8px 32px;
      font-weight:bold;
      border-radius:30px;
      text-decoration: none !important;
      color:#444;
      cursor:pointer;
    }

    .tab.active {
      background-color:#c2e2ff;
      color:#0069FF;
      cursor: default;
    }
`

const Hosting = () => {
  const [hideHostingPackages, setHideHostingPackages] = useState(true);
  return(
      <div>
      <Navbar/>
        <div className="container offset-container">

      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Hosting</h1>
            </div>
            <div className="d-flex d-flex-responsive-md">
               <div className="mobile-content-padding"> 
                  <Link to="/" className="btn btn-outline-light mr-4">Launch cPanel</Link> 
               </div>
               <div>
                <Link to="/" className="btn btn-outline-light">Add Hosting</Link> 
               </div>
            </div>
          </div>
        </div>
      </div>

    { hideHostingPackages ? 
    <div className="row">
      <div className="col-lg-12">
        <HostingCard domainName="mywebsiteisamazing.com"
                     domainIdSubTitle="ID" 
                     domainId="5682091"
                     renewDateSubTitle="Renews" 
                     renewDate="Jul 8, 2020" 
                     accountTypeSubTitle="Type"
                     accountType="Shared" 
                     status="Actived"
                     domainState="active"
                     cpanelLogin="true"
                     hideHostingPackagesProps={ () => setHideHostingPackages(hideHostingPackages = false) } />
      </div>
      <div className="col-lg-12">
        <HostingCard domainName="turbodesign.com"
                     domainIdSubTitle="ID" 
                     domainId="3320916"
                     renewDateSubTitle="Renews"  
                     renewDate="Oct 9, 2020" 
                     accountTypeSubTitle="Type"
                     accountType="Shared" 
                     status="Actived"
                     domainState="active"
                     cpanelLogin="true"
                     hideHostingPackagesProps={ () => setHideHostingPackages(hideHostingPackages = false) } />
      </div>      
      <div className="col-lg-12">
        <HostingCard domainName="mysticalcreatures.com"
                     domainIdSubTitle="ID" 
                     domainId="7756543"
                     renewDateSubTitle="Renews" 
                     renewDate="Oct 9, 2020"
                     accountTypeSubTitle="Type"
                     accountType="Shared"
                     status="Actived"
                     cpanelLogin="false"
                     hideHostingPackagesProps={ () => setHideHostingPackages(hideHostingPackages = false) } />
      </div>
    </div> 
    : 
    <div>
      <div className="row">
        <div className="col-12">
          {/* <h3 className="text-white">Scoobydoo.com</h3> */}
          <HostingPlanCard 
              TitleOne="Plan ID" 
              SubtitleOne="SH-3748589"
              TitleTwo="Plan Type"
              SubtitleTwo="Shared / Baby"
              TitleThree="Renewal Date"
              SubtitleThree="July 8, 2020 for $143.40"
              TitleFour="Blogs"
              SubtitleFour="1/3" 
              
              TitleThreeMobile="Renewal Date"
              SubtitleThreeMobile="July 8, 2020"
              TitleFourMobile="Blogs"
              SubtitleFourMobile="1/3"

              planBtn="no"/>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
      
            {/* <SecondaryNav/> */}
            <LightTabs>
            <Tabs>
              <div className="d-flex mb-5 mt-1 hosting-sub-settings-container">
                <Tab><div className="">My Products</div></Tab>
                <Tab><div className="">Settings</div></Tab>
                {/* <Tab><div className="">Billing</div></Tab> */}
                <Tab><div className="">cPanel</div></Tab>
              </div>
              <Panel><MyProducts /></Panel>
              <Panel><SettingsComponent /></Panel>
              {/* <Panel><BillingComponent /></Panel> */}
              <Panel><CPanelComponent /></Panel>
            </Tabs>
            </LightTabs>

        </div>
      </div>

    </div> 
    }
</div>
    </div>
  );
}

export default Hosting;