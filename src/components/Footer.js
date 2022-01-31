import React from 'react'
import '../assets/css/style.css'
import {Searchfriend} from './Searchfriend'
import {Activefriends} from './Activefriends'
import {Textmessage} from './Textmessage'

export const Footer = () => {
    return(
        <>
            <footer className="d-none d-lg-block">
                <div className="footer-area reveal-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-wrapper">
                                    <Searchfriend />
                                    <Activefriends />
                                    <Textmessage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}