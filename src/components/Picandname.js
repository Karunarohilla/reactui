import React from 'react'
import '../assets/css/style.css'
import profileImage from '../assets/images/banner/banner-small.jpg'
import profileMiddle from '../assets/images/profile/profile-midle-1.jpg'

export const Picandname = () => {
    return(
        <>
            <div className="card card-profile widget-item p-0">
                <div className="profile-banner">
                    <figure className="profile-banner-small">
                        <a href="profile.html">
                            <img src={profileImage} alt="profileimage1" />
                        </a>
                        <a href="profile.html" className="profile-thumb-2">
                            <img src={profileMiddle} alt="prfilemiddle" />
                        </a>
                    </figure>
                    <div className="profile-desc text-center">
                        <h6 className="author"><a href="profile.html">Erik Jhonson</a></h6>
                        <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
                    </div>
                </div>
            </div>
        </>
    )
}