import React, { Fragment } from 'react';
import Head from '../components/Head';
import InstitutionsPage from '../components/Institutions';
import "../styles/index.scss";

const FinancialInstitutionsInPoland = () => (
    <Fragment>
        <Head title="Financial institutions in Poland" />
        <InstitutionsPage />
    </Fragment>
);

export default FinancialInstitutionsInPoland;