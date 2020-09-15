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
                        Direct contact <br />
                        with representatives <br />
                        of the supervisory <br />
                        authority
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon2} className="icon2" />
                    </div>
                    <p className="features-item__text">
                        Easy and quick way <br />
                        of applying for <br />
                        the Programme
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon3} className="icon3" />
                    </div>
                    <p className="features-item__text">
                        Possibility <br />
                        of organising <br />
                        a working meeting
                    </p>
                </div>
                <div className="features-item">
                    <div className="features-item__icon">
                        <img src={icon4} className="icon4" />
                    </div>
                    <p className="features-item__text">
                        Possibility of using <br />
                        the know-how of <br />
                        the UKNF <br />
                        representatives
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;