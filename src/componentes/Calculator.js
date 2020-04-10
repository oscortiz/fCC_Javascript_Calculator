import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import PropTypes from 'prop-types';

const Calculator = props => {
    return (
        <div className="row justify-content-center align-items-center" id="wrapper">
            <div className="col-11 col-sm-8 col-md-4" id="calculator">
                <div className="row text-center p-2">
                    <span className="col-12 text-uppercase font-weight-bolder mt-1" id="title">Calculator</span>
                </div> 
                <Display 
                    result={props.result}
                    message={props.message}
                />                
                <Keyboard 
                    handleNumber={props.handleNumber}
                    handleDecimal={props.handleDecimal}
                    handleOperator={props.handleOperator}
                    handleClear={props.handleClear}
                    handleDelete={props.handleDelete}
                    handleEvaluate={props.handleEvaluate}
                /> 
                <div className="row text-center p-2">
                    <span className="col-12 font-weight-bolder" id="subtitle">Immediate Execution Logic</span>
                </div>              
            </div>           
        </div>
    );
}

Calculator.propTypes = {
    result: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleNumber: PropTypes.func.isRequired,
    handleDecimal: PropTypes.func.isRequired,
    handleOperator: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEvaluate: PropTypes.func.isRequired
}
 
export default Calculator;