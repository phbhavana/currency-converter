import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';

const App: React.FC = () => {
  const apiKey = '5e923596a0-6e1520269e-sgibkh'; 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <CurrencyConverter apiKey={apiKey} />
      </header>
    </div>
  );
};

export default App;

