import a1 from '../../static/mapa/blockchains/protectauth.png';
import a2 from '../../static/mapa/blockchains/protectauth.png';
import a3 from '../../static/mapa/blockchains/protectauth.png';
import a4 from '../../static/mapa/blockchains/protectauth.png';
import a5 from '../../static/mapa/blockchains/protectauth.png';
import a6 from '../../static/mapa/blockchains/protectauth.png';
import a7 from '../../static/mapa/blockchains/protectauth.png';
import a8 from '../../static/mapa/blockchains/protectauth.png';
import a9 from '../../static/mapa/blockchains/protectauth.png';
import a10 from '../../static/mapa/blockchains/protectauth.png';
import Label from './Label';

const data = [
    {
        name: 'Blockchain and cryptocurrencies',
        companies: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10],
        options: {
            small: true
        }
    }
];

const List = () => {
    return (
        <div className="map-list">
            {data.map(item => {
                return (
                    <div className="map-list__item">
                        <Label small={item.options ? item.options.small : false}>{item.name}</Label>
                        {item.companies.map(logo => (
                            <div className="map-list__item__wrapper">
                                <img src={logo} className="map-list__item__logo" />
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default List;