import React, { useState } from 'react';

const CalculatorApp = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, inputNumber) => {
    const inputValue = e.target.value;
    if (inputNumber === 1) {
      setInput1(inputValue);
    } else if (inputNumber === 2) {
      setInput2(inputValue);
    }
  };

  const handleOperation = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num1 / num2);
        break;
      default:
        setResult('');
        break;
    }
  };

  return (
    <div>
      <input type="number" value={input1} onChange={(e) => handleInputChange(e, 1)} />
      <input type="number" value={input2} onChange={(e) => handleInputChange(e, 2)} />
      
      <button onClick={() => handleOperation('add')}>Toplama</button>
      <button onClick={() => handleOperation('subtract')}>Cixma</button>
      <button onClick={() => handleOperation('multiply')}>Vurma</button>
      <button onClick={() => handleOperation('divide')}>Bolme</button>
      
      <input type="text" value={result} readOnly />
    </div>
  );
};

export default CalculatorApp;
