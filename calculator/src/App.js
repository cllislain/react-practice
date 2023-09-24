import './App.css';
import ActionButton from './components/ActionButton';
import ResultBar from './components/ResultBar';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  function calculate(action) {
    if (action === 'C') {
      setResult('');
    } else if (action !== '=') {
      setResult(`${result}${action}`);
    } else {
      const evalResult = eval(result);
      setResult(evalResult.toString());
    }
  }

  return (
    <div className="container">
      <ResultBar result={result} />
      <div className="actionRow">
        <ActionButton action="7" handleClick={calculate} />
        <ActionButton action="8" handleClick={calculate} />
        <ActionButton action="9" handleClick={calculate} />
        <ActionButton action="/" handleClick={calculate} />
      </div>
      <div className="actionRow">
        <ActionButton action="4" handleClick={calculate} />
        <ActionButton action="5" handleClick={calculate} />
        <ActionButton action="6" handleClick={calculate} />
        <ActionButton action="*" handleClick={calculate} />
      </div>
      <div className="actionRow">
        <ActionButton action="1" handleClick={calculate} />
        <ActionButton action="2" handleClick={calculate} />
        <ActionButton action="3" handleClick={calculate} />
        <ActionButton action="-" handleClick={calculate} />
      </div>
      <div className="actionRow">
        <ActionButton action="0" handleClick={calculate} />
        <ActionButton action="C" handleClick={calculate} />
        <ActionButton action="=" handleClick={calculate} />
        <ActionButton action="+" handleClick={calculate} />
      </div>
    </div>
  );
}

export default App;
