import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = props => {

    return (            
        <div className="p-2" id="keyboard">
            <div className="row mb-2">
                <button className="col-6 key action" id="clear" value="AC" onClick={props.handleClear}>AC</button>
                <button className="col-3 key action" id="del" value="DEL" onClick={props.handleDelete}>&larr;</button>
                <button className="col-3 key operator" id="divide" value="/" onClick={props.handleOperator}>/</button>
            </div>
            <div className="row mb-2">
                <button className="col-3 key number" id="seven" value="7" onClick={props.handleNumber}>7</button>
                <button className="col-3 key number" id="eight" value="8" onClick={props.handleNumber}>8</button>
                <button className="col-3 key number" id="nine" value="9" onClick={props.handleNumber}>9</button>                
                <button className="col-3 key operator" id="multiply" value="*" onClick={props.handleOperator}>x</button>
            </div>
            <div className="row mb-2">
                <button className="col-3 key number" id="four" value="4" onClick={props.handleNumber}>4</button>
                <button className="col-3 key number" id="five" value="5" onClick={props.handleNumber}>5</button>
                <button className="col-3 key number" id="six" value="6" onClick={props.handleNumber}>6</button>                
                <button className="col-3 key operator" id="add" value="+" onClick={props.handleOperator}>+</button>                
            </div>
            <div className="row mb-2">
                <button className="col-3 key number" id="one" value="1" onClick={props.handleNumber}>1</button>
                <button className="col-3 key number" id="two" value="2" onClick={props.handleNumber}>2</button>
                <button className="col-3 key number" id="three" value="3" onClick={props.handleNumber}>3</button>                
                <button className="col-3 key operator" id="subtract" value="-" onClick={props.handleOperator}>-</button>                
            </div>
            <div className="row mb-2">
                <button className="col-3 key number" id="zero" value="0" onClick={props.handleNumber}>0</button>
                <button className="col-3 key number" id="decimal" value="." onClick={props.handleDecimal}>.</button>
                <button className="col-6 key" id="equals" value="=" onClick={props.handleEvaluate}>=</button>                
            </div>                      
        </div>    
    );
}

Keyboard.propTypes = {
    handleNumber: PropTypes.func.isRequired,
    handleDecimal: PropTypes.func.isRequired,
    handleOperator: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEvaluate: PropTypes.func.isRequired
}
 
export default Keyboard;