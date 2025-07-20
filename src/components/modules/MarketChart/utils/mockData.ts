import { MarketDataPoint } from '../types/market.types';

export function generateMockData(range: '1d' | '3d' | '1w'): MarketDataPoint[] {
  const now = new Date();
  const data: MarketDataPoint[] = [];
  let points = 24; // Default to 1 day (hourly)
  let hoursToSubtract = 1;
  let baseValue = 35000;

  if (range === '3d') {
    points = 21; // 3 days (7 points per day)
    hoursToSubtract = 24;
  } else if (range === '1w') {
    points = 28; // 7 days (4 points per day)
    hoursToSubtract = 42; // ~6 hours between points
  }

  for (let i = 0; i < points; i++) {
    const date = new Date(now);
    date.setHours(date.getHours() - (points - i - 1) * hoursToSubtract);
    
    // Add some randomness to the value
    baseValue += Math.random() * 200 - 100;
    
    data.push({
      date: date.toISOString(),
      value: Math.round(baseValue)
    });
  }

  return data;
}
