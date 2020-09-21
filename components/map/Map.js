import mapImage from '../../static/img/mapa.png';

const Map = () => {
    return (
        <div className="map-wrapper">
            <img src={mapImage} className="map-image" alt="Map of Polish Fintechs" />
        </div>
    );
};

export default Map;