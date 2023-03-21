import './Calculator.css';

const Calculator = () => (
  <div className="container">
    <div className="result-display">0</div>
    <div className="calc-buttons">
      <button className="calc-button" type="button">AC</button>
      <button className="calc-button" type="button"> +/- </button>
      <button className="calc-button" type="button"> % </button>
      <button className="calc-button right" type="button"> ÷ </button>
      <button className="calc-button" type="button"> 7 </button>
      <button className="calc-button" type="button"> 8 </button>
      <button className="calc-button" type="button"> 9 </button>
      <button className="calc-button right" type="button"> x </button>
      <button className="calc-button" type="button"> 4 </button>
      <button className="calc-button" type="button"> 5 </button>
      <button className="calc-button" type="button"> 6 </button>
      <button className="calc-button right" type="button"> - </button>
      <button className="calc-button" type="button"> 1 </button>
      <button className="calc-button" type="button"> 2 </button>
      <button className="calc-button" type="button"> 3 </button>
      <button className="calc-button right" type="button"> + </button>
      <button className="calc-button" id="zero" type="button"> 0 </button>
      <button className="calc-button" type="button"> . </button>
      <button className="calc-button right" type="button"> = </button>
    </div>
  </div>
);

export default Calculator;
