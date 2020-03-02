import React, { useRef, useEffect, useState } from 'react';
import { TimelineLite, TweenLite } from 'gsap';


const ProgressBar = ({ progressStep }) => {
  let tl = new TimelineLite();
  let stepOneBarFill = useRef(null);
  let stepTwoCircleFill = useRef(null);
  let stepTwoBarFill = useRef(null);
  let stepThreeCircleFill = useRef(null);

  useEffect(() => {
   if( progressStep === 2) {
      tl.to(stepOneBarFill, .2, { width: '100%', background: '#0081FF' })
        .to(stepTwoCircleFill, .2, { background: '#0081FF' })
    } else if ( progressStep === 3) {
      TweenLite.set(stepOneBarFill, { width: '100%', background: '#0081FF' })
      TweenLite.set(stepTwoCircleFill,  { background: '#0081FF' })
      tl.to(stepTwoBarFill, .2, { width: '100%', background: '#0081FF' })
        .to(stepThreeCircleFill, .2, { background: '#0081FF' })
    } 
  });

  return(
    <>
      <div className="d-flex progress-bar-container mx-auto mt-5">
      <div className="">
        <div className="step-one step text-center">1</div>
      </div>
      <div className="flex-fill d-flex">
        {/* <div className="step-bar-one step-bar my-auto" ref={ el => stepOneBar = el }></div> */}
        <div className="step-bar-one step-bar my-auto">
          <div className="step-bar-one-fill" ref={ el => stepOneBarFill = el }></div>
        </div>
      </div>
      <div className="">
        <div className="step-two step text-center" ref={ el => stepTwoCircleFill = el }>2</div>
      </div>
      <div className="flex-fill d-flex">
        <div className="step-bar-two step-bar my-auto">
          <div className="step-bar-two-fill" ref={ el => stepTwoBarFill = el }></div>
        </div>
      </div>
      <div className="">
        <div className="step-three step text-center" ref={ el => stepThreeCircleFill = el }>3</div>
      </div>
    </div>
    </>
  );
}

export default ProgressBar;