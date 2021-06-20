import React from 'react'
import Banner from "./components/banner/Banner";
import Ecosystem from "./components/ecosystem/Ecosystem";
import Header from "./components/header/Header";
import Platform from "./components/platform/Platform";
import MVP from "./components/mvp/MVP";
import Token from "./components/tokens/Token";
import Contact from "./components/contact/Contact";
import Tokenomics from "./components/tokenomic/Tokenomics";
import VideoPlayer from './components/video/index';
import OpeningTime from './components/Timer/OpeningTime';
import ClosingTime from './components/Timer/ClosingTime';
import VideoSection from './components/videoSection/index';
const LandingPage = () => {
    return (
        <div className="main">
        <Header />
        <Banner />
        {/* <OpeningTime/> */}
        {/* <ClosingTime/> */}
        <VideoPlayer />
        <Ecosystem />
        <Platform />
  
        <MVP />
        <Token />
        <Tokenomics />
        <VideoSection/>
  
        <Contact />
      </div>
    )
}

export default LandingPage
