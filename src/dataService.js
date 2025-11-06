// Data service to fetch real stock data

const ALPHA_VANTAGE_KEY = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
const FINNHUB_KEY = process.env.REACT_APP_FINNHUB_KEY;
```

const ALPHA_VANTAGE_KEY = 'YOUR_ALPHA_VANTAGE_KEY'; // Replace with your key
const FINNHUB_KEY = 'YOUR_FINNHUB_KEY'; // Replace with your key

// Fetch real-time stock data
export async function fetchStockData(ticker) {
  try {
    // Get quote data from Finnhub
    const quoteResponse = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_KEY}`
    );
    const quote = await quoteResponse.json();

    // Get technical indicators from Alpha Vantage
    const rsiResponse = await fetch(
      `https://www.alphavantage.co/query?function=RSI&symbol=${ticker}&interval=daily&time_period=14&series_type=close&apikey=${ALPHA_VANTAGE_KEY}`
    );
    const rsiData = await rsiResponse.json();

    // Get company info
    const profileResponse = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${FINNHUB_KEY}`
    );
    const profile = await profileResponse.json();

    // Parse latest RSI value
    const rsiValues = rsiData['Technical Analysis: RSI'];
    const latestRSI = rsiValues ? Object.values(rsiValues)[0]['RSI'] : 50;

    return {
      ticker: ticker,
      companyName: profile.name,
      price: quote.c, // current price
      change: quote.dp, // percent change
      previousClose: quote.pc,
      high: quote.h,
      low: quote.l,
      rsi: parseFloat(latestRSI),
      timestamp: new Date()
    };
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    return null;
  }
}

// Scan multiple stocks
export async function scanMarket(tickers, filters) {
  const results = [];
  
  for (const ticker of tickers) {
    const data = await fetchStockData(ticker);
    
    if (data) {
      // Apply filters
      if (data.price >= filters.minPrice && data.price <= filters.maxPrice) {
        if (data.rsi >= filters.minRSI) {
          if (Math.abs(data.change) >= filters.minDayPerformance) {
            results.push(data);
          }
        }
      }
    }
    
    // Rate limiting - wait between requests
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  return results;
}

// Fetch Reddit sentiment
export async function fetchRedditSentiment(ticker) {
  try {
    // This is a simplified example - you'd need Reddit API credentials
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${ticker}&limit=100`
    );
    const data = await response.json();
    
    // Count mentions
    const mentions = data.data.children.length;
    
    // Calculate sentiment (simplified)
    let positiveCount = 0;
    data.data.children.forEach(post => {
      const text = (post.data.title + ' ' + post.data.selftext).toLowerCase();
      if (text.includes('moon') || text.includes('bullish') || text.includes('buy')) {
        positiveCount++;
      }
    });
    
    const sentiment = mentions > 0 ? positiveCount / mentions : 0.5;
    
    return {
      mentions: mentions,
      sentiment: sentiment,
      change: 0 // Would need historical data to calculate
    };
  } catch (error) {
    console.error('Reddit API error:', error);
    return { mentions: 0, sentiment: 0.5, change: 0 };
  }
}

// Get stock list for scanning
export function getSqueezeWatchlist() {
  // Popular squeeze candidates - update this list regularly
  return [
    'BBAI', 'SNDL', 'MARA', 'RIOT', 'GEVO', 
    'PLUG', 'LCID', 'CLSK', 'WKHS', 'SPCE',
    'AMC', 'GME', 'BYND', 'CLOV', 'WISH'
  ];
}

export function getBreakoutWatchlist() {
  // Major tech stocks for breakout patterns
  return [
    'NVDA', 'AMD', 'TSLA', 'MSFT', 'META',
    'GOOGL', 'AAPL', 'NFLX', 'CRM', 'ADBE'
  ];
}
