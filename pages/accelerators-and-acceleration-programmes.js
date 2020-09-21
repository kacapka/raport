import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import AcceleratorsPage from '../components/accelerators';
import MobileLogo from '../components/shared/MobileLogo';

const AcceleratorsAndAccelerationProgrammes = () => (
    <Fragment>
        <Head title="Accelerators and acceleration programmes" />
        <MobileLogo />
        <AcceleratorsPage />
    </Fragment>
);

export default AcceleratorsAndAccelerationProgrammes;