import React from 'react'
import '../assets/css/style.css'
import adventure from '../assets/images/profile/profile-35x35-1.jpg'
import food from '../assets/images/profile/profile-35x35-10.jpg'
import drama from '../assets/images/profile/profile-35x35-5.jpg'
import fitness from '../assets/images/profile/profile-35x35-4.jpg'
import heart from '../assets/images/icons/heart.png'
import heartcolor from '../assets/images/icons/heart-color.png'

export const Youmaylike = () => {
    return(
        <>
            <div className="card widget-item">
                <h4 className="widget-title">page you may like</h4>
                <div className="widget-body">
                    <ul className="like-page-list-wrapper">
                        <li className="unorder-list">
                            <div className="profile-thumb">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={adventure} alt="adventure" />
                                    </figure>
                                </a>
                            </div>

                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Travel The World</a></h3>
                                <p className="list-subtitle"><a href="# ">adventure</a></p>
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
                                        <img src={food} alt="food" />
                                    </figure>
                                </a>
                            </div>
                            <div className="unorder-list-info">
                                <h3 className="list-title"><a href="# ">Foodcort Nirala</a></h3>
                                <p className="list-subtitle"><a href="# ">food</a></p>
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
                                        <img src={drama} alt="drama" />
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
                                        <img src={fitness} alt="fitness" />
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