import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import HubPage from '../components/hub';
import MobileLogo from '../components/shared/MobileLogo';

const InnovationHubProgramme = () => (
    <Fragment>
        <Head title="Innovation hub programme" />
        <MobileLogo />
        <HubPage />
    </Fragment>
);

export default InnovationHubProgramme;