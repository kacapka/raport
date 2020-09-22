import pasek from '../../static/img/contact_pasek_desktop.png';

const ConatctPage = () => {
    return (
        <section className="contact contact--full">
            <div className="contact-container">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-text">
                    If you have any question related to legal, operational or business aspects of conducting
                    FinTech activity in Poland – please contact us at
                </p>
                <a href="mailto:info@fintechpoland.com" className="contact-email">info@fintechpoland.com</a>
            </div>
        </section>
    );
};

export default ConatctPage;