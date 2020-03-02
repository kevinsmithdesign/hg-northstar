import React, { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import { TimelineLite, TweenLite } from 'gsap';

const SiteTypeBtn = ({ cardIcon, cardTitle }) => {
  return(
    <>
      <Link to="/feature-type" className="website-type-btn">
        <div className="card border-0 bg-white text-center box-shadow">
          <div className="card-body my-5">
            <i className="material-icons md-36">{cardIcon}</i>
            <h6 className="mb-0">{cardTitle}</h6>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SiteTypeBtn;