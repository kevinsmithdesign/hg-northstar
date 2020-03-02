import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import styled, { css, ThemeProvider } from "styled-components";

// export const ProductCardStyled = styled.div`
//   border-top:8px solid red !important;
//   border-left:none;
//   border-right:none;
//   border-bottom:none;

//   ${ props => props.codeguard && 
//      css`
//         border-top:8px solid purple !important;
//      ` }

//   ${ props => props.office365 && 
//     css`
//       border-top:8px solid blue !important;
//     ` }

//   ${ props => props.constantcontact && 
//     css`
//       border-top:8px solid orange !important;
//     ` }
// `;

const ProductCard = ( props, className ) => {

  let url = 'default';

  if(props.productCardTitle === "CodeGuard") {
    url = 'codeguard'
  } else if(props.productCardTitle === "Office 365" ) {
    url = 'office365'
  } else if(props.productCardTitle === "Constant Contact") {
    url = 'constantcontact'
  } else if(props.productCardTitle === "G Suite") {
    url = 'office365'
  } else if(props.productCardTitle === "SEO Tools") {
    url = 'seotools'
  } else if(props.productCardTitle === "SSL Management") {
    url = 'sslmanagement'
  } else if(props.productCardTitle === "SiteLock") {
    url = 'sitelock'
  } else if(props.productCardTitle === "Website Builder") {
    url = 'websitebuilder'
  } else if(props.productCardTitle === "Weebly Builder") {
    url = 'weebly'
  } else {
    url = ''
  }

 



  return(
    <div className="card flex-fill box-shadow mb-4 border-0" style={{  borderTopLeftRadius: '0px', borderTopRightRadius: '0px'  }}>
      <div className="card-body px-4 d-flex flex-column">

        <div className="d-flex align-items-center mb-4 mt-3">
          {/*  props.productIcon === ""  */}

          {(props.productIcon === '') ? '':  
          <div className="">
            <div className="card-icon-img-container mr-3">
              <img src={props.productIcon}/>
            </div>
          </div>
          }
          
          <div className="d-flex align-items-center">
            <h4 className="font-weight-bold mb-0">{props.productCardTitle}</h4>
          </div>
      
        </div>

        <p className="mb-4">{props.productCardDescription}</p>

        {props.productBtn === "manage" ? 
          <div className="text-center mt-auto">
            <Link to={`/${url}`} className="btn btn-primary mb-2 manage-btn">Manage</Link>
          </div>
         :
        <div className="text-center mt-auto">
          {/* <Link to={`/${url}`} className="font-weight-bold mb-2 learn-more-link">Learn More<span className="ml-2"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Arrow.svg"/></span></Link> */}
          <Link to={`/${url}`} className="btn btn-outline-primary mb-2">Learn More</Link>
        </div>
        }


      </div>
     </div>
  );
  
}

ProductCard.defaultProps = {
  productIcon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/G%20Suite.svg',
  productCardTitle: 'Card Title',
  productCardDescription: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'
}

export default ProductCard;