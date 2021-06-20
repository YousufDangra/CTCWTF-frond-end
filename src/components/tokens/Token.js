import React from "react";
import './token.css'
function Token() {
  return (
    <div className="container box token">
      <div className="title-box title-token">
        <h1 className="title" title="TOKENS">
          TOKENS
        </h1>
      </div>
      <p className="text-center">Breakdown of our Token Recipients.</p>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-12 col-sm-12 order-lg-1 order-md-2 order-2">
          <div className="row token-boxs">
            <div className="token-box col-lg-8 px-4">
              <h2 className="mt-3">Tokens Allocated for Manual Burn</h2>
              <p>
                20.51% <span>(Lockup)</span>
              </p>
            </div>
            <div className="token-box col-lg-8 px-4">
              <h2 className="mt-3">Tokens Allocated for Public Sale</h2>
              <p>
                10% <span>(Lockup)</span>
              </p>
            </div>
            <div className="token-box col-lg-6 px-4">
              <h2 className="mt-3">Tokens Allocated for Private Sale</h2>
              <p>
                25.63% <span>(Lockup)</span>
              </p>
            </div>
            <div className="token-box col-lg-6 px-4">
              <h2 className="mt-3">Tokens Allocated for Seed</h2>
              <p>
                0.03% <span>(Lockup)</span>
              </p>
            </div>
            <div className="token-box col-lg-6 px-4">
              <h2 className="mt-3">Tokens Allocated for Foundation</h2>
              <p>
                25.63% <span>(Lockup)</span>
              </p>
            </div>
            <div className="token-box col-lg-6 px-4">
              <h2 className="mt-3">Tokens Allocated for Team</h2>
              <p>
                12.82% <span>(Lockup)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 order-lg-2 order-md-1 order-1">
          {/* Image  */}
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 p-3 position-relative">
          <div className="token-date-box">
            <h3>START TIME</h3>
            <h2>15 Sep, 2018</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Token;
