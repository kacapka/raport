import SubpageHeader from '../shared/SubpageHeader';
import List from './List';

const Authorities = () => {
    return (
        <div className="authorities">
            <SubpageHeader>
                Regulatory and supervisory <br />
                authorities
            </SubpageHeader>
            <List />
        </div>
    );
};

export default Authorities;