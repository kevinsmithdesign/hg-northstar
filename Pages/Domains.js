import React, { useState } from 'react';
import styled from "styled-components";

import Navbar from '../Components/Navbar/Navbar';

import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { Link, NavLink } from "react-router-dom";
import DomainCard from '../Components/DomainCard/DomainCard';
import WebsitesCard from '../Components/WebsitesCard/WebsitesCard';
import HostingPlanCard from '../Components/HostingPlanCard/HostingPlanCard';
import RegistrationInfo from '../Components/RegistrationInfo/RegistrationInfo';
import NameServers from '../Components/NameServers/NameServers';
import PrivateeNameServers from '../Components/PrivateNameServers/PrivateNameServers';


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






const Domains = () => {

  const [hideDomainPackages, setHideDomainPackages] = useState(true);



  return(
    <div>
      <Navbar/>
        <div className="container offset-container">

      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Domains</h1>
            </div>
            <div className="d-flex d-flex-responsive-md">
               <div className="mobile-content-padding"> 
                  <Link to="/adddomain" className="btn btn-outline-light mr-3">Transfer Domain</Link> 
               </div>
               <div>
                  <Link to="/addomain" className="btn btn-outline-light">Add Domain</Link> 
               </div>
            </div>
          </div>
        </div>
      </div>
         { hideDomainPackages ? 
        <div className="row">
          <div className="col-lg-12">
            {/* <WebsitesCard domainName="mywebsiteisamazing.com" 
                          hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) } /> */}
        <DomainCard domainName="mysticalcreatures.com"
                     domainState="active"
                     renewDate="1/1/20"
                     amountDue="$12.45"
                     hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) } />
          </div>
          <div className="col-lg-12">
            {/* <WebsitesCard domainName="turbodesign.com"
                          hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) }  /> */}
         <DomainCard domainName="mysticalcreatures.com"
                     domainState="active"
                     renewDate="1/1/20"
                     amountDue="$12.45"
                     hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) } />             
          </div>
          <div className="col-lg-12">
            {/* <WebsitesCard domainName="mysticalcreatures.com"
                          hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) }  /> */}
         <DomainCard domainName="mysticalcreatures.com"
                     renewDate="1/1/20"
                     amountDue="$12.45"
                     hideDomainPackagesProps={ () => setHideDomainPackages(hideDomainPackages = false) } />
          </div>
        </div> : 

        <div>
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

               <div className="row">
        <div className="col-12">
      
            {/* <SecondaryNav/> */}
            <LightTabs>
            <Tabs>
              <div className="d-flex mb-5 mt-1">
                <Tab><div className="">Registration Information</div></Tab>
                <Tab><div className="">Name Servers</div></Tab>
                <Tab><div className="">Private Name Servers</div></Tab>
                <div className="flex-fill tabs-border"></div>
              </div>
              <Panel>
                <h2 className="mb-4 font-weight-bold">Registration Information</h2>
                <RegistrationInfo />
              </Panel>
              <Panel>
                <NameServers/>
              </Panel>
              <Panel>
                <PrivateeNameServers/>
              </Panel>
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

export default Domains;