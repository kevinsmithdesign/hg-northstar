import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled, { css, ThemeProvider } from "styled-components";

import HostingPlanCard from '../Components/HostingPlanCard/HostingPlanCard'; 
import ProductCard from '../ProductCard/ProductCard';

const Card = styled.div`
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  border-top: 8px solid ${props => props.theme.productTypeBorderTop};
`;


const sitelockBorderTop = {
  productTypeBorderTop: "#C51C1E",
};

const codeguardBorderTop = {
  productTypeBorderTop: "#00AF74",
};

const office365BorderTop = {
  productTypeBorderTop: "#D83F28",
};

const gsuiteBorderTop = {
  productTypeBorderTop: "#737373"
}

const weeblyBorderTop = {
  productTypeBorderTop: "#3192E6",
};

const websitebuilderBorderTop = {
    productTypeBorderTop: "#EF6404",
}

const seotoolsBorderTop = {
  productTypeBorderTop: "#DF8C33",
};

const sslmanagementBorderTop = {
  productTypeBorderTop: "#39B100",
};

const constantcontactBorderTop = {
  productTypeBorderTop: "#5096BC",
};

const primarycolorBorderTop = {
  productTypeBorderTop: "#0069FF"
}

const bingBorderTop = {
  productTypeBorderTop: "#F4BD27"
}

const googleAdWordsBorderTop = {
  productTypeBorderTop: "#28B446"
}

const MyProducts = () => {
  return(
    <>
      <h2 className="mb-4 font-weight-bold">My Products</h2>

       <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
           <ThemeProvider theme={codeguardBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard 
                productBtn="manage"
                productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/CodeGuard.png"
                productCardTitle="CodeGuard" 
                productCardDescription="Avoid downtime and maintenance. CodeGuard automatically backs your site up and monitors it for changes." />
            </Card>
            </ThemeProvider>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={office365BorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard
                productBtn="manage"
                productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Office%20365.svg" 
                productCardTitle="Office 365" 
                productCardDescription="Get professional-grade business tools like domain-based email plus powerful productivity and collaboration tools." />
            </Card>
          </ThemeProvider>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={constantcontactBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard
                productBtn="manage"
                productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/CSCT.svg"
                productCardTitle="Constant Contact" 
                productCardDescription="Constant Contact makes it fast and easy to get results from your email. You'll drive bigger results with every email you send." />
            </Card>
          </ThemeProvider>
        </div>
      </div>

      <div className="row">
        <div className="col-12 my-5">
          <h1 className="font-weight-bold">Marketplace</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={gsuiteBorderTop}>
          <Card className="d-flex align-items-stretch">
          <ProductCard productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/G%20Suite.svg"
              productCardTitle="G Suite" 
              productCardDescription="Get professional email, online storage, shared calendars, video meetings and more with G Suite by Google Cloud." />
          </Card>
        </ThemeProvider>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={seotoolsBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard
                productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/SEO%20Tools.svg" 
                productCardTitle="SEO Tools" 
                productCardDescription="Increase traffic to your website and boost your online rankings with SEO Tools." />
            </Card>
          </ThemeProvider>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={sslmanagementBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard
                        productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/SSL%20Management.svg" 
                        productCardTitle="SSL Management"
                        productCardDescription="Give visitors trust in your website & boost your Google rankings by protecting visitors information with an SSL certificate." />
            </Card>
          </ThemeProvider>
        </div>
 
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <ThemeProvider theme={sitelockBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard 
                        productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/SiteLock.svg"
                        productCardTitle="SiteLock" 
                        productCardDescription="Protect your website from viruses, malware, hackers, and spam. SiteLock scans your site and prevents blacklisting." />
            </Card>
            </ThemeProvider>    
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <ThemeProvider theme={websitebuilderBorderTop}>
          <Card className="d-flex align-items-stretch">
          <ProductCard productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Builder.png"
                       productCardTitle="Website Builder" 
                       productCardDescription="Increase traffic to your website and boost your online rankings with SEO Tools" />
                       </Card>
                       </ThemeProvider>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <ThemeProvider theme={weeblyBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Weebly-sm.svg"
                         productCardTitle="Weebly Builder" 
                         productCardDescription="Give visitors trust in your website & boost your Google rankings by protecting visitors information with an. SSL certificate." />
            </Card>
            </ThemeProvider>
        </div>
      </div>


      <div className="row">
        <div className="col-12 my-5">
          <h1 className="font-weight-bold">Related Services</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <ThemeProvider theme={primarycolorBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard productIcon=""
                  productCardTitle="One-Click Installs" 
                  productCardDescription="Build your site should be simple. Quicly install WordPress and other helpful applications."/>
            </Card>
            </ThemeProvider>
        </div>
        <div className="col-lg-6 col-md-12">
          <ThemeProvider theme={primarycolorBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard productIcon="" 
                  productCardTitle="Theme" 
                  productCardDescription="Browse premium themes and templates from the web's top CMS platforms" />
            </Card>
            </ThemeProvider>
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
          <ThemeProvider theme={primarycolorBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard 
                  productIcon="" 
                  productCardTitle="Plugins" 
                  productCardDescription="Plugins add functionality to your site, supercharging everything from content to how you sell products and services." />
            </Card>
            </ThemeProvider>
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
          <ThemeProvider theme={primarycolorBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard
                  productIcon="" 
                  productCardTitle="Professional Services" 
                  productCardDescription="Want extra help? Our website professionals can give you expert advice and information." />
            </Card>
            </ThemeProvider>
        </div>
      </div>

      <div className="row">
        <div className="col-12 my-5">
          <h1 className="font-weight-bold">Special Offers</h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <ThemeProvider theme={bingBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard 
                  productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Bing.svg" 
                  productCardTitle="Bing Ad Credits" 
                  productCardDescription="160 million people use Bing to search the internet. Make sure your site is at the top of their results." />
            </Card>
            </ThemeProvider>
        </div>
        <div className="col-lg-6">
          <ThemeProvider theme={googleAdWordsBorderTop}>
            <Card className="d-flex align-items-stretch">
              <ProductCard
                  productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Google%20Adwords.svg" 
                  productCardTitle="Google Adwords Credit" 
                  productCardDescription="Make it easeier for potential visitros to find your site by bringing it to the top of their Google search results." />
            </Card>
            </ThemeProvider>
        </div>
      </div>





    </>
  );
}

export default MyProducts;