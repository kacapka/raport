import SubpageHeader from '../shared/SubpageHeader';
import Content from './Content';
import Opinion from './Opinion';

const Sector = () => {
    return (
        <div className="sector">
            <SubpageHeader>
                The Polish financial sector
            </SubpageHeader>
            <Content />
            <Opinion />
        </div>
    );
};

export default Sector;