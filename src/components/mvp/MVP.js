import React from "react";
import platform from "../../assets/platform-img.png";
import MultiChain from '../../images/multichain.png';
import './mvp.css'
function Platform() {
  return (
    <div className="container mvp box" id="mvp">
      <div className="title-box">
        <h1 className="title" title="Multichain">
        CTC Multichain 
Wallet
        </h1>
      </div>
      <p className="text-center">With the persistent acknowledgment of 
digital money - CTC plans to make 
exchanges.</p>
      <div className="row mt-5 platform-content ">
        <div className="d-flex justify-content-center align-items-center col-lg-6 col-md-12 mb-4">
          <img
            src={MultiChain}
            alt="Platform"
            width="80%"
          />
        </div>
        <div className="col-lg-6 col-md-12 mvp-content">
          <ul>
            <li>
            Every feature on the CTC WTF wallet uses CTCADI (Advanced Digital Intelligence)
             to provide individuals and business owners with the best experience.
            </li>
            <li>
            CTCWTF provides a decentralized security protocol and serverless key management,
             thus providing users with complete control over their digital assets.
            </li>
            <li>
            Link to Crypto Exchange: Users who aim to trade on a more extensive
             exchange platform can link their wallets to any cryptocurrency exchange without paying extra fees. 
            </li>
            <li>
            QR Code Scanner: The QR code scanner simplifies the exchange process for users
            </li>
          </ul>
          {/* <button className="button-custom">TRY DEMO FREE</button> */}
        </div>
      </div>
    </div>
  );
}

export default Platform;
