import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import MarketPage from '../components/market';

const UeFinancialMarket = () => (
    <Fragment>
        <Head title="UE financial market" />
        <MarketPage />
    </Fragment>
);

export default UeFinancialMarket;