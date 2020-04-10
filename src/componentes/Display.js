import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
    return (
        <div className="row mb-3" id="screen">
            <div className="col-12 p-3 shadow">
                <p className="text-right font-weight-bolder mb-n1 result" id="display">{props.result}</p>
                <hr />
                <p className="text-right font-weight-bolder my-n2 message">{props.message}</p>
            </div>
        </div> 
    );
}

Display.propTypes = {
    result: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default Display;