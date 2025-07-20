import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface MarketChartProps {
  /**
   * The data points to display on the chart
   */
  data?: Array<MarketDataPoint>;
  
  /**
   * Symbol or name of the market/asset
   * @default '^DJI'
   */
  symbol?: string;
  
  /**
   * Title for the chart
   * @default 'Market Performance'
   */
  title?: string;
  
  /**
   * Description for accessibility
   * @default 'Interactive market chart'
   */
  description?: string;
  
  /**
   * Custom class name for the chart container
   */
  className?: string;
  
  /**
   * Loading state
   */
  isLoading?: boolean;
  
  /**
   * Error state
   */
  error?: Error | null;
  
  /**
   * Callback when refresh is requested
   */
  onRefresh?: () => void;
  
  /**
   * Additional props for the root element
   */
  [key: string]: any;
}

/**
 * Data point for the market chart
 */
export interface MarketDataPoint {
  /**
   * Date of the data point
   */
  date: string | Date;
  
  /**
   * Numeric value of the data point
   */
  value: number;
  
  /**
   * Allow additional properties
   */
  [key: string]: any;
}

/**
 * Props for the MarketChart button component
 */
export interface MarketChartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'default'
   */
  variant?: 'default' | 'chartAction' | 'chartControl' | 'outline' | 'ghost' | 'link';
  
  /**
   * Button size
   * @default 'default'
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  
  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Optional left icon
   */
  leftIcon?: ReactNode;
  
  /**
   * Optional right icon
   */
  rightIcon?: ReactNode;
}

/**
 * Time range options for the chart
 */
export type TimeRange = '1d' | '3d' | '1w' | '1m' | '3m' | '6m' | '1y' | 'all';

/**
 * Chart theme options
 */
export interface ChartTheme {
  /**
   * Primary color for the chart
   * @default '#3b82f6' (blue-500)
   */
  primaryColor?: string;
  
  /**
   * Background color for the chart
   * @default '#ffffff' (white)
   */
  backgroundColor?: string;
  
  /**
   * Grid line color
   * @default '#e5e7eb' (gray-200)
   */
  gridColor?: string;
  
  /**
   * Text color
   * @default '#1f2937' (gray-800)
   */
  textColor?: string;
  
  /**
   * Whether to show area under the line
   * @default true
   */
  showArea?: boolean;
  
  /**
   * Whether to show dots on data points
   * @default false
   */
  showDots?: boolean;
}
