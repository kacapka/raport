
import Title from '../shared/Title';

import logo from '../../static/img/logo_black.png';
import logo1 from '../../static/img/knf_logo.jpg';
import logo2 from '../../static/img/partners_logo_2.png';
import logo3 from '../../static/img/bird_logo.png';
import logo4 from '../../static/img/partners_logo_4.jpg';
import logo5 from '../../static/img/pko_logo.jpg';
import logo6 from '../../static/img/alior_logo.png';
import logo7 from '../../static/img/partners_logo_7.png';
import logo8 from '../../static/img/partners_logo_8.png';
import logo9 from '../../static/img/partners_logo_9.png';
import logo10 from '../../static/img/accelpoint_logo.png';
import logo11 from '../../static/img/impact_logo.png';

const PartnersLogos = ({ isTitle }) => {
    return (
        <section className="partners-logos">
            <div className="container partners-container">
                {isTitle && <Title color="purple">PARTNERS</Title>}
                <div className="partners-list">
                    <div className="partners-list__item">
                        <h4>Author:</h4>
                        <div className="partners-list__row">
                            <a href="http://fintechpoland.com/" target="blank">
                                <img src={logo} alt="fintech poland" className="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="partners-list__item">
                        <h4>Co-author:</h4>
                        <div className="partners-list__row">
                            <img src={logo1} alt="KNF" className="logo1" />
                            <img src={logo2} alt="PFR Group" className="logo2" />
                        </div>
                    </div>
                    <div className="partners-list__item">
                        <h4>Strategic Partners:</h4>
                        <div className="partners-list__row">
                            <img src={logo3} alt="Bird&Bird" className="logo3" />
                            <img src={logo4} alt="MasterCard Advisors" className="logo4" />
                            <img src={logo5} alt="PKO Bank Polski" className="logo5" />
                        </div>
                    </div>
                    <div className="partners-list__item">
                        <h4>Partner:</h4>
                        <div className="partners-list__row">
                            <img src={logo6} alt="Alior Bank" className="logo6" />
                            <img src={logo10} alt="Accelpoint" className="logo10" />
                            <img src={logo7} alt="Cashless.pl" className="logo7" />
                            <img src={logo11} alt="Impact" className="logo11" />
                        </div>
                    </div>
                    <div className="partners-list__row align-top">
                        <div className="partners-list__item">
                            <h5>Scientific Patronage:</h5>
                            <p className="logo-text">
                                CENTRUM REGULACJI USŁUG <br />
                                I TECHNOLOGII FINANSOWYCH <br />
                                Wydział Prawa i Administracji UW
                            </p>
                        </div>
                        <div className="partners-list__item">
                            <h5>Patronage:</h5>
                            <div className="partners-list__images-wrapper">
                                <img src={logo8} alt="Alior Bank" className="logo8" />
                                <img src={logo9} alt="Alior Bank" className="logo9" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersLogos;