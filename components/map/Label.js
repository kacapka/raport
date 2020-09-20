import classnames from 'classnames';

const Label = ({ children, small }) => {
    return (
        <div className={classnames("map-label", { "map-label--small": small })}>
            {children}
        </div>
    );
};

export default Label;