import React from 'react';
import styled from "styled-components";
import Navbar from '../Components/Navbar/Navbar';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { Link, NavLink } from "react-router-dom";
import MakePayment from '../Components/MakePayment/MakePayment';
import BillingHistory from '../Components/BillingHistory/BillingHistory';
import CreditCardComponent from '../Components/CreditCardComponent/CreditCardComponent';
import PayPalComponent from '../Components/PayPalComponent/PayPalComponent';
import CreditsComponent from '../Components/CreditsComponent/CreditsComponent';



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

const DarkTabs = styled.div`
    .tab {
      padding:8px 32px;
      font-weight:bold;
      border-radius:30px;
      text-decoration: none !important;
      color:#FFF;
      cursor:pointer;
    }

    .tab.active {
      background-color: background-color: #267FFF;
      color:#FFF;
      cursor: default;
    }
`

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

const creditCardIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Visa.svg';
const warningIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/warning-triangle-2.svg';
const questionMarkIcon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/question-circle.svg';

const  Billing = () => {
  return(
    <div>
    <Navbar />
    <div className="container offset-container">
      <div className="row">
        <div className="col-xl-12 col-xs-6">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white mb-5">Billing</h1>
            </div>
            <div className="">
               {/* <Link to="/pay-bill" className="btn btn-outline-light">Pay Bill</Link>  */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card border-0 box-shadow mb-5">
            <div className="card-body mx-4 my-4">

              <div className="d-flex d-flex-responsive">
                <div className="flex-fill mobile-content-padding">
                  <div className="d-flex">
                  <div className="flex-fill">
                    <h6 className="text-muted">Last Payment Due</h6>
                    <h6 className="font-weight-bold">Jan 23, 2020</h6>
                    <Link to="/invoice" className="mb-0">View invoice</Link>
                  </div>

                  <div className="flex-fill">
                    <h6 className="text-muted">Next Payment Due</h6>
                    <h6 className="font-weight-bold">Mar 02, 2020 ($256.33)</h6>
                    <Link to="/pay-bill" className="">Pay now</Link>
                  </div>
                  </div>
                </div>
        
                <div className="flex-fill mobile-content-padding">
                  <div className="d-flex">
                  <div className="flex-fill">
                    <div className="text-muted mb-2"><span className="mr-1">Primary Credit Card</span> <img src={ questionMarkIcon } /></div>

                    <span className="font-weight-bold">
                      <img src={ creditCardIcon } className="mr-1" /> 
                      <span className="mr-2 primary-red">VISA 8788</span>
                      <img src={ warningIcon } />
                    </span>

                    <div className="mt-2">
                      <Link to="/update-card" className="mb-0">Update credit card</Link>
                    </div>
                  </div>

                  <div className="flex-fill">
                    <div className="text-muted mb-2"><span className="mr-1">PayPal</span> <img src={ questionMarkIcon } /></div>
                    <h6 className="font-weight-bold">Not linked</h6>
                    <Link to="/pay-bill" className="">Link account</Link>
                  </div>

                  
                  </div>
                </div>
        

              </div>
            </div>
          </div>

        
            <LightTabs>
              <Tabs>
              <div className="d-flex mb-5 mt-1">
                <Tab><div>Make a Payment</div></Tab>
                <Tab><div className="">Billing History</div></Tab>
                <Tab><div className="">Credit Cards</div></Tab>
                <Tab><div className="">PayPal</div></Tab>
                <Tab><div className="">Credits</div></Tab>
                <div className="flex-fill"></div>
              </div>
              <Panel>
                <MakePayment/>
              </Panel>
              <Panel>
                <BillingHistory/>
              </Panel>
              <Panel>
               <CreditCardComponent/>
              </Panel>
              <Panel>
                <PayPalComponent/>
              </Panel>
              <Panel>
                <CreditsComponent/>
              </Panel>
            </Tabs>
            </LightTabs>


        </div>
      </div>
      </div>


      </div>
  );
}

export default Billing;