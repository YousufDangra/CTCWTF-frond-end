import React from 'react'
import '../../App.css';
import './video.css'
import CTC from '../../videos/CTC.mp4'
const VideoPlayer = () => {
  return (
    <div className="container platform box">
      <div className="title-box">
        <h1 className="title" title="PLATFORM">

        </h1>
      </div>

      <div className="button-box">
        {/* <iframe width="1903" height="786" src="https://vimeo.com/561876822" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* <iframe className="iframe-video"  src="https://firebasestorage.googleapis.com/v0/b/cdn-web-8c429.appspot.com/o/images%2FCTC.mp4?alt=media&token=c4ca2173-4db3-4f4d-8c22-b24e5e1f21e9" frameborder="0" allow="fullscreen" allowfullscreen ></iframe></div> */}

        <video width="350" height="250" className="video1" controls>
          <source src={CTC} type="video/mp4" />
        </video>
        </div>
        {/* <div className="row mt-5 platform-content">
          <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-2">
                 
          </div>
          <div className="d-flex justify-content-center align-items-center col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-1 order-1 position-relative">

          </div>
        </div> */}
      </div>
      )
  }
  
  export default VideoPlayer
