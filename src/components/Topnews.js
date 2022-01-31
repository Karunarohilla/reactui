import React from 'react'
import '../assets/css/style.css'
import topnewsimage1 from '../assets/images/profile/profile-35x35-20.jpg'
import topnewsimage2 from '../assets/images/profile/profile-35x35-18.jpg'
import topnewsimage3 from '../assets/images/profile/profile-35x35-13.jpg'
import topnewsimage4 from '../assets/images/profile/profile-35x35-17.jpg'
import topnewsimage5 from '../assets/images/profile/profile-35x35-10.jpg'

export const Topnews = () => {
    return(
        <>
            <div className="card widget-item">
                <h4 className="widget-title">latest top news</h4>
                <div className="widget-body">
                    <ul className="like-page-list-wrapper">
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={topnewsimage1} alt="topnewsimage1" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">2 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={topnewsimage2} alt="topnewsimage2" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">20 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={topnewsimage3} alt="topnewsimage3" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">30 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={topnewsimage4} alt="topnewsimage4" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Any one can join with us if you want</a></h3>
                                <p className="list-subtitle">40 min ago</p>
                            </div>
                        </li>
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={topnewsimage5} alt="topnewsimage5" />
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