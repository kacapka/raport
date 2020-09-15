import alior from '../../static/img/alior_logo.png';
import pko from '../../static/img/pko_logo.jpg';
import mBank from '../../static/img/mBank_logo.png';
import payU from '../../static/img/payU_logo.png';

const Desc = () => {

    return (
        <div className="container--small desc">
            <p className="desc-text with-margin">
                Entities granted a licence/permit by the Polish Financial Supervision Authority (KNF) to operate in Poland          as banks, investment companies, payment service providers and insurance companies may start their business activity in other countries of the European Economic Area on the basis of the so-called passporting.
            </p>
            <p className="desc-text with-margin">
                This procedure does not apply to lending institutions and small payment institutions, as there is no European level regulation regarding the cross-border activities of such entities and, consequently,
                not all countries require a licence or authorisation to conduct such activities.
            </p>
            <p className="desc-text with-margin">
                The passporting procedure allows the above-mentioned entities to operate outside the territory of Poland through a branch (exercising the EU freedom of establishment) or as part of cross-border activity without opening a branch (exercising the EU freedom to provide services).
            </p>
            <p className="desc-text with-margin">
                However, the supervisory authorities in individual EEA States, in which a given entrepreneur intends to start business activities, may publish detailed guidelines as to the expected form of business activity in that country. As a result, firstly, an entity with a licence/permit issued in Poland should verify the recommendations and announcements issued in connection with this matter by the supervisory authority of the host country (i.e. in the EEA State where it wants to provide services on the basis of
                the so-called European passport). This entity should therefore submit a relevant notice to the KNF
                (the so-called notification), which the KNF will then forward to its counterpart in the host country.
                If the host country’s supervisory authority does not oppose the received notification within the statutory time limit, the entrepreneur may start business activity in that country.
            </p>
            <p className="desc-text">
                The following entities that have made use of the financial license issued in Poland to offer financial services in other EU countries are noteworthy:
            </p>
            <div className="desc-logos">
                <img src={alior} alt="Alior bank" className="desc-logos__logo desc-logos__logo--1" />
                <img src={pko} alt="pko bank polski" className="desc-logos__logo desc-logos__logo--2" />
                <img src={mBank} alt="mBank" className="desc-logos__logo desc-logos__logo--3" />
                <img src={payU} alt="PayU" className="desc-logos__logo desc-logos__logo--4" />
            </div>
        </div>
    );
};

export default Desc;