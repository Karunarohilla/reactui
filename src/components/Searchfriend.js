import React from 'react'
import '../assets/css/style.css'

import profile1 from '../assets/images/profile/profile-35x35-1.jpg'
import profile2 from '../assets/images/profile/profile-35x35-2.jpg'
import profile3 from '../assets/images/profile/profile-35x35-3.jpg'
import profile4 from '../assets/images/profile/profile-35x35-4.jpg'
// import profile5 from '../assets/images/profile/profile-35x35-5.jpg'
import profile6 from '../assets/images/profile/profile-35x35-6.jpg'
import profile7 from '../assets/images/profile/profile-35x35-7.jpg'
import profile8 from '../assets/images/profile/profile-35x35-8.jpg'
import profile9 from '../assets/images/profile/profile-35x35-9.jpg'

export const Searchfriend = () => {
    return(
        <>
            <div className="footer-card position-relative">
                <div className="friends-search">
                    <form className="search-box">
                        <input type="text" placeholder="Search Your Friends" className="search-field" />
                        <button className="search-btn"><i className="flaticon-search"></i></button>
                    </form>
                </div>
                <div className="friend-search-list">
                    <div className="frnd-search-title">
                        <button className="frnd-search-icon"><i className="flaticon-settings"></i></button>
                        <p>search friends</p>
                        <button className="close-btn" data-close="friend-search-list"><i className="flaticon-cross-out"></i></button>
                    </div>
                    <div className="frnd-search-inner custom-scroll">
                        <ul>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile1} alt="profile1" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author">Jon Wilime</h6>
                                    <p>Many desktop publishing</p>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile2} alt="profile2" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                    <button className="add-frnd">add friend</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile3} alt="profile3" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                    <button className="add-frnd">add friend</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile4} alt="profile4" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                                    <button className="add-frnd">10 mutual friends</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile6} alt="profile5" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                                    <button className="add-frnd">12 mutual friends</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile7} alt="profile6" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                    <button className="add-frnd">add friend</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile8} alt="profile8" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                                    <button className="add-frnd">10 mutual friends</button>
                                </div>
                            </li>
                            <li className="d-flex align-items-center profile-active">
                                <div className="profile-thumb active">
                                    <a href="# ">
                                        <figure className="profile-thumb-small">
                                            <img src={profile9} alt="profile9" />
                                        </figure>
                                    </a>
                                </div>

                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                                    <button className="add-frnd">12 mutual friends</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}