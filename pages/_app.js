import React from 'react';
import App from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MobileNav from '../components/shared/MobileNav';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <h1>In progress</h1>
                {/* <Nav />
                <MobileNav />
                <Component {...pageProps} />
                <Footer /> */}
            </React.Fragment>
        )
    }
}

export default MyApp;