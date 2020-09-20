import { Fragment } from 'react';

import knf from '../../static/img/knf_logo.jpg';
import nbp from '../../static/img/nbp_logo.png';
import mf from '../../static/img/mf_logo.png';
import puodo from '../../static/img/puodo_logo.png';
import LisItem from './ListItem';

const KnfContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                The main purpose of KNF is to ensure the stability of the entire financial sector as well as the safety of customers and the deposits they accumulate. Moreover, in 2017 an additional purpose has been added
                – supporting financial innovation.
            </p>
            <ul className="with-margin">
                <li>The KNF grants permits or licenses to conduct business and supervises the activities of, among others:</li>
                <li>• banks,</li>
                <li>• investment firms,</li>
                <li>• payment institutions and electronic money institutions,</li>
                <li>• insurance companies.</li>
            </ul>
            <p>Lending institutions are not currently covered by KNF and are only subject to registration with the KNF.</p>
        </Fragment>
    );
};

const NbpContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                NBP is the central bank of the Republic of Poland which performs three basic functions: the issuing bank, the bank for the banks and the central state bank. The main areas of NBP activity include, among others:
            </p>
            <ul>
                <li>• conducting monetary policy (maintaining a stable price level),</li>
                <li>• actions for the stability of the national financial system (maintaining stability of the banking sector),</li>
                <li>• issuing of the currency (exclusive right to issue the currency of the Republic of Poland),</li>
                <li>• development of payment system (operating the SORBNET payment system, covering the banks’ current accounts, issuing permits and supervising payment schemes),</li>
                <li>• management of Polish official reserves,</li>
                <li>• services to the State Treasury.</li>
            </ul>
        </Fragment>
    );
};

const MfContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                The MF is a central body whose task is to develop, implement and control the implementation of
                the state budget, maintain and administrate the system of local government financing, the budgetary sphere and state security, as well as manage public debt.
            </p>
            <p>
                The MF is also the body responsible for initiating and giving opinions on the legislative process of most provisions regulating the financial market.
            </p>
        </Fragment>
    );
};

const GiifContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                The GIIF is the most important authority responsible for counteracting money laundering and the financing of terrorism (AML/CTF). The main competences of the GIIF are:
            </p>
            <ul>
                <li>• supervision over the fulfilment of AML/CTF duties by the obliged entities (mostly financial institutions),</li>
                <li>• preparing of the National AML/CTF Risk Assessment,</li>
                <li>• analysing notification of suspected transactions, freezing of transactions and accounts,</li>
                <li>• cooperation with law enforcement authorities.</li>
            </ul>
        </Fragment>
    );
};

const PuodoContent = () => {
    return (
        <Fragment>
            <p className="with-margin">
                The PUODO is responsible for supervision and enforcement over the fulfilment of data protection by any entities (private and public) processing personal data. The main competences of PUODO are:
            </p>
            <ul>
                <li>• conducting controls regarding the data processing,</li>
                <li>• conducting proceedings regarding infringement of personal data protection regulations,</li>
                <li>• keeping records of Data Protection Officers,</li>
                <li>• approval of code of conducts regarding the data processing,</li>
                <li>• issuing recommendations and positions.</li>
            </ul>
        </Fragment>
    );
};

const data = [
    {
        className: '1',
        logo: knf,
        name: '(Financial Supervision Authority)',
        company: 'KNF – Komisja Nadzoru Finansowego',
        content: <KnfContent />
    },
    {
        className: '2',
        logo: nbp,
        name: '(National Bank of Poland)',
        company: 'NBP – Narodowy Bank Polski',
        content: <NbpContent />
    },
    {
        className: '3',
        logo: mf,
        name: '(Minister of Finance)',
        company: 'MF – Minister Finansów',
        content: <MfContent />
    },
    {
        className: '4',
        logo: null,
        name: '(General Inspector of Financial Information)',
        company: 'GIIF – Generalny Inspektor Informacji Finansowej',
        content: <GiifContent />
    },
    {
        className: '5',
        logo: puodo,
        name: '(President of the Personal Data Protection Office)',
        company: 'PUODO – Prezes Urzędu Ochrony Danych Osobowych',
        content: <PuodoContent />
    }
];

const List = () => {
    return (
        <div className="authorities-list container--small">
            {data.map(el => {
                return (
                    <LisItem
                        key={el.className}
                        data={el}
                    >
                        {el.content}
                    </LisItem>
                );
            })}
        </div>
    );
};

export default List;
