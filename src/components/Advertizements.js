import React from 'react'
import '../assets/css/style.css'
import advertizement from '../assets/images/banner/advertise.jpg'

export const Advertizement = () => {
    return(
        <>
            <div className="card widget-item">
                <h4 className="widget-title">Advertizement</h4>
                <div className="widget-body">
                    <div className="add-thumb">
                        <a href="# ">
                            <img src={advertizement} alt="advertisement" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}