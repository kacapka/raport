import ListItem from './ListItem';
import * as Components from './components/Index';

const List = () => {
    return (
        <div className="container--small">
            <div className="accordion-wrapper">
                <ListItem title="Bank">
                    <Components.Bank />
                </ListItem>
                <ListItem title="Insurance company">
                    <Components.Insurance />
                </ListItem>
                <ListItem title="Brokerage house">
                    <Components.Brokerage />
                </ListItem>
                <ListItem title="National payment institution, including a national payment institution providing only services consisting in initiating payment transactions">
                    <Components.Payment />
                </ListItem>
                <ListItem title="The provider only provides the services enabling access to account information">
                    <Components.Provider />
                </ListItem>
                <ListItem title="Electronic money institution">
                    <Components.Electronic />
                </ListItem>
                <ListItem title="Lending institution">
                    <Components.Lending />
                </ListItem>
            </div>
        </div>
    );
};

export default List;
