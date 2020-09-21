const Brokerage = () => {
    return (
        <div className="accordion-content">
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Form of business activity:</p>
                <p className="accordion-content__desc">Commercial law companies</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Amount of share capital:</p>
                <p className="accordion-content__desc">
                    The minimum share capital depends on the scope of services provided and ranges between
                    EUR 50,000, EUR 125,000 or EUR 730,000
                </p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Internal organisation:</p>
                <p className="accordion-content__desc">
                    Preparation of the internal documentation (including that of organisational units such as a compliance unit, risk management unit or internal audit unit) necessary to meet regulatory requirements
                </p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Requirements for managers occupying key positions or having significant ownership interest:</p>
                <p className="accordion-content__desc">1. At least two general partners or partners with a right to exercise the profession of a securities broker or an investment advisor</p>
                <p className="accordion-content__desc">2. Requirement relating to a clean record for fiscal offences</p>
                <p className="accordion-content__desc">3. The KNF’s consent to the appointment of the President of the Management Board and the Member of the Management Board responsible for risk management</p>
            </div>
        </div>
    );
};

export default Brokerage;