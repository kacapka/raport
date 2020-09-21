import logo from '../../static/img/logo_white.png';
import earth from '../../static/img/hero_earth.png';
import pasek from '../../static/img/subpage_pasek_desktop.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div>
                    <img src={logo} className="hero-logo" alt="fintech poland" />
                    <h1>
                        How to <br />
                        do FinTech <br />
                        <span>in Poland?</span>
                    </h1>
                </div>
                <div>
                    <img src={earth} className="hero-earth" alt="earth" />
                </div>
                <img src={pasek} className="hero-pasek" />
            </div>
        </section>
    );
};

export default Hero;