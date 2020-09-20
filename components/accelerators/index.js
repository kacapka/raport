import SubpageHeader from '../shared/SubpageHeader';
import List from './List';
import Opinion from './Opinion';

const Authorities = () => {
    return (
        <div className="authorities">
            <SubpageHeader>
                Accelerators and acceleration <br />
                programmes
            </SubpageHeader>
            <List />
            <Opinion />
        </div>
    );
};

export default Authorities;