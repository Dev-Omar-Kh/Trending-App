import React from 'react'
import { Link } from 'react-router-dom';

import logoCss from './logo.module.css'

export default function Logo(props){

    return <React.Fragment>

        <div className={logoCss.logo}>

            <Link style={props.color === 'light' ? {color : 'var(--light-color)'} : {color : 'var(--dark-color)'}} className={logoCss.logo_link} to = '/' >T<span>R</span>E<span>N</span>D<span>I</span>N<span>G</span></Link>

        </div>

    </React.Fragment>

}
