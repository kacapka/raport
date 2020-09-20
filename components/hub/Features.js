import icon1 from '../../static/img/hub_icon_1.png';
import icon2 from '../../static/img/hub_icon_2.png';
import icon3 from '../../static/img/hub_icon_3.png';
import icon4 from '../../static/img/hub_icon_4.png';

const Features = () => {
    return (
        <div className="container--small features">
            <div className="features-wrapper">
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon1} className="icon1" />
                    </div>
                    <p className="features-item__text">
                        Direct contact
                        with representatives
                        of the supervisory
                        authority
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon2} className="icon2" />
                    </div>
                    <p className="features-item__text">
                        Easy and quick way
                        of applying for
                        the Programme
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon3} className="icon3" />
                    </div>
                    <p className="features-item__text">
                        Possibility
                        of organising
                        a working meeting
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon4} className="icon4" />
                    </div>
                    <p className="features-item__text">
                        Possibility of using
                        the know-how of
                        the UKNF
                        representatives
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;