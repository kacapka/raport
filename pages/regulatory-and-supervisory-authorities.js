import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import AuthoritiesPage from '../components/authorities';

const RegulatoryAndSupervisoryAuthorities = () => (
    <Fragment>
        <Head title="Regulatory and supervisory authorities" />
        <AuthoritiesPage />
    </Fragment>
);

export default RegulatoryAndSupervisoryAuthorities;