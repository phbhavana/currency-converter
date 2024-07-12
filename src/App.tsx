import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';

const App: React.FC = () => {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <CurrencyConverter />
      </header>
    </div>
  );
};

export default App;

