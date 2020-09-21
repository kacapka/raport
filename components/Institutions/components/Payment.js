const Payment = () => {
    return (
        <div className="accordion-content">
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Form of business activity: </p>
                <p className="accordion-content__desc">Commercial law companies</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Amount of share capital:</p>
                <p className="accordion-content__desc">
                    Share capital amounts to:
                </p>
                <p className="accordion-content__desc">1. EUR 125,000</p>
                <p className="accordion-content__desc">2. EUR 50,000 – when the applicant provides only AIS services, or</p>
                <p className="accordion-content__desc">3. EUR 20,000 – when the applicant intends to provide only money transferring services</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Internal organisation:</p>
                <p className="accordion-content__desc">1. The applicant attaches a description of the risk management and internal control systems along with the application to the KNF</p>
                <p className="accordion-content__desc">2. Obligation to prepare and present the internal risk management and internal control procedures to the KNF</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Establishment of the following units:</p>
                <p className="accordion-content__desc">1. An internal audit unit</p>
                <p className="accordion-content__desc">2. A risk management unit</p>
                <p className="accordion-content__desc">3. A compliance unit</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Requirements for managers occupying key positions or having significant ownership interest:</p>
                <p className="accordion-content__desc">1. If the national payment institution intends to provide services through an agent, it must submit an appropriate notification to the KNF</p>
                <p className="accordion-content__desc">2. The manager must have a clean criminal record and a degree in payment institution management</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Examples of other requirements:</p>
                <p className="accordion-content__desc">1. To have civil liability insurance, bank guarantee, insurance guarantee or other security for claims of the user</p>
                <p className="accordion-content__desc">2. To have a programme of activities and a financial plan for at least 3 years</p>
            </div>
        </div>
    );
};

export default Payment;