import map from '../../static/img/poland_map_2.png';
import revoult from '../../static/img/poland_revoult.png';

const Institutions = () => {
    return (
        <section className="institutions">
            <div className="container institutions-container">
                <h2>Outsourcing hub – financial institutions</h2>
                <p className="institutions-desc">
                    Poland has also attracted numerous financial sector players to establish
                    their business services centers on its territory.
                </p>
                <div className="institutions-wrapper">
                    <img src={map} alt="map" className="institutions-wrapper__map" />
                    <div className="institutions-wrapper__box">
                        <img src={revoult} alt="Revoult" className="institutions-wrapper__revoult" />
                        <p className="institutions-wrapper__desc">
                            Revolut – one of the key European
                            challenger banks – although having headquarters in UK, holds its biggest IT, customer support and compliance services center in Kraków and employs about 700 specialists.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Institutions;