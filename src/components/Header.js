import React from 'react'
import '../assets/css/style.css'
import logo from '../assets/images/logo/logo.png'
import profile from '../assets/images/profile/profile-35x35-1.jpg'
import profilemobile from '../assets/images/logo/logo-white.png'
import profilesmallmobile from '../assets/images/profile/profile-small-1.jpg'
import profilesmallmobile3 from '../assets/images/profile/profile-small-3.jpg'
import profilesmallmobile4 from '../assets/images/profile/profile-small-4.jpg'
import profilesmallmobile5 from '../assets/images/profile/profile-small-5.jpg'
import profilesmallmobile6 from '../assets/images/profile/profile-small-6.jpg'
import profilesmallmobile13 from '../assets/images/profile/profile-35x35-13.jpg'
import profilemiddle1 from '../assets/images/profile/profile-midle-1.jpg'
import profilemiddle2 from '../assets/images/profile/profile-midle-2.jpg'
import profilemiddle3 from '../assets/images/profile/profile-midle-3.jpg'
import profilesettings from '../assets/images/icons/settings.png'
import profileclose from '../assets/images/icons/close.png'
import profileplane from '../assets/images/icons/plane.png'


const header_top = {
    top: '0',
    left: '0',
    position: 'fixed',
    width: '100%',
    zIndex: '9',
    background: '#fff',
    boxShadow: '0 0 8px 1px rgb(0 0 0 / 20%)',
    display: 'block !important'
};

