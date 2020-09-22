import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import PrivacyPolicyPage from '../components/policy';
import MobileLogo from '../components/shared/MobileLogo';

const PrivacyPolicy = () => (
    <Fragment>
        <Head title="Privacy policy" />
        <MobileLogo />
        <PrivacyPolicyPage />
    </Fragment>
);

export default PrivacyPolicy;