import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import MapPage from '../components/map';
import MobileLogo from '../components/shared/MobileLogo';

const MapOfPolishFintechs = () => (
    <Fragment>
        <Head title="Map of Polish fintechs" />
        <MobileLogo />
        <MapPage />
    </Fragment>
);

export default MapOfPolishFintechs;