import React from 'react';
import App from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Nav />
                <Component {...pageProps} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MyApp;