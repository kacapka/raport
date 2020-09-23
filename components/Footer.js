import logo from '../static/img/logo_white.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <a href="http://fintechpoland.com/" target="blank">
                    <img src={logo} className="footer-logo" alt="fintech poland" />
                </a>
                <div className="footer-text">
                    <p className="bold">FinTech Poland Foundation.</p>
                    <p className="regular">We combine business, regulatory, academic and market innovators.</p>
                </div>
                <a href="mailto:info@fintechpoland.com" className="footer-email">info@fintechpoland.com</a>
            </div>
        </footer>
    );
};

export default Footer;