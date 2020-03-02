import React from 'react';

const HostingPlanCard = (props) => {
  return(
    <>
    <div className="card box-shadow mb-4 border-0">
      <div className="card-body mx-4 my-4">
        <div className="d-flex d-flex-responsive">
          <div className="flex-fill">

            <div className="d-flex">
              <div className="flex-fill">

                <div className="mobile-content-padding">
                  <div><p className="mb-2 text-secondary">{props.TitleOne}</p></div>
                  <div className=""><h6 className="mb-0 font-weight-bold">{props.SubtitleOne}</h6></div>
                </div>

                <div className="mobile-hide-lg">
                  <div><p className="mb-2 text-secondary">{props.TitleThreeMobile}</p></div>
                  <div className=""><h6 className="mb-0 font-weight-bold">July 8, 2020</h6></div>
                </div>

              </div>
              <div className="flex-fill">

                <div className="mobile-content-padding">
                  <div><p className="mb-2 text-secondary">{props.TitleTwo}</p></div>
                  <div className=""><h6 className="mb-0 font-weight-bold">{props.SubtitleTwo}</h6></div>
                </div>

                <div className="mobile-hide-lg">
                  <div><p className="mb-2 text-secondary">{props.TitleFour}</p></div>
                  <div className=""><h6 className="mb-0 font-weight-bold">{props.SubtitleFourMobile}</h6></div>
                </div>

              </div>
            </div>
        </div>
        <div className="flex-fill desktop-show-lg">
            <div className="d-flex">
              <div className="flex-fill">
                <div><p className="mb-2 text-secondary">{props.TitleThree}</p></div>
                <div className=""><h6 className="mb-0 font-weight-bold">{props.SubtitleThree}</h6></div>
              </div>
              <div className="flex-fill">
                <div><p className="mb-2 text-secondary">{props.TitleFour}</p></div>
                <div className=""><h6 className="mb-0 font-weight-bold">{props.SubtitleFour}</h6></div>
              </div>
            </div>
        </div>
      
        {/* <div className="desktop-show-lg">
          <div><p className="mb-2 text-secondary">Nameservers</p></div>
          <div className=""><h6 className="mb-0 font-weight-bold">View</h6></div>  
        </div> */}
      </div>
    </div>

    {props.planBtn === 'yes' ?
    <div className="card-body mx-auto">
      <div className="d-flex align-items-center">
        <div className="mr-5 font-weight-bold primary-red">Cancel this Plan</div>
        <button className="btn btn-primary">Upgrade Plan</button>
      </div>
    </div> : ''
    }

    </div>
    </>
  );
}

HostingPlanCard.defaultProps = {
  TitleOne: 'TitleOne'

}


export default HostingPlanCard;

