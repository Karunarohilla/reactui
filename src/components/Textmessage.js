import React from 'react'
import '../assets/css/style.css'

import profile13 from '../assets/images/profile/profile-35x35-13.jpg';
import profileplane from '../assets/images/icons/plane.png';

export const Textmessage = () => {
    return(
        <>
            <div className="footer-card position-relative">
                <div className="live-chat-inner">
                    <div className="chat-text-field">
                        <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                        <button className="chat-message-send" type="submit" value="submit">
                            <img src={profileplane} alt="profileplane" />
                        </button>
                    </div>
                    <div className="chat-output-box">
                        <div className="live-chat-title">
                            <div className="profile-thumb active">
                                <a href="# ">
                                    <figure className="profile-thumb-small">
                                        <img src={profile13} alt="profile13" />
                                    </figure>
                                </a>
                            </div>

                            <div className="posted-author">
                                <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                <span className="active-pro">active now</span>
                            </div>
                            <div className="live-chat-settings ms-auto">
                                <button className="chat-settings"><i className="flaticon-settings"></i></button>
                                <button className="close-btn" data-close="chat-output-box"><i className="flaticon-cross-out"></i></button>
                            </div>
                        </div>
                        <div className="message-list-inner">
                            <ul className="message-list custom-scroll">
                                <li className="text-friends">
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                    <div className="message-time">10 minute ago</div>
                                </li>
                                <li className="text-author">
                                    <p>Many desktop publishing packages and web page editors</p>
                                    <div className="message-time">5 minute ago</div>
                                </li>
                                <li className="text-friends">
                                    <p>packages and web page editors </p>
                                    <div className="message-time">2 minute ago</div>
                                </li>
                                <li className="text-friends">
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                    <div className="message-time">10 minute ago</div>
                                </li>
                                <li className="text-author">
                                    <p>Many desktop publishing packages and web page editors</p>
                                    <div className="message-time">5 minute ago</div>
                                </li>
                                <li className="text-friends">
                                    <p>packages and web page editors </p>
                                    <div className="message-time">2 minute ago</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}