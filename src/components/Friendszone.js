import React from 'react'
import '../assets/css/style.css'
import friend1 from '../assets/images/profile/profile-35x35-15.jpg'
import friend2 from '../assets/images/profile/profile-35x35-18.jpg'
import friend3 from '../assets/images/profile/profile-35x35-14.jpg'
import friend4 from '../assets/images/profile/profile-35x35-20.jpg'

import heart from '../assets/images/icons/heart.png'
import heartcolor from '../assets/images/icons/heart-color.png'

export const Friendszone = () => {
    return(
        <>
            <div className="card widget-item">
                <h4 className="widget-title">Friends Zone</h4>
                <div className="widget-body">
                    <ul className="like-page-list-wrapper">
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={friend1} alt="Friend1" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Ammeya Jakson</a></h3>
                                <p className="list-subtitle"><a href="# ">10 mutual</a></p>
                            </div>
                            <button className="like-button">
                                <img className="heart" src={heart} alt="hearticon" />
                                <img className="heart-color" src={heartcolor} alt="heartcolored" />
                            </button>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={friend2} alt="Friend2" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Jashon Muri</a></h3>
                                <p className="list-subtitle"><a href="# ">2 mutual</a></p>
                            </div>
                            <button className="like-button active">
                                <img className="heart" src={heart} alt="hearticon" />
                                <img className="heart-color" src={heartcolor} alt="heartcolored" />
                            </button>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={friend3} alt="Friend3" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Rolin Theitar</a></h3>
                                <p className="list-subtitle"><a href="# ">drama</a></p>
                            </div>
                            <button className="like-button">
                                <img className="heart" src={heart} alt="hearticon" />
                                <img className="heart-color" src={heartcolor} alt="heartcolored" />
                            </button>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={friend4} alt="Friend4" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Active Mind</a></h3>
                                <p className="list-subtitle"><a href="# ">fitness</a></p>
                            </div>
                            <button className="like-button">
                                <img className="heart" src={heart} alt="hearticon" />
                                <img className="heart-color" src={heartcolor} alt="heartcolored" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}