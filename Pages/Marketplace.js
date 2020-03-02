import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, NavLink } from "react-router-dom";
import  ProductCard  from '../Components/ProductCard/ProductCard';
import styled, { css, ThemeProvider } from "styled-components";

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

const weeblyBorderTop = {
  productTypeBorderTop: "#3192E6",
};

const seotoolsBorderTop = {
  productTypeBorderTop: "#DF8C33",
};

const sslmanagementBorderTop = {
  productTypeBorderTop: "#39B100",
};

const constantcontactBorderTop = {
  productTypeBorderTop: "#5096BC",
};



const Marketplace = () => {
  return(
    <>
    <Navbar/>
    <div className="container offset-container">
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Marketplace</h1>
            </div>
            <div className="">
               <Link to="comingsoon" className="btn btn-outline-light">Button</Link> 
            </div>
            </div>
          </div>
        </div>
        <div className="row">
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
           <ThemeProvider theme={codeguardBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard 
                productBtn=""
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
                  productBtn=""
                  productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Office%20365.svg" 
                  productCardTitle="Office 365" 
                  productCardDescription="Get professional-grade business tools like domain-based email plus powerful productivity and collaboration tools." />
              </Card>
            </ThemeProvider>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <ThemeProvider theme={weeblyBorderTop}>
            <Card className="d-flex align-items-stretch">
            <ProductCard 
              productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Weebly-sm.svg"
              productCardTitle="Weebly Builder" 
              productCardDescription="Give visitors trust in your website & boost your Google rankings by protecting visitors information with an. SSL certificate." />
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
            <ThemeProvider theme={constantcontactBorderTop}>
              <Card className="d-flex align-items-stretch">
              <ProductCard
                  productBtn=""
                  productIcon="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/CSCT.svg"
                  productCardTitle="Constant Contact" 
                  productCardDescription="Constant Contact makes it fast and easy to get results from your email. You'll drive bigger results with every email you send." />
              </Card>
            </ThemeProvider>
        </div>

      </div>
      </div>
    </>
  );
}

export default Marketplace;