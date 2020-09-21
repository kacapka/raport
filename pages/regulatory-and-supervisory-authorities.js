import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import AuthoritiesPage from '../components/authorities';
import MobileLogo from '../components/shared/MobileLogo';

const RegulatoryAndSupervisoryAuthorities = () => (
    <Fragment>
        <Head title="Regulatory and supervisory authorities" />
        <MobileLogo />
        <AuthoritiesPage />
    </Fragment>
);

export default RegulatoryAndSupervisoryAuthorities;