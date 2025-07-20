import { useState, useEffect, useCallback, useRef } from 'react';
import { MarketDataPoint } from '../types/market.types';

interface UseMarketDataProps {
  initialData?: MarketDataPoint[];
  fetchData?: () => Promise<MarketDataPoint[]>;
}

export function useMarketData({ initialData = [], fetchData }: UseMarketDataProps = {}) {
  const [data, setData] = useState<MarketDataPoint[]>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData?.length);
  const [error, setError] = useState<Error | null>(null);
  const fetchDataRef = useRef(fetchData);

  // Update the ref when fetchData changes
  useEffect(() => {
    fetchDataRef.current = fetchData;
  }, [fetchData]);

  const refreshData = useCallback(async () => {
    const currentFetchData = fetchDataRef.current;
    if (!currentFetchData) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await currentFetchData();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch market data'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    if (fetchData && !initialData?.length) {
      refreshData();
    }
  }, [fetchData, initialData?.length]);

  return {
    data,
    isLoading,
    error,
    refreshData,
    setData,
  };
}
