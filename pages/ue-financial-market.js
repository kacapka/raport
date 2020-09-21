import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import MarketPage from '../components/market';
import MobileLogo from '../components/shared/MobileLogo';

const UeFinancialMarket = () => (
    <Fragment>
        <Head title="UE financial market" />
        <MobileLogo />
        <MarketPage />
    </Fragment>
);

export default UeFinancialMarket;