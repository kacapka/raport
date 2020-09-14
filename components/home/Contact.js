import * as Scroll from 'react-scroll';

import pasek from '../../static/img/contact_pasek_desktop.png';

const Contact = () => {
    return (
        <Scroll.Element name="home_contact">
            <section className="contact">
                <img src={pasek} className="contact-pasek" />
                <div className="contact-container container">
                    <h2 className="contact-title">Contact</h2>
                    <p className="contact-text">
                        If you have any question related to legal, operational or business aspects of conducting
                        FinTech activity in Poland – please contact us at
                </p>
                    <a href="mailto:info@fintechpoland.com" className="contact-email">info@fintechpoland.com</a>
                </div>
            </section>
        </Scroll.Element>
    );
};

export default Contact;