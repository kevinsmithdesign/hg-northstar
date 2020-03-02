import React, { useState, useRef } from 'react';
import { TimelineLite, TweenLite } from 'gsap';

const RadioBtn = ({ radioBtnText }) => {
  let tl = new TimelineLite();
  let activeRadio = useRef(null);
  let activeRadioClick = useRef(null);

  const [toggleRadioBtnClick, setToggleRadioBtnClick] = useState('off');
  const toggleRadioBtn = () => {
    setToggleRadioBtnClick(toggleRadioBtnClick === 'off' ? 'on' : 'off' );
      if(toggleRadioBtnClick === 'off' ) {
          tl.to(activeRadio, .2, { background: '#0069FF', border: '2px solid #0069FF' })
            .to(activeRadioClick, .2, { background: 'white' }, '-=.2')
      } else {
          tl.to(activeRadio, .2, { background: 'white', border: '2px solid #8D9EB0' })
            .to(activeRadioClick, .2, { background: 'transparent' }, '-=.2')
      }
  }

  return(
    <>
    <div className="d-flex mb-3">
      <div className="mr-3">
        <div className="radio-btn" onClick={ toggleRadioBtn } ref={el => activeRadio = el}>
          <div className="radio-btn-active" ref={el => activeRadioClick = el}></div>
        </div>
      </div>
      <div className="">{ radioBtnText }</div>
    </div>
    </>

  );
}

export default RadioBtn;