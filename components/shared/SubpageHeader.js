import pasek from '../../static/img/subpage_pasek_desktop.png';

const SubpageHeader = ({ children }) => {
    return (
        <div className="header">
            <img src={pasek} className="header-pasek" />
            <h1>
                {children}
            </h1>
        </div>
    );
};

export default SubpageHeader;