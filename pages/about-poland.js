import React, { Fragment } from 'react';
import Head from '../components/Head';
import AboutPolandPage from '../components/aboutPoland';
import "../styles/index.scss";

const AboutPoland = () => (
    <Fragment>
        <Head title="About Poland" />
        <AboutPolandPage />
    </Fragment>
);

export default AboutPoland;