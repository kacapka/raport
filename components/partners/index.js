import SubpageHeader from '../shared/SubpageHeader';
import Bird from './Bird';
import Master from './Master';
import Pko from './Pko';
import PartnersLogos from '../shared/PartnersLogos';

const Partners = () => {
    return (
        <div className="partners">
            <SubpageHeader>
                Partners & Authors
            </SubpageHeader>
            <PartnersLogos />
            <Bird />
            <Master />
            <Pko />
        </div>
    );
};

export default Partners;