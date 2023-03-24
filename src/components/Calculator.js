import React, { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    const data = calculate(state, buttonName);
    setState(data);
  };
  return (
    <div className="container">
      <h1><u>Calculator</u></h1>
      <div className="result-display">{state.next || state.total || '0'}</div>
      <div className="calc-buttons">
        <Button value="AC" className="calc-button" handleClick={handleClick} />
        <Button value="+/-" className="calc-button" handleClick={handleClick} />
        <Button value="%" className="calc-button" handleClick={handleClick} />
        <Button value="÷" className="calc-button-right" handleClick={handleClick} />
        <Button value="7" className="calc-button" handleClick={handleClick} />
        <Button value="8" className="calc-button" handleClick={handleClick} />
        <Button value="9" className="calc-button" handleClick={handleClick} />
        <Button value="x" className="calc-button-right" handleClick={handleClick} />
        <Button value="4" className="calc-button" handleClick={handleClick} />
        <Button value="5" className="calc-button" handleClick={handleClick} />
        <Button value="6" className="calc-button" handleClick={handleClick} />
        <Button value="-" className="calc-button-right" handleClick={handleClick} />
        <Button value="1" className="calc-button" handleClick={handleClick} />
        <Button value="2" className="calc-button" handleClick={handleClick} />
        <Button value="3" className="calc-button" handleClick={handleClick} />
        <Button value="+" className="calc-button-right" handleClick={handleClick} />
        <Button value="0" className="calc-button-zero" handleClick={handleClick} />
        <Button value="." className="calc-button" handleClick={handleClick} />
        <Button value="=" className="calc-button-right" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

const Button = ({ value, className, handleClick }) => (
  <>
    <button
      type="button"
      className={className}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  </>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
