import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import SectorPage from '../components/sector';
import MobileLogo from '../components/shared/MobileLogo';

const ThePolishFinancialSector = () => (
    <Fragment>
        <Head title="The Polish financial sector" />
        <MobileLogo />
        <SectorPage />
    </Fragment>
);

export default ThePolishFinancialSector;