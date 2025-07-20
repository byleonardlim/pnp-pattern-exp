# Observation

### Structure
The structure required refinement on the folder structure and it's modularity. Initial creation of the folder doesn't include ReadMe, utils folder, types folder, hooks folder, components folder.

TODO:
Refine the instruction to make sure these are created as a scaffold, easier for design engineers to generate the modular component.

### Quality
Observing...

# MarketChart Module

A reusable market chart component for displaying financial data with interactive controls and built-in API utilities.

## Features

- Interactive chart visualization
- Customizable appearance
- Responsive design
- Built-in loading and error states
- Customizable data fetching
- Built-in API client with mock data fallback
- Real-time data subscription support

## Installation

```bash
# If using pnpm (recommended)
pnpm add @/components/modules/MarketChart

# Or with npm
npm install @/components/modules/MarketChart
```

## Usage

```tsx
import { MarketChart } from '@/components/modules/MarketChart';

function App() {
  const data = [
    { date: '2023-01-01', value: 100 },
    { date: '2023-01-02', value: 120 },
    // ... more data points
  ];

  return (
    <div className="w-full h-96">
      <MarketChart 
        data={data}
        title="Market Performance"
        description="Daily market performance chart"
      />
    </div>
  );
}
```

## API Utilities

The module includes several utility functions for fetching and managing market data:

### `fetchMarketData(range, useMock)`

Fetches market data for a given time range with automatic fallback to mock data.

```typescript
import { fetchMarketData } from '@/components/modules/MarketChart/utils';

// Fetch 1 day of market data
const data = await fetchMarketData('1d');

// Force using mock data (useful for development)
const mockData = await fetchMarketData('1w', true);
```

**Parameters:**
- `range`: Time range ('1d' | '3d' | '1w')
- `useMock`: Optional boolean to force using mock data (defaults to `true` in development)

### `fetchLatestPrice(symbol)`

Gets the latest price for a market symbol.

```typescript
import { fetchLatestPrice } from '@/components/modules/MarketChart/utils';

// Get latest price for a symbol
const price = await fetchLatestPrice('^DJI');
```

### `subscribeToMarketData(callback, symbol)`

Subscribes to real-time market data updates.

```typescript
import { subscribeToMarketData } from '@/components/modules/MarketChart/utils';

// Subscribe to updates
const unsubscribe = subscribeToMarketData((newData) => {
  console.log('New data point:', newData);
}, '^DJI');

// Later, to unsubscribe
unsubscribe();
```

## Configuration

Set up your environment variables in `.env.local`:

```env
NEXT_PUBLIC_MARKET_API_KEY=your_api_key_here
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<{ date: string | Date, value: number }>` | `[]` | Array of data points to display |
| `title` | `string` | `undefined` | Chart title |
| `description` | `string` | `undefined` | Chart description for accessibility |
| `className` | `string` | `undefined` | Additional class name for the chart container |
| `isLoading` | `boolean` | `false` | Whether the chart is in a loading state |
| `error` | `Error` | `null` | Error object if data fetching failed |
| `onRefresh` | `() => void` | `undefined` | Callback when refresh is requested |

## Customization

### Styling

You can customize the appearance using the following CSS variables:

```css
:root {
  --market-accent: #3b82f6; /* Default blue-500 */
  --market-grid: #e5e7eb;   /* Default gray-200 */
  --market-text: #1f2937;   /* Default gray-800 */
}
```

### Using with Data Fetching

The module includes a `useMarketData` hook for handling data fetching:

```tsx
import { useMarketData } from '@/components/modules/MarketChart/hooks/useMarketData';

function MarketDataFetcher() {
  const { data, isLoading, error, refreshData } = useMarketData({
    fetchData: async () => {
      const response = await fetch('/api/market-data');
      if (!response.ok) throw new Error('Failed to fetch market data');
      return response.json();
    }
  });

  return (
    <MarketChart 
      data={data}
      isLoading={isLoading}
      error={error}
      onRefresh={refreshData}
    />
  );
}
```

## License

INTERNAL USE ONLY
