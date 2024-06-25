import React from 'react';

import errorCss from './error.module.css';

export default function Error(props){

    return <React.Fragment>

        <div className={errorCss.container}>

            <div className={errorCss.error_cont}>

                <img className={errorCss.img} src={require('../../Images/error-type-light-dark-2.png')} alt="" />

                <p className={errorCss.exp}>This page does not exist or has expired. If you encounter any problems, please contact us</p>

                <a className={errorCss.contact} href="mailto:devomar.2004@gmail.com">Contact Us</a>

            </div>

        </div>

    </React.Fragment>

}
