import React from 'react'
import '../assets/css/style.css'

import profile1 from '../assets/images/profile/profile-35x35-1.jpg'
import profile2 from '../assets/images/profile/profile-35x35-2.jpg'
import profile3 from '../assets/images/profile/profile-35x35-3.jpg'
import profile4 from '../assets/images/profile/profile-35x35-4.jpg'
import profile5 from '../assets/images/profile/profile-35x35-5.jpg'
import profile6 from '../assets/images/profile/profile-35x35-6.jpg'
import profile7 from '../assets/images/profile/profile-35x35-7.jpg'
import profile8 from '../assets/images/profile/profile-35x35-8.jpg'
import profile9 from '../assets/images/profile/profile-35x35-9.jpg'
import profile10 from '../assets/images/profile/profile-35x35-10.jpg'
import profile11 from '../assets/images/profile/profile-35x35-11.jpg'
import profile12 from '../assets/images/profile/profile-35x35-12.jpg'
import profile13 from '../assets/images/profile/profile-35x35-13.jpg';

const single_slide_style = {
    padding: '5px'
};

export const Activefriends = () => {
    return(
        <>
            <div className="card card-small mb-0 active-profile-wrapper">
                <div className="active-profiles-wrapper">
                    <div className="active-profile-carousel slick-row-20 slick-arrow-style" style={{display: 'flex'}}>
                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile1} alt="profile1" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile2} alt="profile2" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile3} alt="profile3" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile4} alt="profile4" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile5} alt="profile5" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile6} alt="profile6" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile7} alt="profile7" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile8} alt="profile8" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                        
                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile9} alt="profile9" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile10} alt="profile10" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                        
                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile11} alt="profile11" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile12} alt="profile12" />
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="single-slide" style={single_slide_style}>
                            <div className="profile-thumb active profile-active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile13} alt="profile13" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </>
    )
}