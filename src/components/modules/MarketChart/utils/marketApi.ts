import { MarketDataPoint } from '../types/market.types';
import { generateMockData } from './mockData';

type TimeRange = '1d' | '3d' | '1w';

interface ApiResponse {
  data: MarketDataPoint[];
  success: boolean;
  message?: string;
}

const API_BASE_URL = 'https://api.example.com/market';
const API_KEY = process.env.NEXT_PUBLIC_MARKET_API_KEY;

/**
 * Fetches market data from the API with a fallback to mock data
 * @param range Time range for the data
 * @param useMock Force using mock data (for development)
 */
export async function fetchMarketData(
  range: TimeRange = '1d',
  useMock: boolean = process.env.NODE_ENV === 'development'
): Promise<MarketDataPoint[]> {
  if (useMock) {
    return generateMockData(range);
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/data?range=${range}&api_key=${API_KEY}`, 
      { next: { revalidate: 60 } } // Revalidate every 60 seconds
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result: ApiResponse = await response.json();
    
    if (!result.success) {
      console.warn('API returned non-success status, falling back to mock data');
      return generateMockData(range);
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    console.warn('Falling back to mock data');
    return generateMockData(range);
  }
}

/**
 * Fetches the latest market price
 */
export async function fetchLatestPrice(symbol: string = '^DJI'): Promise<number> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/price?symbol=${symbol}&api_key=${API_KEY}`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result.price;
  } catch (error) {
    console.error('Error fetching latest price:', error);
    // Fallback to a random price based on mock data
    const mockData = generateMockData('1d');
    return mockData[mockData.length - 1].value;
  }
}

/**
 * Subscribes to real-time market data updates
 * @param callback Function to call with new data
 * @param symbol Market symbol to subscribe to
 * @returns Unsubscribe function
 */
export function subscribeToMarketData(
  callback: (data: MarketDataPoint) => void,
  symbol: string = '^DJI'
): () => void {
  // In a real implementation, this would set up a WebSocket connection
  const interval = setInterval(() => {
    const mockData = generateMockData('1d');
    callback(mockData[mockData.length - 1]);
  }, 5000);

  return () => clearInterval(interval);
}
