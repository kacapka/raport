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
                <img src="https://fintech-in-poland.s3.eu-central-1.amazonaws.com/placeholder.png" style={{ width: '100%' }} />
                {/* <Nav />
                <MobileNav />
                <Component {...pageProps} />
                <Footer /> */}
            </React.Fragment>
        )
    }
}

export default MyApp;