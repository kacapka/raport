import SubpageHeader from '../shared/SubpageHeader';
import Bird from './Bird';
import Master from './Master';

const Partners = () => {
    return (
        <div className="partners">
            <SubpageHeader>
                Partners
            </SubpageHeader>
            <Bird />
            <Master />
        </div>
    );
};

export default Partners;