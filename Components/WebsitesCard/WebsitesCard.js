import React from 'react';
import { Link, NavLink } from "react-router-dom";


const WebsiteCard = ({ domainName, btnType, hideDomainPackagesProps }) => {

  const wordPressLogo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/WordPress.svg';
  const weeblyLogo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/Weebly-Tile-Logo.svg';

  return(
    <div className="card border-0 box-shadow mb-4">
      <div className="card-body mx-2 mt-2 ">
        <div className="d-flex">
          <div className="flex-fill pb-4">
            <img src={wordPressLogo}/>
          </div>
          <div className="">
            <img src="" />
          </div>
        </div>
        <h4 className="mb-4 domain-ellipsis-lg">{domainName}</h4>
        <div className="text-center">
        { btnType === 'editWebsite' ?
          <Link to="/edit-site" className="btn btn-outline-primary mb-2">Edit Site</Link>
          :
          <button className="btn btn-outline-primary mb-2" onClick={ hideDomainPackagesProps }>Manage Domain</button>
          }
        </div>
      </div>
    </div>
  );
}

WebsiteCard.defaultProps = {
  domainName: 'domainname.com'
}

export default WebsiteCard;