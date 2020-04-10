import React, { Component } from 'react';
import Calculator from './componentes/Calculator';

class App extends Component {

  constructor() {
    super();
    this.state = {   
      input: '',
      prevVal: '',
      operator: '',
      result: '0',
      message: '',
      evaluated: false
    }

    this.messages = {
      init: 'Initial state',
      multipleZeros: 'ERROR: multiple zeros',
      multipleDecimals: 'ERROR: multiple decimal points'
    }
  }

  componentDidMount() {
    this.setState({
      message: this.messages.init
    });
  }
  
  /**
   * As I input numbers, I should be able to see my input in the element with
   * the id of display.
   * 
   * When inputting numbers, my calculator should not allow a number to
   * begin with multiple zeros.
   */
  handleNumber = e => {
    if (this.state.input === '0' && e.target.value === '0') {
      this.setState({
        message: this.messages.multipleZeros
      });
      return;
    }

    let input;

    if (this.state.prevVal !== '' && this.state.input.length === 0) {
      input = e.target.value;
    } else {
      input = this.state.input.concat(e.target.value);
    }

    this.setState({
      input: input,
      result: input,
      message: '.'
    });
  }

  /**
   * When the decimal element is clicked, a .should append to the currently
   * displayed value; two . in one number should not be accepted.
   */
  handleDecimal = e => {
    if (this.state.input.includes('.')) {
      this.setState({
        message: this.messages.multipleDecimals
      });
      return;
    }

    let input = this.state.input.concat(e.target.value);
    this.setState({
      input: input,
      result: input,
      message: '.'
    });
  }

  /**
   * In any order, I should be able to add, subtract, multiply and divide a chain
   * of numbers of any length, and when I hit =, the correct result should be shown
   * in the element with the id of display.
   * 
   * I should be able to perform any operation (+, -, *, /) on numbers
   * containing decimal points.
   * 
   * If 2 or more operators are entered consecutively, the operation
   * performed should be the last operator entered.
   * 
   * Pressing an operator immediately following = should start a new
   * calculation that operates on the result of the previous evaluation.
   */
  handleOperator = e => {
    const operator = e.target.value;
    if (this.state.input === '' && this.state.operator !== '') {
      this.setState({
        operator: operator
      });
      return;      
    }

    if (this.state.evaluated) {
      this.setState({
        operator: operator,
        message: '.',
        evaluated: false
      });
    } else if (this.state.prevVal !== '') {     
      this.handleEvaluate(null); 
      this.setState({
        operator: operator,
        message: '.'
      });            
    } else {
      this.setState({
        input: '',
        prevVal: this.state.input, 
        operator: operator,
        message: '.'
      });
    }
  }

  /**
   * At any time, pressing the clear button clears the input and output values,
   * and returns the calculator to its initialized state; 0 should be shown in 
   * the element with the id of display.
   */
  handleClear = e => {
    this.setState({   
      input: '',
      prevVal: '',
      operator: '',
      result: '0',
      message: this.messages.init,
      evaluated: false
    });
  }

  handleDelete = e => {
    if (this.state.input.length > 1) {
      const input = this.state.input.slice(0, -1);
      this.setState({   
        input: input,
        result: input,
        message: '.'
      });
    } else if (this.state.input.length === 1) {
      this.setState({   
        input: '',
        result: '0',
        message: '.'
      });
    }
  }

  /**
   * When I hit =, the correct result should be shown
   * in the element with the id of display.
   */
  handleEvaluate = e => {
    let evaluated = e === null ? false : true;
    let expression = this.state.prevVal.concat(this.state.operator).concat(this.state.input);
    const result = Math.round(1000000000 * eval(expression)) / 1000000000;
    this.setState({
      input: '',
      result: result.toString(),
      prevVal: result.toString(),
      operator: '',
      message: '.',
      evaluated: evaluated
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <Calculator 
          result={this.state.result}
          message={this.state.message}
          handleNumber={this.handleNumber}
          handleDecimal={this.handleDecimal}
          handleOperator={this.handleOperator}
          handleClear={this.handleClear}
          handleDelete={this.handleDelete}
          handleEvaluate={this.handleEvaluate}
        />
      </div>
    );
  }
}

export default App;
