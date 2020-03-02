import React from 'react';


const SecondaryNav = () => {

  const myProductsBtn = () => {
    console.log('my products');
  }

  const mySettingsBtn = () => {
    console.log('my settings');
  }

  const myBillingBtn = () => {
    console.log('my billing');
  }

  const myCpanelBtn = () => {
    console.log('my cPanel');
  }


  return(
    <div className="d-flex">
      <div className="secondary-nav-btn secondary-nav-btn-active" onClick={ myProductsBtn }>My Products</div>
      <div className="secondary-nav-btn" onClick={ mySettingsBtn}>Settings</div>
      <div className="secondary-nav-btn" onClick={ myBillingBtn }>Billing</div>
      <div className="secondary-nav-btn" onClick={ myCpanelBtn }>cPanel</div>
      <div className="flex-fill secondary-nav-btn"></div>
    </div>
  );
}

export default SecondaryNav;