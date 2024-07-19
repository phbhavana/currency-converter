import { useState } from 'react';

interface ConverterState {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
}

const useCurrencyConverter = (rates: Record<string, number>) => {
  const [state, setState] = useState<ConverterState>({
    amount: 1,
    fromCurrency: 'USD',
    toCurrency: 'EUR',
  });

  const convert = () => {
    if (!rates) return 0;
    const rate = rates[state.toCurrency] / rates[state.fromCurrency];
    return state.amount * rate;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  return { state, handleChange, convert };
};

export default useCurrencyConverter;
