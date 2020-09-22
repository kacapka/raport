import React from 'react';
import App from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MobileNav from '../components/shared/MobileNav';
import Cookies from '../components/shared/Cookies';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Nav />
                <MobileNav />
                <Component {...pageProps} />
                <Footer />
                <Cookies />
            </React.Fragment>
        )
    }
}

export default MyApp;