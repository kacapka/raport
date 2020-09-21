import classnames from 'classnames';

import logoPurple from '../../static/img/mobile_logo_purple.png';
import logoWhite from '../../static/img/mobile_logo_white.png';

const MobileLogo = ({ purple, nav }) => {
    return (
        <img className={classnames("mobile-logo", { "mobile-logo--nav": nav })} src={purple ? logoPurple : logoWhite} alt="how to do fintech in poland" />
    );
};

export default MobileLogo;