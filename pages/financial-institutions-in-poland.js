import React, { Fragment } from 'react';
import Head from '../components/Head';
import InstitutionsPage from '../components/Institutions';
import "../styles/index.scss";
import MobileLogo from '../components/shared/MobileLogo';

const FinancialInstitutionsInPoland = () => (
    <Fragment>
        <Head title="Financial institutions in Poland" />
        <MobileLogo />
        <InstitutionsPage />
    </Fragment>
);

export default FinancialInstitutionsInPoland;