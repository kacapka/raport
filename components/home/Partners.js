
import Title from '../shared/Title';

import logo from '../../static/img/logo_black.png';
import logo1 from '../../static/img/partners_logo_1.png';
import logo2 from '../../static/img/partners_logo_2.png';
import logo3 from '../../static/img/partners_logo_3.png';
import logo4 from '../../static/img/partners_logo_4.png';
import logo5 from '../../static/img/partners_logo_5.png';
import logo6 from '../../static/img/partners_logo_6.png';
import logo7 from '../../static/img/partners_logo_7.png';
import logo8 from '../../static/img/partners_logo_8.png';
import logo9 from '../../static/img/partners_logo_9.png';

const Partners = () => {
    return (
        <section className="partners">
            <div className="container partners-container">
                <Title color="purple">PARTNERS</Title>
                <div className="partners-list">
                    <div className="partners-list__item">
                        <h4>Author:</h4>
                        <div className="partners-list__row">
                            <img src={logo} alt="fintech poland" className="logo" />
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
                        </div>
                    </div>
                    <div className="partners-list__row align-top">
                        <div className="partners-list__item">
                            <h5>Media Patronage:</h5>
                            <img src={logo7} alt="Cashless.pl" className="logo7" />
                        </div>
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

export default Partners;