export const Header = () => {
    return (
        <>
            <div className="header-top sticky bg-white d-none d-lg-block" style={header_top}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">                            
                            <div className="header-top-navigation">
                                <nav>
                                    <ul>
                                        <li className="active"><a href="index.html">home</a></li>
                                        <li className="msg-trigger"><a className="msg-trigger-btn" href="#a">message</a>
                                            <div className="message-dropdown" id="a">
                                                <div className="dropdown-title">
                                                    <p className="recent-msg">recent message</p>
                                                    <div className="message-btn-group">
                                                        <button>New group</button>
                                                        <button>New Message</button>
                                                    </div>
                                                </div>
                                                <ul className="dropdown-msg-list">
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile3} alt="profilesmall1" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>25 Apr 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile4} alt="profilesmall2" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Jhon Doe</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>15 May 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile5} alt="profilesmall3" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content">
                                                            <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>20 Jun 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                </ul>
                                                <div className="msg-dropdown-footer">
                                                    <button>See all in messenger</button>
                                                    <button>Mark All as Read</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="notification-trigger"><a className="msg-trigger-btn" href="#b">notification</a>
                                            <div className="message-dropdown" id="b">
                                                <div className="dropdown-title">
                                                    <p className="recent-msg">Notification</p>
                                                    <button>
                                                        <i className="flaticon-settings"></i>
                                                    </button>
                                                </div>
                                                <ul className="dropdown-msg-list">
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile3} alt="profilesmall4" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Robert Faul</a>,
                                                            <a href="profile.html">william jhon</a>
                                                            <p>and 35 other people reacted to your photo</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>25 Apr 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile4} alt="profilesmall5" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Robert mushkil</a>,
                                                            <a href="profile.html">Terry jhon</a>
                                                            <p>and 20 other people reacted to your photo</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>20 May 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                    <li className="msg-list-item d-flex justify-content-between">
                                                        
                                                        <div className="profile-thumb">
                                                            <figure className="profile-thumb-middle">
                                                                <img src={profilesmallmobile6} alt="profilesmall6" />
                                                            </figure>
                                                        </div>
                                                        
                                                        <div className="msg-content notification-content">
                                                            <a href="profile.html">Horijon Mbala</a>,
                                                            <a href="profile.html">Bashu jhon</a>
                                                            <p>and 55 other people reacted to your post</p>
                                                        </div>
                                                        
                                                        <div className="msg-time">
                                                            <p>15 Jan 2019</p>
                                                        </div>
                                                        
                                                    </li>
                                                </ul>
                                                <div className="msg-dropdown-footer">
                                                    <button>See all in messenger</button>
                                                    <button>Mark All as Read</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>

                        <div className="col-md-2">
                            
                            <div className="brand-logo text-center">
                                <a href="index.html">
                                    <img src={logo} alt="brand logo" />
                                </a>
                            </div>
                            
                        </div>

                        <div className="col-md-5">
                            <div className="header-top-right d-flex align-items-center justify-content-end">
                                <div className="header-top-search">
                                    <form className="top-search-box">
                                        <input type="text" placeholder="Search" className="top-search-field" />
                                        <button className="top-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                                
                                <div className="profile-setting-box">
                                    <div className="profile-thumb-small">
                                        <a href="# " className="profile-triger">
                                            <figure>
                                                <img src={profile} alt="profilesmall7" />
                                            </figure>
                                        </a>
                                        <div className="profile-dropdown">
                                            <div className="profile-head">
                                                <h5 className="name"><a href="# ">Madison Howard</a></h5>
                                                <a className="mail" href="# ">mailnam@mail.com</a>
                                            </div>
                                            <div className="profile-body">
                                                <ul>
                                                    <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                                                    <li><a href="# "><i className="flaticon-message"></i>Inbox</a></li>
                                                    <li><a href="# "><i className="flaticon-document"></i>Activity</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="# "><i className="flaticon-settings"></i>Setting</a></li>
                                                    <li><a href="signup.html"><i className="flaticon-unlock"></i>Sing out</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className="mobile-header-wrapper sticky d-block d-lg-none">
                    <div className="mobile-header position-relative ">
                        <div className="mobile-logo">
                            <a href="index.html">
                                <img src={profilemobile} alt="logo" />
                            </a>
                        </div>
                        <div className="mobile-menu w-100">
                            <ul>
                                <li>
                                    <button className="notification request-trigger">
                                        <i className="far fa-user"></i>
                                        <span>03</span>
                                    </button>
                                    <ul className="frnd-request-list">
                                        <li>
                                            <div className="frnd-request-member">
                                                <figure className="request-thumb">
                                                    <a href="profile.html">
                                                        <img src={profilemiddle1} alt="author" />
                                                    </a>
                                                </figure>
                                                <div className="frnd-content">
                                                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                    <p className="author-subtitle">Works at HasTech</p>
                                                    <div className="request-btn-inner">
                                                        <button className="frnd-btn">confirm</button>
                                                        <button className="frnd-btn delete">delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="frnd-request-member">
                                                <figure className="request-thumb">
                                                    <a href="profile.html">
                                                        <img src={profilemiddle2} alt="author2" />
                                                    </a>
                                                </figure>
                                                <div className="frnd-content">
                                                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                    <p className="author-subtitle">Works at HasTech</p>
                                                    <div className="request-btn-inner">
                                                        <button className="frnd-btn">confirm</button>
                                                        <button className="frnd-btn delete">delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="frnd-request-member">
                                                <figure className="request-thumb">
                                                    <a href="profile.html">
                                                        <img src={profilemiddle3} alt="author3" />
                                                    </a>
                                                </figure>
                                                <div className="frnd-content">
                                                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                    <p className="author-subtitle">Works at HasTech</p>
                                                    <div className="request-btn-inner">
                                                        <button className="frnd-btn">confirm</button>
                                                        <button className="frnd-btn delete">delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button className="notification">
                                        <i className="far fa-bell"></i>
                                        <span>03</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="chat-trigger notification">
                                        <i className="far fa-comments"></i>
                                        <span>04</span>
                                    </button>
                                    <div className="mobile-chat-box">
                                        <div className="live-chat-title">
                                            <div className="profile-thumb">
                                                <a href="profile.html">
                                                    <figure className="profile-thumb-small profile-active">
                                                        <img src={profilesmallmobile13} alt="profilesmall8" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="posted-author">
                                                <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                                <span className="active-pro">active now</span>
                                            </div>
                                            <div className="live-chat-settings ml-auto">
                                                <button className="chat-settings"><img src={profilesettings} alt="setting" /></button>
                                                <button className="close-btn"><img src={profileclose} alt="profileclose" /></button>
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
                                        <div className="chat-text-field mob-text-box">
                                            <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                            <button className="chat-message-send" type="submit" value="submit">
                                                <img src={profileplane} alt="profileplane" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="search-trigger">
                                        <i className="fas fa-search"></i>
                                        <i className="close-icon flaticon-cross-out"></i>
                                    </button>
                                    <div className="mob-search-box">
                                        <form className="mob-search-inner">
                                            <input type="text" placeholder="Search Here" className="mob-search-field" />
                                            <button className="mob-search-btn"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-header-profile">
                            <div className="profile-thumb profile-setting-box">
                                <a href="# " className="profile-triger">
                                    <figure className="profile-thumb-middle">
                                        <img src={profilesmallmobile} alt="profilesmall10" />
                                    </figure>
                                </a>
                                <div className="profile-dropdown text-left">
                                    <div className="profile-head">
                                        <h5 className="name"><a href="# ">Madison Howard</a></h5>
                                        <a className="mail" href="# ">mailnam@mail.com</a>
                                    </div>
                                    <div className="profile-body">
                                        <ul>
                                            <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                                            <li><a href="# "><i className="flaticon-message"></i>Inbox</a></li>
                                            <li><a href="# "><i className="flaticon-document"></i>Activity</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="# "><i className="flaticon-settings"></i>Setting</a></li>
                                            <li><a href="signup.html"><i className="flaticon-unlock"></i>Sing out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
