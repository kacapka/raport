import SubpageHeader from '../shared/SubpageHeader';
import List from './List';
import DescTop from './DescTop';
import DescBottom from './DescBottom';


const Institutions = () => {
    return (
        <div className="institutions">
            <SubpageHeader>
                Financial institutions
                in poland
            </SubpageHeader>
            <DescTop />
            <List />
            <DescBottom />
        </div>
    );
};

export default Institutions;