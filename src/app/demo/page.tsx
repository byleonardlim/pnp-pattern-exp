import { MarketChart } from '@/components';

export default function DemoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dow Jones Market Tracker</h1>
      <div className="grid gap-6">
        <MarketChart symbol="^DJI" className="w-full" />
      </div>
      <div className="mt-8 text-sm text-muted-foreground">
        <p>Note: This is a demo using mock data. In a production environment, you would connect to a real market data API.</p>
      </div>
    </div>
  );
}
