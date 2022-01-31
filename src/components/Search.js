import React from "react"
import '../assets/css/style.css'
import profilesmall from '../assets/images/profile/profile-small-37.jpg'


export const Search = () => {

    const showModal = () =>{
        
    }

    return(
        <>
             <div className="card card-small">
                <div className="share-box-inner">
                    <div className="profile-thumb">
                        <a href="# ">
                            <figure className="profile-thumb-middle">
                                <img src={profilesmall} alt="profilesmall" />
                            </figure>
                        </a>
                    </div>

                    <div className="share-content-box w-100">
                        <form className="share-text-box">
                            <textarea name="share" className="share-text-field" onClick={showModal} aria-disabled="true" placeholder="Say Something" id="email" data-toggle="modal" data-target="#textbox1" ></textarea>
                            <button className="btn-share" type="submit">share</button>

                        </form>
                    </div>
            
                    <div className="modal fade" id="textbox1" aria-labelledby="textbox1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Share Your Mood</h5>
                                    <button type="button" className="close" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body custom-scroll">
                                    <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something"></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="post-share-btn" data-bs-dismiss="modal">cancel</button>
                                    <button type="button" className="post-share-btn">post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
