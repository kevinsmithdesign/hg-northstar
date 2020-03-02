import React, { useState, useRef } from 'react';
import { TimelineLite, TweenLite } from 'gsap';

const CheckBox = () => {

 let tl = new TimelineLite();
 let checkBox = useRef(null);
 let check = useRef(null);
 const [toggleCheckBoxClick, setToggleCheckBoxClick] = useState('off');
 
 const toggleCheckBox = () => {
    setToggleCheckBoxClick(toggleCheckBoxClick === 'off' ? 'on' : 'off' );
      if(toggleCheckBoxClick === 'off' ) {
          tl.to(checkBox, .2, { background: '#0069FF', border: '2px solid #0069FF' })
            .to(check, 0, { display: 'block'}, '-=.2')
      } else {
          tl.to(checkBox, .3, { background: 'white', border: '2px solid #8D9EB0' })
            .to(check, 0, { display: 'none'}, '-=.2')

      }
  }

  return(
    <>
      <div className="check-box" onClick={ toggleCheckBox } ref={el => checkBox = el}>
        {/* <img src="" className="check-mark-icon"/> */}
        <i className="material-icons md-24 check-mark-icon" ref={el => check = el}>checkmark</i>
      </div>
    </>
  );
}

export default CheckBox;