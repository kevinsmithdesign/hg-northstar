import React, { useState, useRef} from 'react';
import { TimelineLite, TweenLite } from 'gsap';

const ToggleSwitchBtn = () => {
  let tl = new TimelineLite();
    
  let toggleSwitchCircleSlider = useRef(null);
  // let toggleSwitchCircleOne = useRef(null);
  // let toggleSwitchCircleTwo = useRef(null);
  let onOffSwitchColor = useRef(null);

  const [toggleSwitchBtn, setToggleSwitchBtn] = useState('off');
    const toggleOnOff = () => {
      setToggleSwitchBtn(toggleSwitchBtn === 'off' ? 'on' : 'off' );
      if(toggleSwitchBtn === 'off' ) {
        tl
          .to(toggleSwitchCircleSlider, .2, { x: 20 })
          .to(onOffSwitchColor, .2, { background: '#00C54F'}, '-=.2')  
      } else {
        tl
          .to(toggleSwitchCircleSlider, .2, { x: 0 })
          .to(onOffSwitchColor, .2, { background: '#909EAE'}, '-=.2')  
      }
  }



  return(
    <div className="d-flex align-items-center mt-3">
    <div className="mr-2">Off</div>
    <div className="on-off-switch" ref={ el => onOffSwitchColor = el } >
	    <div className="toggle-switch" ref={ el => toggleSwitchCircleSlider = el } onClick={ toggleOnOff }></div> 
      <div className="toggle-switch-one" onClick={ toggleOnOff }></div>
	    <div className="toggle-switch-two" onClick={ toggleOnOff }></div>
    </div>
     <div className="ml-2">On</div>
    </div>

  );
}

export default ToggleSwitchBtn;

