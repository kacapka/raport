import Button from "../shared/Button";

const Desc = () => {
    return (
        <section className="desc">
            <div className="desc-container">
                <p className="desc-text">
                    The “How to do FinTech in Poland” report is the first guide addressed to foreign investors presenting Poland as
                    a recommended place for conducting and developing innovative financial services. Step by step, this publication presents the country’s economic and human capital,
                    the maturity and innovativeness of its financial sector,
                    the regulatory framework determined by national and EU legislation as well as its key market players.
                </p>
                <div className="desc-box">
                    <p>
                        „The global FinTech sector is at a turning point.
                    </p>
                    <p className="desc-box__text">
                        As predicted by analysts, in 2030 it will reach annual revenues of
                        USD 500bn and will develop three times faster than the traditional
                        financial sector.”
                    </p>
                    <Button className="desc-box__button" />
                    <div className="container desc-box__frame"></div>
                </div>
            </div>
        </section>
    );
};

export default Desc;