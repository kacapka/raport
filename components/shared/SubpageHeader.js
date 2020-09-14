const SubpageHeader = ({ children }) => {
    return (
        <div className="header">
            <h1>
                {children}
            </h1>
        </div>
    );
};

export default SubpageHeader;