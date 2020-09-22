
import twitterIcon from '../../static/img/twitter_icon.png';
import linkedIcon from '../../static/img/linked_icon.png';

const Social = () => {
    return (
        <div className="master-social">
            <div className="master-social__icons">
                <a href="https://twitter.com/MasterCardPL" target="_blank">
                    <img src={twitterIcon} alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/company/mastercard/" target="_blank">
                    <img src={linkedIcon} alt="linkedin" />
                </a>
            </div>
            <div className="master-social__links">
                <a href="https://mastercardcontentexchange.com/" target="_blank">
                    www.mastercardcontentexchange.com
                    </a>
                <a href="https://newsroom.mastercard.com/eu/pl/" target="_blank">
                    www.newsroom.mastercard.com/eu/pl
                    </a>
            </div>
        </div>
    );
};

export default Social;