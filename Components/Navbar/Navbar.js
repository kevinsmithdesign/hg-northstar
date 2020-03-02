import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ billing }) => {

  let tl = new TimelineLite();
  let barOne = useRef(null);
  let barTwo = useRef(null);
  let barThree = useRef(null);
  let mobileNavSlideOut = useRef(null);

  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState('off');
    const hamburgerMenu = () => {
      setToggleHamburgerMenu(toggleHamburgerMenu === 'off' ? 'on' : 'off' );
      if(toggleHamburgerMenu === 'off' ) {
        tl
          .to(barOne, .2, { y: 6, rotation: 45, background: '#0069FF' })
          .to(barTwo, 0, { opacity: 0 }, '-=.2')
          .to(barThree, .2, { y: -6, rotation: -45, background: '#0069FF' }, '-=.2')
          .to(mobileNavSlideOut, .2, {  x: 0 }, '-=.2')        
      } else {
        tl
          .to(barOne, .2, { y: 0, rotation: 0, background: 'white' })
          .to(barTwo, 0, { opacity: 1 }, '-=.2')
          .to(barThree, .2, { y: 0, rotation: 0, background: 'white' }, '-=.2')
          .to(mobileNavSlideOut, .2, { x: '-100%' }, '-=.2')  
      }
  }

  useEffect(() => {
      TweenLite.set(mobileNavSlideOut, {  x: '-100%' })
  }, []);

  const [searchBar, setSearchBar] = useState('hide');
  const searchBtn = () => {
    setSearchBar(searchBar === 'hide' ? 'show' : 'hide');
  }

  const [accountInfo, setAccountInfo] = useState('hide');
  const accountInfoDropdown = () => {
    setAccountInfo(accountInfo === 'hide' ? 'show': 'hide');
    if(accountInfo === 'hide') {
      console.log(1);
    } else {
      console.log(2);
    }
    // setBillingMenu('hide');
  }

  const closeAccountInfo = () => {
    setAccountInfo('hide');
  }

  // const [billingMenu, setBillingMenu] = useState('hide');
  // const billingToggleMenu = () => {
  //   setBillingMenu(billingMenu === 'hide' ? 'show' : 'hide');
  //   setAccountInfo('hide');
  // }

  // const closeBilling = () => {
  //   setBillingMenu('hide');
  //   setAccountInfo('hide');
  // } 

  // const showBillingDropdown = () => {
  //   console.log('show');
  //   setBillingMenu('show');

  // }

  // const hideBillingDropdown = () => {
  //   console.log('hide');
  //   // setBillingMenu('hide');
  // }

  


  return(
    <>
      <div className="mobile-nav-slideout" ref={el => mobileNavSlideOut = el}>

      <div className="d-flex">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/HostGator%20blue.svg" className="mx-auto mt-5" />
      </div>

      <form>
        <div className="form-group px-4 py-4">
          <input type="email" 
                 className="form-control search-input-mobile" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Search"
                  />
        </div>
      </form>
      <div className="mx-4 my-4">
        <Link to="/" className="mobile-nav-link" onClick={ hamburgerMenu }>Websites</Link>
      </div>
      <div className="mx-4 my-4">
        <Link to="/hosting" className="mobile-nav-link" onClick={ hamburgerMenu }>Hosting</Link>
      </div>
      <div className="mx-4 my-4">
        <Link to="/domains" className="mobile-nav-link" onClick={ hamburgerMenu }>Domains</Link>
      </div>
      <div className="mx-4 my-4">
        <Link to="/billing" className="mobile-nav-link" onClick={ hamburgerMenu }>Billing</Link>
      </div>   
    </div>

    
      <div className="nav-wrapper">
        <div className="d-flex nav-container align-items-center">

  				<div className="hamburger-menu-container">

            <div className="hamburger-icon" onClick={ hamburgerMenu } >
            <div className="bar-one" ref={el => barOne = el}></div>
            <div className="bar-two" ref={el => barTwo = el}></div>
            <div className="bar-three" ref={el => barThree = el}></div>

          </div>

				  </div>

          <div className="flex-fill">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/hg-logo.svg" className="logo" />
          </div>

	        <div className="flex-fill mobile">
		
          <div className="group">
            <div className="one">
              {/* base block */}
            </div> { (searchBar === 'hide') ? 

            <div className="three">
            {/* { (billingMenu === 'show') ?
              <div className="card billing-dropdown-menu border-0 box-shadow">
                <div className="card-body">
                  <div className="mb-1">
                    <Link to="/invoice" onClick={ billingToggleMenu } className="billing-dropdown-list-items">Invoice</Link>
                  </div>
                  <div className="mb-1">
                    <Link to="/billing-history" onClick={ billingToggleMenu } className="billing-dropdown-list-items">Billing History</Link>
                  </div>
                  <div className="mb-1">
                    <Link to="/credit-card" onClick={ billingToggleMenu } className="billing-dropdown-list-items">Credit Cards</Link>
                  </div>
                  <div className="mb-1">
                    <Link to="/pay-pal" onClick={ billingToggleMenu } className="billing-dropdown-list-items">PayPal</Link>
                  </div>
                  <div className="mb-1">
                    <Link to="/credits" onClick={ billingToggleMenu } className="billing-dropdown-list-items">Credits</Link>
                  </div>
                </div>
              </div> : ''
            } */}

              <div className="d-flex">

                <div>
                  <div className="nav-btn dashboard-btn" onClick={ closeAccountInfo }>
                    <div className="nav-btn-title">
                      <NavLink exact to="/" className="main-nav-link" activeClassName="main-nav-active" >Websites</NavLink>
                    </div>
                    <div className="border-bottom-nav market-state"></div>
                  </div>
                </div>

                <div>
                  <div className="nav-btn hosting-btn" onClick={ closeAccountInfo }>
                    <div className="nav-btn-title">
                      <NavLink exact to="/hosting" className="main-nav-link" activeClassName="main-nav-active" >Hosting</NavLink>
                    </div>
                    <div className="border-bottom-nav hosting-state"></div>
                  </div>
                </div>

                <div>
                <div className="nav-btn domain-btn" onClick={ closeAccountInfo }>
                  <div className="nav-btn-title">
                    <NavLink exact to="/domains" className="main-nav-link" activeClassName="main-nav-active" >Domains</NavLink>
                  </div>
                  <div className="border-bottom-nav domain-state"></div>
                </div>
                </div>

                <div>
                  <div className="nav-btn marketplace-btn" onClick={ closeAccountInfo }>
                    <div className="nav-btn-title">
                      <NavLink exact to="/billing" 
                               className="main-nav-link" 
                               activeClassName="main-nav-active" 
                            >Billing</NavLink> 
                      {/* <div className="main-nav-link" activeClassName="main-nav-active" onClick={ billingToggleMenu }>Billing</div>  */}
                    </div>
                    <div className="border-bottom-nav market-state"></div>
                  </div>
                </div>

         

              
              </div>
            </div>
            : 	
            <div className="two">
              <div className="d-flex">
                <div className="search-icon-container"> 
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/search-icon.svg" class="search-icon" onClick={ searchBtn } />	
                </div>
                <input placeholder="Search our knowledge base" class="text-white search-input" />
                <div className="search-icon-container">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/close-icon.svg" class="ml-3 search-icon" onClick={ searchBtn } />
                </div>
              </div>
            </div>
            }
            </div>
		
	</div>
            <div className="flex-fill mobile"></div>

            <div className="">
              <div className="d-flex justify-content-end">
                <div className="search-btn-container" onClick={ closeAccountInfo }>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/search-icon.svg" onClick={ searchBtn } className="right-icons btn-test mr-4" />	
                </div>
                <div className="message-btn-container" onClick={ closeAccountInfo }>
                  <Link to="/messaging"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/message-icon.svg" className="right-icons"  /></Link>	
                </div>
                <div className="">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2392702/profile-icon.svg" onClick={ accountInfoDropdown } className="account-btn right-icons ml-4" />
                </div>
              </div>
            </div>
        </div>  

        <div className="dropdown-container">
          { (accountInfo === 'hide') ? 	'' :
          <div className="card account-dropdown-menu border-0 box-shadow">
          <div className="card-header grey-five border-0">
            <h6 className="text-center font-weight-bold mb-1">Bobby Brown</h6>
            <p className="mb-0 text-center">Client ID: 4281938</p>
          </div>
          <div className="card-body">
            <div className="mb-2">
              <Link exact to="/profile" className="link-text" onClick={accountInfoDropdown}>Profile</Link>
            </div>
            <div className="mb-2">
              <Link exact to="/account-security" className="link-text" onClick={accountInfoDropdown}>Account & Security</Link>
            </div>
            <div className="mb-2">
              <Link exact to="/help" className="link-text" onClick={accountInfoDropdown}>Help & Support</Link>
            </div>
            <div className="border-top mb-2" link-text onClick={accountInfoDropdown}></div>
            <div className="mb-2">
              <Link exact to="/requestmigration" className="link-text" onClick={accountInfoDropdown}>Request Migration</Link>
            </div>
            <div className="mb-2">
              {/* <Link exact to="/marketplace" className="link-text" onClick={accountInfoDropdown}>Marketplace</Link> */}
            </div>
            <div className="mb-2">
              <a href="https://www.hostgator.com" target="_blank" className="link-text" onClick={accountInfoDropdown} >HostGator.com</a>
            </div>
            <div className="border-top mb-2"></div>
            <div className="mb-2">
              <a href="" target="_blank" onClick={accountInfoDropdown} className="link-text">Logout</a>
            </div>
          </div>
        </div>
        }
        
        {/* <div className="card billing-dropdown-menu border-0 box-shadow">
          <div className="card-body">Billing</div>
        </div> */}

        </div> 


      {/*  Nav Header Container  */}
      <div className="container nav-header-container">
        {/*  <h2 className="py-5 text-white">Hello, Bobby</h2>  */}
      </div>
	
    </div>
  </>
  );
}

export default Navbar;