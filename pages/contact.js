import React, { Fragment } from 'react';
import Head from '../components/Head';
import "../styles/index.scss";
import Conatct from '../components/contact';
import MobileLogo from '../components/shared/MobileLogo';

const ContactPage = () => (
    <Fragment>
        <Head title="Contact" />
        <MobileLogo />
        <Conatct />
    </Fragment>
)

export default ContactPage;