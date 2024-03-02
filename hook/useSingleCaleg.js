"use client"

import { useEffect, useState } from 'react';

function useSingleCaleg(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const apiUrl = `https://server.mudahmemilih.com/api/v2/calegs/${id}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { data, isLoading, error };
}


export default useSingleCaleg;
