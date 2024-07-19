import React from 'react';
import useExchangeRates from './hooks/useExchangeRates';
import useCurrencyConverter from './hooks/useCurrencyConverter';

const App: React.FC = () => {
  const { rates, loading, error }:any = useExchangeRates();
  const { state, handleChange, convert } = useCurrencyConverter(rates ? rates.rates : {});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Currency Converter</h1>
      <form>
        <div>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={state.amount}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            From:
            <select name="fromCurrency" value={state.fromCurrency} onChange={handleChange}>
              {Object.keys(rates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            To:
            <select name="toCurrency" value={state.toCurrency} onChange={handleChange}>
              {Object.keys(rates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
      <div>
        <h2>Converted Amount: {convert().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default App;
