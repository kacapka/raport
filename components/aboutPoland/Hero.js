import Title from "../shared/Title";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <Title color="green">ABOUT POLAND</Title>
                <div className="hero-details">
                    <div className="hero-details__item">
                        <p className="hero-details__item__value">38.4m</p>
                        <p className="hero-details__item__desc">population</p>
                    </div>
                    <div className="hero-details__item">
                        <p className="hero-details__item__value">35%</p>
                        <p className="hero-details__item__desc">of population with higher education</p>
                    </div>
                    <div className="hero-details__item">
                        <p className="hero-details__item__value">5<sup>th</sup></p>
                        <p className="hero-details__item__desc">
                            <span>largest internal market </span>
                            <span>– unlimited access to the EU market of over 500 million people</span>
                        </p>
                    </div>
                    <div className="hero-details__item">
                        <p className="hero-details__item__value">16</p>
                        <p className="hero-details__item__desc">cities with population exceeding 200,000 </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;