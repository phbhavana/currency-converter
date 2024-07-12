import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CurrencyConverterProps {
  apiKey: string;
}

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ apiKey }) => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://api.currencyconverterapi.com/v1/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${apiKey}`);
        setExchangeRates(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [apiKey, fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRates && exchangeRates[`${fromCurrency}_${toCurrency}`]) {
      const rate = exchangeRates[`${fromCurrency}_${toCurrency}`];
      setConvertedAmount(amount * rate);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <div>
          <h3>Converted Amount: {convertedAmount.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
