import { useState, useEffect } from 'react';

export const useCatFact = () => {
  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('');
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Error! cat fact cannot found', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return { catFact, loading, fetchCatFact };
};