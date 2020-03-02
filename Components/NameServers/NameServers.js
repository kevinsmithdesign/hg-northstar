import React, { useState, useRef } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import RadioBtn from '../RadioBtn/RadioBtn';

const NameServer = () => {

  let tl = new TimelineLite();
  let activeRadio = useRef(null);

  const [toggleCustomNameServers, setToggleCustomNameServers] = useState('off');
  const updateNameServers = () => {
        setToggleCustomNameServers(toggleCustomNameServers === 'off' ? 'on' : 'off' );
        {/* if(toggleCustomNameServers === 'off' ) {
          tl.to(activeRadio, .2, { opacity: 0 })
      } else {
          tl.to(activeRadio, .2, { opacity: 1 })
      } */}
  }

  return(
    <>
      <h2 className="mb-4 font-weight-bold">Name Servers</h2>
      <div className="card border-0 box-shadow mb-5">
        <div className="card-body mx-4 my-4">
          <h4 className="font-weight-bold">Please Note:</h4>
          <p>In order for computers to find your web page you'll nned to change your name servers. It takes 24 to 48 hours before name server changes are fully propagated, as networks around the world update with your domains new DNS information. Until then, some traffic may go to the old name server(s), please be patient once name server changes are made as this is normal. <a href="">Learn More</a></p>
          <div className="d-flex">
            <div className="">
              <RadioBtn active="true" />
            </div>
            <div>Use HostGator name servers</div>
          </div>
          <div className="d-flex mb-4">
            <div className="" onClick={ updateNameServers }>
              <RadioBtn active="true" />
            </div>
            <div>Use custom name servers</div>
          </div>

          
              { toggleCustomNameServers === 'on' ? 
          <div ref={el => activeRadio= el}>
          <div className="row">
            <div className="col-lg-6">
              <div class="form-group">
                <input type="email" class="form-control" id="lastName"  />
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
           <div className="text-center mt-4">
            <button className="btn btn-primary px-5">Save</button>
          </div></div>: '' }


        </div>
      </div>
    </>
  );
}

export default NameServer;