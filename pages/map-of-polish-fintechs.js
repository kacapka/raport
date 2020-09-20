import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import MapPage from '../components/map';

const MapOfPolishFintechs = () => (
    <Fragment>
        <Head title="Map of Polish fintechs" />
        <MapPage />
    </Fragment>
);

export default MapOfPolishFintechs;