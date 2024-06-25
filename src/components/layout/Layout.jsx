import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(){

    let [countNavScroll , setCountNavScroll] = useState(0);

    window.addEventListener('scroll' , () => {

        // eslint-disable-next-line no-restricted-globals
        setCountNavScroll(scrollY);

    });

    return(

        <React.Fragment>

            <Header scrolling = {countNavScroll} />

            < Outlet />

            <Footer />

        </React.Fragment>

    )

}
