import React from 'react';
import Navbar from '../Components/Navbar/Navbar';


const Messages = () => {
  return(
    <>
      <Navbar/>
        <div className="container offset-container">
          

                   <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-fill">
              <h1 className="text-white">Messages</h1>
            </div>
            <div className="">
               {/* <Link to="/addwebsite" className="btn btn-outline-light">Add Site</Link> */}
            </div>
        </div>
        </div>
      </div>

       <div class="row">
        		<div class="col-lg-8">
			
			  <div class="card border-0 box-shadow px-2 py-3">
    <div class="d-flex">
      <div class="pl-5 pr-2 d-flex align-items-center justify-content-center">
        <div class="material-icons icons">account_circle</div>
      </div>
        <div class="flex-fill">
           <div class="card-body">
             <p class="card-title mt-2 text-secondary">Primarydomain.com</p>
						 <p class="card-subtitle ellipsis-length-long mb-2">RE: Ticket #826</p>
           </div>
        </div>
         <div class="d-flex align-items-center justify-content-center">
					 <div class="mx-5 small text-secondary">2 days ago</div>
       	 </div>
      </div>
    </div>
  </div>
			

		<div class="col-lg-4">
            

			<div className="card border-0 box-shadow">
				<div class="card-body mx-4 my-4">
					<h5 class="font-weight-bold  mb-4">HostGator gives FREE SSL Certificates to customers!</h5>
					<p class=" mb-4">Lorem ipsum dolor milk shake in the house?</p>
					<button class="btn btn-primary">Read More</button>
				</div>
			</div>
	</div>
  </div>

              

        </div>
    </>
  );
}

export default Messages;