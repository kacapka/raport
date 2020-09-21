const Insurance = () => {
    return (
        <div className="accordion-content">
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Form of business activity: </p>
                <p className="accordion-content__desc">Joint stock company, mutual insurance company</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Amount of share capital:</p>
                <p className="accordion-content__desc">
                    The minimum share capital depends on the scope of services provided and ranges between EUR 2,5 m and EUR 3,7 m
                </p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Internal organisation:</p>
                <p className="accordion-content__desc">
                    Establishment of the actuarial function supervised by an actuary entered in the register of actuaries kept by the KNF
                </p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Requirements for managers occupying key positions or having significant ownership interest:</p>
                <p className="accordion-content__desc">1. Requirement of adequate education and experience</p>
                <p className="accordion-content__desc">2. Clean record requirement</p>
                <p className="accordion-content__desc">3. The KNF’s consent to the appointment of the President of the Management Board and the Member of the Management Board responsible for risk management</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Examples of other requirements:</p>
                <p className="accordion-content__desc">Business plan with a simulation account for the first 3 financial years of business activity.</p>
            </div>
        </div>
    );
};

export default Insurance;