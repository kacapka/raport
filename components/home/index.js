import { Fragment } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Reports from './Reports';
import Partners from './Partners';
import Contact from './Contact';

const HomePage = () => {
    return (
        <div className="home">
            <Hero />
            <Desc />
            <Reports />
            <Partners />
            <Contact />
        </div>
    );
};

export default HomePage;