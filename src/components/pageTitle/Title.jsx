import React from 'react';

import titleCss from './title.module.css';

export default function Title(props){

    return <React.Fragment>

        <div id='trending' className={titleCss.title_style}>

            <h2><span>•</span> {props.title} <span>•</span></h2>

        </div>

    </React.Fragment>

}
