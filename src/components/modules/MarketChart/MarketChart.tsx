"use client";
import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

// Local components
import { Button } from './components/ui/Button';

// Types
import { MarketChartProps, MarketDataPoint } from './types/market.types';

// Hooks
import { useMarketData } from './hooks/useMarketData';

// Utils
import { generateMockData } from './utils/mockData';

// Styles
import './styles/chart.css';

export function MarketChart({ 
  symbol = '^DJI', 
  className = '',
  title = 'Market Performance',
  description = 'Interactive market chart',
  isLoading: externalIsLoading,
  error: externalError,
  onRefresh,
  ...props 
}: MarketChartProps) {
  const [timeRange, setTimeRange] = useState<'1d' | '3d' | '1w'>('1d');
  
  // Memoize the fetch function to prevent recreation on every render
  const fetchMarketData = useCallback(async () => {
    // In a real app, replace this with actual API call
    // const response = await fetch(`/api/market-data/${symbol}?range=${timeRange}`);
    // return response.json();
    return generateMockData(timeRange);
  }, [timeRange, symbol]);

  // Use the custom hook for data management
  const { 
    data, 
    isLoading: isDataLoading, 
    error: dataError, 
    refreshData 
  } = useMarketData({
    initialData: [],
    fetchData: fetchMarketData
  });

  // Combine loading and error states from props and hook
  const isLoading = externalIsLoading !== undefined ? externalIsLoading : isDataLoading;
  const error = externalError || (dataError ? new Error(dataError.message) : null);

  // Handle refresh
  const handleRefresh = () => {
    refreshData();
    onRefresh?.();
  };

  const formatXAxis = (tick: string) => {
    const date = new Date(tick);
    if (timeRange === '1d') {
      return format(date, 'HH:mm');
    } else if (timeRange === '3d') {
      return format(date, 'EEE');
    } else {
      return format(date, 'MMM d');
    }
  };

  // Format tooltip values
  const formatTooltipValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium">
            {timeRange === '1d' 
              ? format(new Date(label), 'PPpp')
              : format(new Date(label), 'PPp')}
          </p>
          <p className="text-sm">
            <span className="text-muted-foreground">Price: </span>
            <span className="font-mono">{formatTooltipValue(payload[0].value)}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={`relative w-full ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-sm font-medium">
            {title} - {symbol}
          </CardTitle>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Tabs 
            value={timeRange}
            className="w-[180px]"
            onValueChange={(value) => setTimeRange(value as '1d' | '3d' | '1w')}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="1d">1D</TabsTrigger>
              <TabsTrigger value="3d">3D</TabsTrigger>
              <TabsTrigger value="1w">1W</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button 
            variant="chartAction" 
            size="sm" 
            onClick={handleRefresh}
            disabled={isLoading}
          >
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[400px] p-6">
        {error ? (
          <div className="h-[300px] flex items-center justify-center text-destructive">
            {error.message || 'An error occurred while loading the chart'}
          </div>
        ) : isLoading ? (
          <Skeleton className="h-full w-full" />
        ) : (
          <div className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--market-accent, #3b82f6)" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="var(--market-accent, #3b82f6)" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="var(--market-grid, #e5e7eb)"
                />
                
                <XAxis 
                  dataKey="date" 
                  tickFormatter={formatXAxis}
                  tick={{ fontSize: 12, fill: 'var(--market-text, #1f2937)' }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
                
                <YAxis 
                  domain={['auto', 'auto']} 
                  tickFormatter={(value) => new Intl.NumberFormat('en-US', { 
                    style: 'currency', 
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(value)}
                  tick={{ fontSize: 12, fill: 'var(--market-text, #1f2937)' }}
                  width={80}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
                
                <Tooltip 
                  content={<CustomTooltip />}
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--market-accent, #3b82f6)" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="var(--market-accent, #3b82f6)" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone"
                  dataKey="value"
                  stroke="var(--market-accent, #3b82f6)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#areaFill)"
                  activeDot={{
                    r: 6,
                    stroke: 'var(--market-accent, #3b82f6)',
                    strokeWidth: 2,
                    fill: 'var(--background)'
                  }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </AreaChart>
            </ResponsiveContainer>
            
            {/* Watermark */}
            <div className="absolute bottom-2 right-3 text-xs text-muted-foreground opacity-50">
              {symbol} • {new Date().getFullYear()}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function getTimeRangeLabel(range: string): string {
  switch (range) {
    case '1d':
      return '1 Day';
    case '3d':
      return '3 Days';
    case '1w':
      return '1 Week';
    default:
      return '';
  }
}

// generateMockData function has been moved to ./utils/mockData.ts
