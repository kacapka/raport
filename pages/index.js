import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import HomePage from '../components/home';

const Home = () => (
	<Fragment>
		<Head title="How to do FinTech in Poland" />
		<HomePage />
	</Fragment>
)

export default Home
