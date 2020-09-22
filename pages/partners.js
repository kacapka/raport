import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import PartnersPage from '../components/partners';
import MobileLogo from '../components/shared/MobileLogo';

const Partners = () => (
    <Fragment>
        <Head title="Partners & Authors" />
        <MobileLogo />
        <PartnersPage />
    </Fragment>
);

export default Partners;