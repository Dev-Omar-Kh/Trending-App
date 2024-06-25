import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import headerCss from './header.module.css';
import './active.css';
import Logo from '../logo/Logo';

export default function Header(props){

    let [countNav , setCountNav] = useState(0);


    const clickNav = () => {

        setCountNav(countNav+1);

    };

    const clickOutNav = () => {
        
        setCountNav(0);

    };

    return <React.Fragment>

        <div id='header' className={headerCss.header} style={props.scrolling > 0 ? {backgroundColor : 'var(--dark-color)'} : {backgroundColor : 'transparent'}} >

            <Logo color = 'light' />

            <nav className={headerCss.nav}>

                <ul id='ul' className={headerCss.ul} style={countNav %2 !== 0 ? {opacity : '1' , right : '0px'} : {}}>

                    <NavLink onClick={clickOutNav} to = '/' className={headerCss.li_link} >
                        <li className={headerCss.li} ><i className="fa-solid fa-house-chimney"></i> All Trending</li>
                    </NavLink>

                    <NavLink onClick={clickOutNav} to = '/movie' className={headerCss.li_link} >
                        <li className={headerCss.li} ><i className="fa-solid fa-clapperboard"></i> Movies</li>
                    </NavLink>

                    <NavLink onClick={clickOutNav} to = '/people' className={headerCss.li_link} >
                        <li className={headerCss.li} ><i className="fa-solid fa-user"></i> People</li>
                    </NavLink>

                    <NavLink onClick={clickOutNav} to = 'tv' className={headerCss.li_link}>
                        <li className={headerCss.li} ><i className="fa-solid fa-tv"></i> TV</li>
                    </NavLink>

                </ul>

            </nav>

            <div className={headerCss.nav_ph}>

                <div onClick={clickNav} id='nav_ph' className={headerCss.bar} htmlFor="check">

                    <span className={headerCss.top} style={countNav % 2 !== 0 ? {top : '50%' , left : '0%' , transform: 'rotate(45deg) translateY(-50%)'} : {}} ></span>
                    <span className={headerCss.middle} style={countNav % 2 !== 0 ? {opacity : '0' , transform: 'translateX(-20px)'} : {}} ></span>
                    <span className={headerCss.bottom} style={countNav % 2 !== 0 ? {top : '50%' , left : '3%' , transform: 'rotate(-45deg) translateY(-50%)'} : {}} ></span>

                </div>

            </div>

        </div>

    </React.Fragment> 

}
