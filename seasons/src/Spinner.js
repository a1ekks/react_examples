

const Spinner = (props) => {
    // const defaultMessage = 'Loading...';
    // <div className="ui big text loader">{props.message || defaultMessage}</div>
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
};

Spinner.defaultProps = {
    message: "Loading..."
};


export default Spinner;
