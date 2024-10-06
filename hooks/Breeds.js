import { useState, useEffect } from 'react';

export const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBreeds = async () => {
    setLoading(true);
    try {
      const response = await fetch('');
      const data = await response.json();
      setBreeds(data.data);
    } catch (error) {
      console.error('Error fetching cat breeds', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return { breeds, loading, fetchBreeds };
};