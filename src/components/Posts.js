import React from "react"
import '../assets/css/style.css'
import profilesmall from '../assets/images/profile/profile-small-1.jpg'
import postimage1 from '../assets/images/post/post-1.jpg'
import profilesmall1 from '../assets/images/profile/profile-small-9.jpg'
import { Socialmedia } from "./Socialmedia"

export const Posts = () => {
    return(
        <>
            <div className="card">
                <div className="post-title d-flex align-items-center">
                    <div className="profile-thumb">
                        <a href="# ">
                            <figure className="profile-thumb-middle">
                                <img src={profilesmall} alt="profilesmall" />
                            </figure>
                        </a>
                    </div>
                    

                    <div className="posted-author">
                        <h6 className="author"><a href="profile.html">merry watson</a></h6>
                        <span className="post-time">20 min ago</span>
                    </div>

                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>edit post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="post-content">
                    <p className="post-desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                        in their infancy.
                    </p>
                    <div className="post-thumb-gallery">
                        <figure className="post-thumb img-popup">
                            <a href={postimage1}>
                                <img src={postimage1} alt="postimage1" />
                            </a>
                        </figure>
                    </div>
                    
                    <Socialmedia />

                </div>
            </div>

            <div className="card">
                <div className="post-title d-flex align-items-center">
                    <div className="profile-thumb">
                        <a href="# ">
                            <figure className="profile-thumb-middle">
                                <img src={profilesmall1} alt="profilesmall1" />
                            </figure>
                        </a>
                    </div>

                    <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                        <span className="post-time">15 min ago</span>
                    </div>

                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>edit post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="post-content">
                    <p className="post-desc pb-0">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for
                    </p>
                    <Socialmedia />
                </div>
            </div>
        </>
    )
}