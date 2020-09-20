import SubpageHeader from '../shared/SubpageHeader';
import Desc from './Desc';
import Features from './Features';

const Hub = () => {
    return (
        <div className="hub">
            <SubpageHeader>
                innovation hub<br />
                programme
            </SubpageHeader>
            <Desc />
            <Features />
        </div>
    );
};

export default Hub;