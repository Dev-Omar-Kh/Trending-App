import React from 'react';

import mainCss from './main.module.css';

export default function Main(){

    return <React.Fragment>

        <div className={mainCss.container}>

            <main className={mainCss.main}>

                <div className={mainCss.main_cont}>

                    <p className={mainCss.p_1}>Stop Being Boring</p>
                    <p className={mainCss.p_2}>Watch <span>Trending</span> Movies</p>
                    <p className={mainCss.p_3}>Suggest your favorite movie and Tv to your best friend and make everyone good bad experience</p>
                    <a href='#trending' className={mainCss.view_trending}>View Trending</a>

                </div>

                <div className={mainCss.scroll}>

                    <span className={mainCss.span}><i className="fa-solid fa-angle-down"></i></span>
                    <span className={mainCss.span}><i className="fa-solid fa-angle-down"></i></span>
                    <span className={mainCss.span}><i className="fa-solid fa-angle-down"></i></span>

                </div>

            </main>

        </div>

    </React.Fragment>

}
