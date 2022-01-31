import React from 'react'
import '../assets/css/style.css'
import notification1 from '../assets/images/profile/profile-35x35-9.jpg'
import notification2 from '../assets/images/profile/profile-35x35-8.jpg'
import notification3 from '../assets/images/profile/profile-35x35-7.jpg'
import notification4 from '../assets/images/profile/profile-35x35-6.jpg'
import notification5 from '../assets/images/profile/profile-35x35-4.jpg'


export const Notification = () => {
    return(
        <>
            <div className="card widget-item">
                <h4 className="widget-title">Recent Notifications</h4>
                <div className="widget-body">
                    <ul className="like-page-list-wrapper">
                        <li className="unorder-list">
                            
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={notification1} alt="notification1" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">5 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={notification2} alt="notification2" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">10 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={notification3} alt="notification3" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">18 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={notification4} alt="notification4" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">25 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={notification5} alt="notification5" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">39 min ago</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}