import React from 'react'
import '../assets/css/style.css'
import { Picandname } from './Picandname'
import { Youmaylike } from './Youmaylike'
import { Topnews } from './Topnews'
import { Notification } from './Notifications'
import { Advertizement } from './Advertizements'
import { Friendszone } from './Friendszone'
import { Search } from './Search'
import { Posts } from './Posts'

export const Bodysection = () => {
    return(
        <>
            <main>
                <div className="main-wrapper pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">                                
                                <aside className="widget-area">
                                    <Picandname />
                                    <Youmaylike />
                                    <Topnews />
                                </aside>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2">
                                <Search />
                                <Posts />
                                
                            </div>

                            <div className="col-lg-3 order-3">
                                <aside className="widget-area">
                                    <Notification />
                                    <Advertizement />
                                    <Friendszone />
                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
           
        </>
    )
}
