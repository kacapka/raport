const Bank = () => {
    return (
        <div className="accordion-content">
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Form of business activity: </p>
                <p className="accordion-content__desc">Joint stock company, cooperative bank</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Amount of share capital:</p>
                <p className="accordion-content__desc">
                    Bank in the form of a joint stock company – EUR 5 m
                </p>
                <p className="accordion-content__desc">
                    Cooperative bank – EUR 1 m
                </p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Internal organisation:</p>
                <p className="accordion-content__desc">Establishment of the following units:</p>
                <p className="accordion-content__desc">1. A risk management unit in the bank</p>
                <p className="accordion-content__desc">2. A compliance unit</p>
                <p className="accordion-content__desc">3. An internal audit unit</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Requirements for managers occupying key positions or having significant ownership interest:</p>
                <p className="accordion-content__desc">1. Requirement of adequate education and experience</p>
                <p className="accordion-content__desc">2. The President of the Management Board and the Member of the Management Board supervising risk management should prove their knowledge of the Polish language</p>
                <p className="accordion-content__desc">3. Requirement of a minimum number of founders – 3 for a joint stock company and 10 for a cooperative bank</p>
                <p className="accordion-content__desc">4. The KNF’s consent to the appointment of the President of the Management Board and one member of the Management Board</p>
            </div>
            <div className="accordion-content__wrapper with-margin">
                <p className="accordion-content__title">Examples of other requirements:</p>
                <p className="accordion-content__desc">1. Requirement to provide suitable facilities</p>
                <p className="accordion-content__desc">2. The bank’s business plan for at least 3 years</p>
                <p className="accordion-content__desc">3. Requirement to appoint 1-3 proxies if more than 10 founders apply for a permit to establish a bank</p>
            </div>
        </div>
    );
};

export default Bank;