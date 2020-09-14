import logo from '../../static/img/logo_white.png';
import earth from '../../static/img/hero_earth.png';

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
            </div>
        </section>
    );
};

export default Hero;