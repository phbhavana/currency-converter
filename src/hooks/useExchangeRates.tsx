// src/hooks/useExchangeRates.ts
import axios from 'axios';
import { useState, useEffect } from 'react';

interface ExchangeRates {
  rates: Record<string, number>;
  base: string;
}

const useExchangeRates = () => {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response =  await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
         setRates(response.data);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, loading, error };
};

export default useExchangeRates;
