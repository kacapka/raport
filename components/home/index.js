import { Fragment } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Reports from './Reports';
import PartnersLogos from '../shared/PartnersLogos';
import Contact from './Contact';

const HomePage = () => {
    return (
        <div className="home">
            <Hero />
            <Desc />
            <Reports />
            <PartnersLogos isTitle />
            <Contact />
        </div>
    );
};

export default HomePage;