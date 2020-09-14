import classnames from 'classnames';

const Title = ({ color, children }) => {
    return (
        <h2 className={classnames('title', `title--${color}`)}>
            {children}
        </h2>
    );
};

export default Title;

