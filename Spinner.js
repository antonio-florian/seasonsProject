import React from 'react';

const Spinner = (props) => {
    return (
        <div className = "ui active dimmer">
            <div className = "ui big text loader">
                {props.message}
            </div>
        </div>
    )
}


// this is the second solution if the first one does not work, the same as {props.message} || mess:etc...
Spinner.defaultProps = {
    message: 'Se incarca...'
}

export default Spinner;