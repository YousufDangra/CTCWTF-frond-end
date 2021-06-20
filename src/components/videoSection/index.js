import React from 'react';
import video1 from '../../videos/ctc1.mp4'
import video2 from '../../videos/ctc2.mp4'
import video3 from '../../videos/ctc3.mp4'
import '../../App.css';
import './videoSection.css'


const VideoSection = () => {
    return (
        <div className="container platform box">
            <div className="title-box">
                <h1 className="title" title="Reviews">
                WELCOME CTCWTF FRIENDS                </h1>
            </div>

            <div className="button-box">
                <video width="350" height="250" className="video1" controls>
                    <source src={video1} type="video/mp4" />
                </video>
                <video width="350" height="250" controls className="video1">
                    <source src={video2} type="video/mp4" />
                </video>
                <video width="350" height="250" controls className="video1">
                    <source src={video3} type="video/mp4" />
                </video>

            </div>


        </div>
    )
}

export default VideoSection
