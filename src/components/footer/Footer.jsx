import React from 'react';

import footerCss from './footer.module.css';
import Logo from '../logo/Logo';

export default function Footer(){


    return <React.Fragment>

        <div id='footer' className={footerCss.footer}>

            <Logo color = 'dark' />

            <div className={footerCss.social_card}>

                <button className={footerCss.Btn + ' ' + footerCss.github}>

                    <a rel="noreferrer" href='https://github.com/Dev-Omar-Kh' target="_blank" className={footerCss.svgContainer}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <span className={footerCss.BG}></span>

                </button>

                <button className={footerCss.Btn + ' ' +  footerCss.whatsapp}>

                    <a rel="noreferrer" href='https://wa.me/201140067845' target="_blank" className={footerCss.svgContainer}>
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <span className={footerCss.BG}></span>

                </button>

                <button className={footerCss.Btn + ' ' + footerCss.linkdin}>

                    <a rel="noreferrer" href='https://www.linkedin.com/in/omar-khaled-developer2004/' target="_blank" className={footerCss.svgContainer}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <span className={footerCss.BG}></span>

                </button>

                <button className={footerCss.Btn + ' ' +  footerCss.discord}>

                    <a rel="noreferrer" href='https://discord.com/channels/@me' target="_blank" className={footerCss.svgContainer}>
                        <i className="fa-brands fa-discord"></i>
                    </a>
                    <span className={footerCss.BG}></span>

                </button>

            </div>

        </div>

    </React.Fragment>
}
