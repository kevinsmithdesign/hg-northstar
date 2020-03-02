import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.scss';
import MySites from './Pages/MySites';
import Marketplace from './Pages/Marketplace';
import Domains from './Pages/Domains';
import Hosting from './Pages/Hosting';
import Navbar from './Components/Navbar/Navbar';

import SiteLock from './Pages/SiteLock';
import SiteLock from './Pages/SiteLock';
import CodeGuard from './Pages/CodeGuard';
import Office365 from './Pages/Office365';
import Weebly from './Pages/Weebly';
import WebsiteBuilder from './Pages/WebsiteBuilder';

import SeoTools from './Pages/SeoTools';
import SSLManagement from './Pages/SSLManagement';
import ConstantContact from './Pages/ConstantContact';

import Profile from './Pages/Profile';
import AccountSecurityPage from './Pages/AccountSecurityPage';
import RequestMirgration from './Pages/RequestMigration';
import Support from './Pages/Support';
import Billing from './Pages/Billing';

import MyHostingPlan from './Pages/MyHostingPlan';
import ComingSoon from './Pages/ComingSoon';
import Messages from './Pages/Messages';

import AddDomain from './Pages/AddDomain';
import AddWebsite from './Pages/AddWebsite';
import BillingHistoryPage from './Pages/BillingHistoryPage';
import CreditCardPage from './Pages/CreditCardPage';
import PayPalPage from './Pages/PayPalPage';
import CreditsPage from './Pages/CreditsPage';
import EditSite from './Pages/EditSite';
import HelpSupportPage from './Pages/HelpSupportPage';
import FeatureTypePage from './Pages/FeatureTypePage';
import ChooseTemplatePage from './Pages/ChooseTemplatePage';
import SelectTemplatePage from './Pages/SelectTemplatePage';
import PayBillPage from './Pages/PayBillPage';
import ViewInvoicePage from './Pages/ViewInvoicePage';
import UpdateCreditCard from './Pages/UpdateCreditCard';


const App = () => {
  return(

    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <div className="container offset-container"> */}
        <Switch>
          <Route path="/" exact component={MySites}/>
          <Route path="/marketplace" exact component={Marketplace} />
          <Route path="/domains" exact component={Domains} />
          <Route path="/hosting" exact component={Hosting} />
          <Route path="/sitelock" exact component={SiteLock} />
          <Route path="/codeguard" exact component={CodeGuard} />
          <Route path="/office365" exact component={Office365} />
          <Route path="/weebly" exact component={Weebly} />
          <Route path="/websitebuilder" exact component={WebsiteBuilder} />
          <Route path="/seotools" exact component={SeoTools} />
          <Route path="/sslmanagement" exact component={SSLManagement} />
          <Route path="/constantcontact" exact component={ConstantContact} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/account-security" exact component={AccountSecurityPage} />
          <Route path="/requestmigration" exact component={RequestMirgration} />
          <Route path="/support" exact component={Support} />
          <Route path="/billing" exact component={Billing} />
          <Route path="/hosting/myhostingplan" exact component={MyHostingPlan} />
          <Route path="/comingsoon" exact component={ComingSoon} />
          <Route path="/messaging" exact component={Messages} />
          <Route path="/adddomain" exact component={AddDomain} />
          <Route path="/addwebsite" exact component={AddWebsite} />
          <Route path="/billing-history" exact component={BillingHistoryPage} />
          <Route path="/credit-card" exact component={CreditCardPage}/>
          <Route path="/pay-pal" exact component={PayPalPage} />
          <Route path="/credits" exact component={CreditsPage} />
          <Route path="/edit-site" exact component={EditSite} />
          <Route path="/help" exact component={HelpSupportPage} />
          <Route path="/feature-type" exact component={FeatureTypePage} />
          <Route path="/choose-template" exact component={ChooseTemplatePage} />
          <Route path="/select-template" exact component={SelectTemplatePage} />
          <Route path="/pay-bill" exact component={PayBillPage} />
          <Route path="/invoice" exact component={ViewInvoicePage} />
          <Route path="/update-card" exact component={UpdateCreditCard} />
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  ); 
}

render(<App />, document.getElementById('root'));
