import ListItem from './ListItem';
import Bank from './components/Bank';

const List = () => {
    return (
        <div className="container--small">
            <div className="accordion-wrapper">
                <ListItem title="Bank">
                    <Bank />
                </ListItem>
                <ListItem title="Insurance company">
                    <p>asdasdsadad</p>
                </ListItem>
                <ListItem title="Brokerage house">
                    <p>asdasdsadad</p>
                </ListItem>
                <ListItem title="National payment institution, including a national payment institution providing only services consisting in initiating payment transactions">
                    <p>asdasdsadad</p>
                </ListItem>
                <ListItem title="The provider only provides the services enabling access to account information">
                    <p>asdasdsadad</p>
                </ListItem>
                <ListItem title="Electronic money institution">
                    <p>asdasdsadad</p>
                </ListItem>
                <ListItem title="Lending institution">
                    <p>asdasdsadad</p>
                </ListItem>
            </div>
        </div>
    );
};

export default List;
