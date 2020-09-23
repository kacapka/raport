import SubpageHeader from '../shared/SubpageHeader';
import Mapa from './Map';
import Text from './Text';

const Map = () => {
    return (
        <div className="map">
            <SubpageHeader>
                Map of Polish Fintechs
            </SubpageHeader>
            <Text />
            <Mapa />
        </div>
    );
};

export default Map;