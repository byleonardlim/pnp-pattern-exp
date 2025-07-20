import Image from "next/image";
import { MarketChart } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={28}
                priority
              />
              <span className="text-xl font-semibold">Market Tracker</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Markets</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Watchlist</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dow Jones Industrial Average</h1>
          <p className="text-muted-foreground">Real-time market data and analytics</p>
        </div>

        {/* Market Chart */}
        <div className="bg-card rounded-lg shadow-sm border mb-8">
          <MarketChart symbol="^DJI" className="w-full" />
        </div>

        {/* Additional Market Info */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Price</h3>
            <p className="text-2xl font-bold">35,246.53</p>
            <p className="text-sm text-green-500">+124.50 (0.35%)</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Today's Range</h3>
            <p className="text-lg font-medium">35,120.75 - 35,289.45</p>
            <p className="text-sm text-muted-foreground">52W: 28,659 - 35,679</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Volume</h3>
            <p className="text-lg font-medium">245.6M</p>
            <p className="text-sm text-muted-foreground">Avg: 280.3M</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t pt-8">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'S&P 500', symbol: '^GSPC' },
              { name: 'NASDAQ', symbol: '^IXIC' },
              { name: 'RUSSELL 2000', symbol: '^RUT' },
              { name: 'CRUDE OIL', symbol: 'CL=F' },
            ].map((item) => (
              <a
                key={item.symbol}
                href={`#${item.symbol}`}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.symbol}</div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Market data is for demonstration purposes only. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
