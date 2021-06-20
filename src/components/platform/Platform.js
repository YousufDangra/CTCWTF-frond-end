import React from "react";
import platform from "../../assets/platform-img.png";
import platform1 from '../../images/exschange.jpg';

function Platform() {
  return (
    <div className="container platform box" id="platform">
      <div className="title-box">
        <h1 className="title" title="PLATFORM">
          PLATFORM
        </h1>
      </div>
      {/* <div className="button-box">
        <button className="btn platform-btn-active">FOR PARTICIPATORS</button>
        <span className="btn-line"></span>
        <button className="btn">FOR TRADER</button>
      </div> */}
      <div className="row mt-5 platform-content">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-2">
          <h2 className="mb-4 mt-4">A Open Platform for our Participators</h2>
          <p>
          Therefore, this established the need for exchange platforms
          </p>
          <ul>
            <li>
            Exchange platforms provide an in-app wallet that could allow people to save 
            their tokens and easily trade them among traders.
            </li>
            <li>
            Having opaque control over the network, they charge high transaction fees and place a high
          withdrawal limit on transaction. 

            </li>
            <li>
            Since the acceptance of centralized exchanges, many exchanges have experienced several
            hacks, leading to the loss of funds on the in-app exchange wallet.
            </li>
            <li>
            Mt.Gox was once known as the largest cryptocurrency exchange in the world.
             It accounted for over 70% of bitcoin transactions in the world.
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-1 order-1 position-relative">
          {/* <div className="d-flex justify-content-center align-items-center">
            <div className="platform-img-circle"></div>
            <div className="platform-img-circle small"></div>
          </div> */}
          <img src={platform1} alt="Platform" width="80%" />
        </div>
      </div>
    </div>
  );
}

export default Platform;
