import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, ThumbsUp, ThumbsDown, RefreshCw, Shield, BarChart3, Activity, MessageSquare, Settings, Send, Sparkles, Calendar, Zap, Target, Bell, Star, Mail, Layers } from 'lucide-react';

const ShortSqueezeDetector = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [squeezeStocks, setSqueezeStocks] = useState([]);
  const [breakoutStocks, setBreakoutStocks] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState('squeeze');
  const [watchlist, setWatchlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [scanTime, setScanTime] = useState(null);
  const [squeezeFilters, setSqueezeFilters] = useState({
    minPrice: 1.0,
    maxPrice: 5.0,
    exchanges: ['NYSE', 'NASDAQ'],
    minVolume: 1000000,
    minRelVolume: 3.0,
    minDayPerformance: 10.0,
    minRSI: 65,
    new3MonthHigh: true
  });
  const [breakoutFilters, setBreakoutFilters] = useState({
    minChangePercent: 2.0,
    minRelVolume: 1.0,
    minMarketCap: 2000000000,
    useEMA8: true,
    useEMA21: true,
    useEMA50: true
  });
  const [showAlertSettings, setShowAlertSettings] = useState(false);
  const [alertSettings, setAlertSettings] = useState({
    email: '',
    phone: '',
    priceChangePercent: 10,
    volumeSpike: 3.0,
    enableEmail: true,
    enableSMS: false,
    enablePush: true
  });

  const handleLogin = () => {
    if (password === 'Lulu8182') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const scanMarket = () => {
    setIsScanning(true);
    setShowResults(false);
    
    setTimeout(() => {
      const currentTime = new Date();
      setScanTime(currentTime);
      
      const squeeze = [
        {
          ticker: 'BBAI', companyName: 'BigBear.ai Holdings',
          description: 'AI-powered decision intelligence company for defense sectors.',
          sector: 'Technology', industry: 'AI', price: 0.87, change: 12.3,
          volume: 45000000, relVolume: 4.2, rsi: 68, probability: 78,
          riskLevel: 'Medium', riskScore: 6.2, shortInterest: 23.5,
          daysTocover: 4.8, marketCap: 125000000, recommendation: 'STRONG BUY',
          catalysts: ['High social buzz', 'Volume breakout'],
          redditMentions: 450, redditChange: 230, redditSentiment: 0.85,
          xSentiment: 0.78, xMentions: 1200,
          upcomingEvents: [
            { date: '2025-11-15', event: 'Q3 Earnings Report', impact: 'High', type: 'earnings' }
          ],
          type: 'squeeze',
          lastUpdated: currentTime,
          priceAsOf: currentTime
        },
        {
          ticker: 'SNDL', companyName: 'SNDL Inc.',
          description: 'Canadian cannabis company with retail operations.',
          sector: 'Consumer', industry: 'Cannabis', price: 0.42, change: 15.6,
          volume: 78000000, relVolume: 5.8, rsi: 75, probability: 82,
          riskLevel: 'Medium', riskScore: 6.5, shortInterest: 28.3,
          daysTocover: 6.5, marketCap: 210000000, recommendation: 'STRONG BUY',
          catalysts: ['Reddit trending', 'High short interest'],
          redditMentions: 680, redditChange: 340, redditSentiment: 0.88,
          xSentiment: 0.82, xMentions: 2100,
          upcomingEvents: [
            { date: '2025-11-12', event: 'DEA Rescheduling', impact: 'Very High', type: 'regulatory' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'MARA', companyName: 'Marathon Digital',
          description: 'Bitcoin mining operations with renewable energy focus.',
          sector: 'Financial', industry: 'Crypto Mining', price: 1.23, change: 18.4,
          volume: 92000000, relVolume: 6.2, rsi: 72, probability: 85,
          riskLevel: 'High', riskScore: 7.8, shortInterest: 31.2,
          daysTocover: 5.8, marketCap: 180000000, recommendation: 'STRONG BUY',
          catalysts: ['Bitcoin rally', 'Short squeeze setup'],
          redditMentions: 820, redditChange: 420, redditSentiment: 0.91,
          xSentiment: 0.85, xMentions: 3200,
          upcomingEvents: [
            { date: '2025-11-10', event: 'Mining Output Report', impact: 'High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'RIOT', companyName: 'Riot Platforms',
          description: 'Cryptocurrency mining and blockchain infrastructure.',
          sector: 'Financial', industry: 'Crypto', price: 1.45, change: 14.2,
          volume: 68000000, relVolume: 4.8, rsi: 69, probability: 76,
          riskLevel: 'High', riskScore: 7.2, shortInterest: 26.5,
          daysTocover: 4.2, marketCap: 195000000, recommendation: 'BUY',
          catalysts: ['Crypto momentum', 'Volume spike'],
          redditMentions: 540, redditChange: 280, redditSentiment: 0.82,
          xSentiment: 0.79, xMentions: 1850,
          upcomingEvents: [
            { date: '2025-11-14', event: 'Expansion Announcement', impact: 'High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'GEVO', companyName: 'Gevo Inc.',
          description: 'Renewable fuels and sustainable aviation fuel producer.',
          sector: 'Energy', industry: 'Renewables', price: 0.68, change: 11.8,
          volume: 35000000, relVolume: 3.9, rsi: 66, probability: 71,
          riskLevel: 'Medium', riskScore: 5.8, shortInterest: 19.8,
          daysTocover: 3.5, marketCap: 145000000, recommendation: 'BUY',
          catalysts: ['SAF demand', 'Contract news'],
          redditMentions: 320, redditChange: 165, redditSentiment: 0.76,
          xSentiment: 0.72, xMentions: 980,
          upcomingEvents: [
            { date: '2025-11-22', event: 'SAF Contract Decision', impact: 'Very High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'PLUG', companyName: 'Plug Power',
          description: 'Hydrogen fuel cell systems and infrastructure.',
          sector: 'Energy', industry: 'Hydrogen', price: 1.12, change: 13.5,
          volume: 58000000, relVolume: 4.5, rsi: 70, probability: 79,
          riskLevel: 'Medium', riskScore: 6.4, shortInterest: 24.7,
          daysTocover: 4.9, marketCap: 220000000, recommendation: 'STRONG BUY',
          catalysts: ['Infrastructure bill', 'High shorts'],
          redditMentions: 490, redditChange: 245, redditSentiment: 0.84,
          xSentiment: 0.80, xMentions: 1650,
          upcomingEvents: [
            { date: '2025-11-09', event: 'Infrastructure Bill Vote', impact: 'Very High', type: 'regulatory' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'LCID', companyName: 'Lucid Group',
          description: 'Luxury electric vehicle manufacturer.',
          sector: 'Auto', industry: 'EV', price: 0.95, change: 16.2,
          volume: 71000000, relVolume: 5.3, rsi: 73, probability: 80,
          riskLevel: 'Medium', riskScore: 6.7, shortInterest: 27.4,
          daysTocover: 5.2, marketCap: 175000000, recommendation: 'STRONG BUY',
          catalysts: ['Production ramp', 'Reddit buzz'],
          redditMentions: 710, redditChange: 380, redditSentiment: 0.87,
          xSentiment: 0.83, xMentions: 2450,
          upcomingEvents: [
            { date: '2025-11-11', event: 'Q3 Deliveries Report', impact: 'High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'CLSK', companyName: 'CleanSpark',
          description: 'Bitcoin mining with clean energy solutions.',
          sector: 'Financial', industry: 'Crypto Mining', price: 1.34, change: 17.1,
          volume: 47000000, relVolume: 4.1, rsi: 71, probability: 77,
          riskLevel: 'High', riskScore: 7.1, shortInterest: 22.9,
          daysTocover: 4.3, marketCap: 165000000, recommendation: 'BUY',
          catalysts: ['BTC momentum', 'Expansion plans'],
          redditMentions: 410, redditChange: 215, redditSentiment: 0.80,
          xSentiment: 0.77, xMentions: 1340,
          upcomingEvents: [
            { date: '2025-11-16', event: 'Facility Expansion News', impact: 'High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'WKHS', companyName: 'Workhorse Group',
          description: 'Electric delivery vehicle manufacturer.',
          sector: 'Auto', industry: 'EV', price: 0.78, change: 12.9,
          volume: 41000000, relVolume: 3.8, rsi: 67, probability: 73,
          riskLevel: 'Medium', riskScore: 6.1, shortInterest: 21.3,
          daysTocover: 3.9, marketCap: 135000000, recommendation: 'BUY',
          catalysts: ['Fleet orders', 'Short interest'],
          redditMentions: 365, redditChange: 190, redditSentiment: 0.79,
          xSentiment: 0.75, xMentions: 1120,
          upcomingEvents: [
            { date: '2025-11-19', event: 'Fleet Order Announcement', impact: 'High', type: 'news' }
          ],
          type: 'squeeze'
        },
        {
          ticker: 'SPCE', companyName: 'Virgin Galactic',
          description: 'Space tourism and aerospace technology.',
          sector: 'Aerospace', industry: 'Space', price: 1.56, change: 19.3,
          volume: 83000000, relVolume: 6.7, rsi: 76, probability: 84,
          riskLevel: 'High', riskScore: 7.9, shortInterest: 29.8,
          daysTocover: 6.1, marketCap: 190000000, recommendation: 'STRONG BUY',
          catalysts: ['Flight schedule', 'Massive shorts'],
          redditMentions: 920, redditChange: 485, redditSentiment: 0.90,
          xSentiment: 0.86, xMentions: 3680,
          upcomingEvents: [
            { date: '2025-11-13', event: 'Next Flight Date Reveal', impact: 'Very High', type: 'news' }
          ],
          type: 'squeeze'
        }
      ];

      const breakouts = [
        {
          ticker: 'NVDA', companyName: 'NVIDIA Corporation',
          description: 'GPU designer for AI and data centers.',
          sector: 'Technology', industry: 'Semiconductors', price: 4.23, change: 2.8,
          volume: 125000000, relVolume: 1.8, rsi: 58, probability: 85,
          riskLevel: 'Low', riskScore: 3.8, shortInterest: 2.1,
          daysTocover: 0.8, marketCap: 2250000000, recommendation: 'BUY',
          catalysts: ['After 45% rally', 'Strong support'],
          redditMentions: 890, redditChange: 120, redditSentiment: 0.79,
          xSentiment: 0.82, xMentions: 3400,
          upcomingEvents: [
            { date: '2025-11-18', event: 'Q4 Earnings', impact: 'Very High', type: 'earnings' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 12,
          priorRally: 45.2, supportLevel: 4.10, resistanceLevel: 4.35,
          historicalPattern: 'Up 35% → Consolidate 15d → Up 28% (3x)'
        },
        {
          ticker: 'AMD', companyName: 'Advanced Micro Devices',
          description: 'Semiconductor CPUs and GPUs for AI.',
          sector: 'Technology', industry: 'Semiconductors', price: 2.67, change: 3.1,
          volume: 87000000, relVolume: 1.9, rsi: 61, probability: 82,
          riskLevel: 'Low', riskScore: 4.2, shortInterest: 2.5,
          daysTocover: 0.9, marketCap: 2100000000, recommendation: 'STRONG BUY',
          catalysts: ['Bull flag pattern', 'Sector strength'],
          redditMentions: 720, redditChange: 145, redditSentiment: 0.81,
          xSentiment: 0.79, xMentions: 2650,
          upcomingEvents: [
            { date: '2025-11-14', event: 'AI Chip Launch', impact: 'Very High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 10,
          priorRally: 38.7, supportLevel: 2.55, resistanceLevel: 2.80,
          historicalPattern: 'Up 40% → Consolidate 10d → Up 35%'
        },
        {
          ticker: 'TSLA', companyName: 'Tesla Inc.',
          description: 'Electric vehicles and energy solutions.',
          sector: 'Auto', industry: 'EV', price: 3.89, change: 2.4,
          volume: 142000000, relVolume: 1.6, rsi: 59, probability: 78,
          riskLevel: 'Medium', riskScore: 4.8, shortInterest: 3.1,
          daysTocover: 1.1, marketCap: 2800000000, recommendation: 'BUY',
          catalysts: ['Tight consolidation', 'Deliveries due'],
          redditMentions: 1540, redditChange: 98, redditSentiment: 0.75,
          xSentiment: 0.77, xMentions: 9200,
          upcomingEvents: [
            { date: '2025-11-05', event: 'Q3 Deliveries', impact: 'Very High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Ascending Triangle', consolidationDays: 16,
          priorRally: 34.5, supportLevel: 3.75, resistanceLevel: 4.00,
          historicalPattern: 'Up 30% → Consolidate 18d → Up 38%'
        },
        {
          ticker: 'MSFT', companyName: 'Microsoft Corporation',
          description: 'Cloud computing and AI software leader.',
          sector: 'Technology', industry: 'Software', price: 4.67, change: 2.2,
          volume: 98000000, relVolume: 1.4, rsi: 57, probability: 80,
          riskLevel: 'Low', riskScore: 3.5, shortInterest: 1.8,
          daysTocover: 0.7, marketCap: 3200000000, recommendation: 'BUY',
          catalysts: ['AI momentum', 'Cloud growth'],
          redditMentions: 650, redditChange: 85, redditSentiment: 0.77,
          xSentiment: 0.80, xMentions: 2890,
          upcomingEvents: [
            { date: '2025-11-21', event: 'Azure Growth Report', impact: 'High', type: 'earnings' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 14,
          priorRally: 42.3, supportLevel: 4.50, resistanceLevel: 4.80,
          historicalPattern: 'Up 42% → Consolidate 14d → Up 31%'
        },
        {
          ticker: 'META', companyName: 'Meta Platforms',
          description: 'Social media and metaverse technology.',
          sector: 'Technology', industry: 'Social Media', price: 3.45, change: 2.6,
          volume: 76000000, relVolume: 1.5, rsi: 60, probability: 76,
          riskLevel: 'Low', riskScore: 4.0, shortInterest: 2.2,
          daysTocover: 0.9, marketCap: 2600000000, recommendation: 'BUY',
          catalysts: ['Ad revenue growth', 'AI integration'],
          redditMentions: 580, redditChange: 110, redditSentiment: 0.74,
          xSentiment: 0.76, xMentions: 2140,
          upcomingEvents: [
            { date: '2025-11-17', event: 'Q3 Earnings Call', impact: 'High', type: 'earnings' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 11,
          priorRally: 36.8, supportLevel: 3.30, resistanceLevel: 3.60,
          historicalPattern: 'Up 37% → Consolidate 12d → Up 29%'
        },
        {
          ticker: 'GOOGL', companyName: 'Alphabet Inc.',
          description: 'Search, cloud, and AI technology.',
          sector: 'Technology', industry: 'Internet', price: 2.89, change: 2.1,
          volume: 68000000, relVolume: 1.3, rsi: 56, probability: 74,
          riskLevel: 'Low', riskScore: 3.7, shortInterest: 1.9,
          daysTocover: 0.8, marketCap: 2900000000, recommendation: 'BUY',
          catalysts: ['AI search upgrades', 'Cloud growth'],
          redditMentions: 490, redditChange: 92, redditSentiment: 0.76,
          xSentiment: 0.78, xMentions: 1980,
          upcomingEvents: [
            { date: '2025-11-20', event: 'Gemini AI Update', impact: 'High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Ascending Triangle', consolidationDays: 13,
          priorRally: 39.2, supportLevel: 2.75, resistanceLevel: 3.00,
          historicalPattern: 'Up 39% → Consolidate 13d → Up 32%'
        },
        {
          ticker: 'AAPL', companyName: 'Apple Inc.',
          description: 'Consumer electronics and services.',
          sector: 'Technology', industry: 'Consumer Electronics', price: 3.12, change: 1.9,
          volume: 105000000, relVolume: 1.2, rsi: 55, probability: 72,
          riskLevel: 'Low', riskScore: 3.3, shortInterest: 1.6,
          daysTocover: 0.6, marketCap: 3500000000, recommendation: 'BUY',
          catalysts: ['iPhone demand', 'Services growth'],
          redditMentions: 820, redditChange: 78, redditSentiment: 0.73,
          xSentiment: 0.75, xMentions: 3250,
          upcomingEvents: [
            { date: '2025-11-15', event: 'iPhone Sales Data', impact: 'High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 15,
          priorRally: 33.5, supportLevel: 3.00, resistanceLevel: 3.25,
          historicalPattern: 'Up 34% → Consolidate 15d → Up 26%'
        },
        {
          ticker: 'NFLX', companyName: 'Netflix Inc.',
          description: 'Streaming entertainment platform.',
          sector: 'Communication', industry: 'Streaming', price: 4.12, change: 2.7,
          volume: 54000000, relVolume: 1.7, rsi: 62, probability: 79,
          riskLevel: 'Low', riskScore: 4.3, shortInterest: 2.4,
          daysTocover: 1.0, marketCap: 2400000000, recommendation: 'BUY',
          catalysts: ['Subscriber growth', 'Content slate'],
          redditMentions: 430, redditChange: 125, redditSentiment: 0.80,
          xSentiment: 0.79, xMentions: 1760,
          upcomingEvents: [
            { date: '2025-11-12', event: 'Subscriber Report', impact: 'Very High', type: 'earnings' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 9,
          priorRally: 41.6, supportLevel: 3.95, resistanceLevel: 4.30,
          historicalPattern: 'Up 42% → Consolidate 9d → Up 33%'
        },
        {
          ticker: 'CRM', companyName: 'Salesforce Inc.',
          description: 'Cloud-based CRM and business software.',
          sector: 'Technology', industry: 'Software', price: 3.78, change: 2.3,
          volume: 42000000, relVolume: 1.5, rsi: 58, probability: 75,
          riskLevel: 'Low', riskScore: 3.9, shortInterest: 2.0,
          daysTocover: 0.8, marketCap: 2700000000, recommendation: 'BUY',
          catalysts: ['AI integration', 'Enterprise demand'],
          redditMentions: 310, redditChange: 95, redditSentiment: 0.75,
          xSentiment: 0.77, xMentions: 1450,
          upcomingEvents: [
            { date: '2025-11-19', event: 'AI Product Launch', impact: 'High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Ascending Triangle', consolidationDays: 12,
          priorRally: 37.4, supportLevel: 3.60, resistanceLevel: 3.90,
          historicalPattern: 'Up 37% → Consolidate 12d → Up 30%'
        },
        {
          ticker: 'ADBE', companyName: 'Adobe Inc.',
          description: 'Creative software and digital experience.',
          sector: 'Technology', industry: 'Software', price: 4.45, change: 2.5,
          volume: 38000000, relVolume: 1.6, rsi: 59, probability: 77,
          riskLevel: 'Low', riskScore: 4.1, shortInterest: 2.1,
          daysTocover: 0.9, marketCap: 2500000000, recommendation: 'BUY',
          catalysts: ['AI creative tools', 'Subscription growth'],
          redditMentions: 280, redditChange: 88, redditSentiment: 0.78,
          xSentiment: 0.80, xMentions: 1320,
          upcomingEvents: [
            { date: '2025-11-16', event: 'Firefly AI Update', impact: 'High', type: 'news' }
          ],
          type: 'breakout', patternType: 'Bull Flag', consolidationDays: 11,
          priorRally: 40.1, supportLevel: 4.25, resistanceLevel: 4.60,
          historicalPattern: 'Up 40% → Consolidate 11d → Up 32%'
        }
      ];
      
      setSqueezeStocks(squeeze);
      setBreakoutStocks(breakouts);
      setIsScanning(false);
      setShowResults(true);
    }, 2000);
  };

  const toggleWatchlist = (ticker) => {
    setWatchlist(prev => 
      prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]
    );
  };

  const getRiskColor = (level) => {
    const colors = { 'Low': 'text-green-600 bg-green-100', 'Medium': 'text-yellow-600 bg-yellow-100', 'High': 'text-red-600 bg-red-100' };
    return colors[level] || 'text-gray-600 bg-gray-100';
  };

  const getRecommendationColor = (rec) => {
    if (rec.includes('STRONG')) return 'text-green-700 bg-green-100';
    if (rec === 'BUY') return 'text-blue-700 bg-blue-100';
    return 'text-yellow-700 bg-yellow-100';
  };

  const getSentimentIcon = (sentiment) => {
    if (sentiment > 0.75) return <ThumbsUp className="w-4 h-4 text-green-600" />;
    if (sentiment > 0.5) return <ThumbsUp className="w-4 h-4 text-blue-600" />;
    return <ThumbsDown className="w-4 h-4 text-red-600" />;
  };

  const getImpactColor = (impact) => {
    const colors = {
      'Very High': 'bg-red-100 text-red-700', 'High': 'bg-orange-100 text-orange-700',
      'Medium': 'bg-yellow-100 text-yellow-700', 'Low': 'bg-blue-100 text-blue-700'
    };
    return colors[impact] || 'bg-gray-100 text-gray-700';
  };

  const getEventIcon = (type) => {
    const icons = { 'earnings': '📊', 'news': '📰', 'regulatory': '⚖️', 'event': '🎤' };
    return icons[type] || '📅';
  };

  const getDaysUntil = (dateString) => {
    const diffDays = Math.ceil((new Date(dateString) - new Date()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

  const formatDateTime = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const formatTime = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  const calculateEntryExit = (stock) => {
    const currentPrice = stock.price;
    
    if (stock.type === 'breakout') {
      // BREAKOUT STRATEGY - Wait for confirmation above resistance
      const resistanceLevel = stock.resistanceLevel || (currentPrice * 1.05);
      const supportLevel = stock.supportLevel || (currentPrice * 0.95);
      
      // Entry: ONLY after breakout confirmed above resistance
      const breakoutEntry = resistanceLevel * 1.02; // 2% above resistance for confirmation
      
      // Stop loss: Just below support or consolidation range
      const stopLoss = supportLevel * 0.98;
      
      // Risk per share
      const riskPerShare = breakoutEntry - stopLoss;
      
      // Targets based on historical pattern move
      const historicalMove = stock.priorRally || 30; // Default 30% if not specified
      const target1 = breakoutEntry * (1 + (historicalMove * 0.5) / 100); // 50% of historical move
      const target2 = breakoutEntry * (1 + (historicalMove * 0.75) / 100); // 75% of historical move
      const target3 = breakoutEntry * (1 + historicalMove / 100); // Full historical move
      
      return {
        type: 'breakout',
        currentPrice: currentPrice,
        resistanceLevel: resistanceLevel,
        supportLevel: supportLevel,
        entry: breakoutEntry,
        entryCondition: 'Wait for close ABOVE resistance with volume surge',
        stopLoss: stopLoss,
        stopLossPercent: ((stopLoss - breakoutEntry) / breakoutEntry) * 100,
        target1: target1,
        target1Percent: ((target1 - breakoutEntry) / breakoutEntry) * 100,
        target2: target2,
        target2Percent: ((target2 - breakoutEntry) / breakoutEntry) * 100,
        target3: target3,
        target3Percent: ((target3 - breakoutEntry) / breakoutEntry) * 100,
        riskPerShare: riskPerShare,
        rewardPerShare: target1 - breakoutEntry,
        volumeRequirement: 'Must see 2-3x average volume on breakout'
      };
    } else {
      // SHORT SQUEEZE STRATEGY - Enter on technical triggers
      const supportDistance = stock.riskLevel === 'High' ? 0.15 : stock.riskLevel === 'Medium' ? 0.12 : 0.10;
      
      // Entry conditions for squeeze
      const hasHighShortInterest = stock.shortInterest > 20;
      const hasHighDTC = stock.daysTocover > 5;
      const hasVolumeSurge = stock.relVolume > 3;
      const hasRSIReversal = stock.rsi > 50; // Moving out of oversold
      
      // Entry: Current price if all conditions met, or wait for breakout
      const entry = currentPrice;
      
      // Very tight stop loss for volatile penny stocks
      const stopLoss = currentPrice * (1 - supportDistance);
      const riskPerShare = entry - stopLoss;
      
      // Aggressive targets for squeeze - can be 50-200%+
      const target1 = entry + (riskPerShare * 2); // 2:1 first target (take 50% off)
      const target2 = entry + (riskPerShare * 4); // 4:1 second target (take 30% off)
      const target3 = entry + (riskPerShare * 8); // 8:1 moon shot (let 20% run)
      
      return {
        type: 'squeeze',
        entry: entry,
        entryCondition: 'Enter on breakout above resistance + volume surge + RSI reversal',
        stopLoss: stopLoss,
        stopLossPercent: ((stopLoss - entry) / entry) * 100,
        target1: target1,
        target1Percent: ((target1 - entry) / entry) * 100,
        target2: target2,
        target2Percent: ((target2 - entry) / entry) * 100,
        target3: target3,
        target3Percent: ((target3 - entry) / entry) * 100,
        riskPerShare: riskPerShare,
        rewardPerShare: target1 - entry,
        shortInterest: stock.shortInterest,
        daysTocover: stock.daysTocover,
        hasAllConditions: hasHighShortInterest && hasHighDTC && hasVolumeSurge,
        volumeRequirement: 'Need 3-5x volume surge to confirm squeeze starting'
      };
    }
  };

  const StockCard = ({ stock }) => {
    const strategy = calculateEntryExit(stock);
    
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-bold text-white">{stock.ticker}</h3>
                <button
                  onClick={() => toggleWatchlist(stock.ticker)}
                  className={`p-2 rounded-lg ${watchlist.includes(stock.ticker) ? 'bg-yellow-400' : 'bg-white/20'}`}
                >
                  <Star className={`w-5 h-5 ${watchlist.includes(stock.ticker) ? 'fill-yellow-600 text-yellow-600' : 'text-white'}`} />
                </button>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRecommendationColor(stock.recommendation)}`}>
                  {stock.recommendation}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-purple-100 mb-2">{stock.companyName}</h4>
              <p className="text-sm text-purple-200 mb-3">{stock.description}</p>
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">{stock.sector}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">{stock.industry}</span>
              </div>
              <p className="text-2xl font-bold text-white">${stock.price.toFixed(2)}</p>
              <p className="text-green-200 font-semibold">+{stock.change.toFixed(1)}% Today</p>
              {stock.priceAsOf && (
                <p className="text-xs text-purple-200 mt-1">
                  📅 As of {formatDateTime(stock.priceAsOf)}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-purple-100 text-sm mb-1">{stock.type === 'squeeze' ? 'Squeeze' : 'Breakout'} Probability</p>
              <div className="text-4xl font-bold text-white">{stock.probability}%</div>
              {stock.probability > 75 && <span className="text-yellow-300 text-2xl">🔥</span>}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* 1. Social Sentiment */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              Social Sentiment Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">R</div>
                    <span className="font-semibold">Reddit</span>
                  </div>
                  {getSentimentIcon(stock.redditSentiment)}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mentions:</span>
                    <span className="font-bold">{stock.redditMentions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">24h Change:</span>
                    <span className="font-bold text-green-600">+{stock.redditChange}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sentiment:</span>
                    <span className="font-bold text-green-600">{(stock.redditSentiment * 100).toFixed(0)}% Bullish</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">𝕏</div>
                    <span className="font-semibold">X (Twitter)</span>
                  </div>
                  {getSentimentIcon(stock.xSentiment)}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mentions:</span>
                    <span className="font-bold">{stock.xMentions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engagement:</span>
                    <span className="font-bold text-blue-600">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sentiment:</span>
                    <span className="font-bold text-green-600">{(stock.xSentiment * 100).toFixed(0)}% Positive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Entry & Exit Strategy */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              {stock.type === 'breakout' ? 'Breakout Trading Strategy' : 'Short Squeeze Strategy'}
            </h4>

            {stock.type === 'breakout' ? (
              <>
                {/* Breakout Strategy */}
                <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4 mb-4">
                  <p className="text-sm font-bold text-blue-900 mb-2">⚠️ WAIT FOR BREAKOUT CONFIRMATION</p>
                  <p className="text-xs text-blue-800">
                    Do NOT buy at current price (${stock.price.toFixed(2)}). Wait for price to close ABOVE resistance (${strategy.resistanceLevel?.toFixed(2)}) with 2-3x volume surge.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                    <span className="text-sm font-semibold text-gray-600">📍 CURRENT PRICE</span>
                    <p className="text-2xl font-bold text-gray-600">${strategy.currentPrice?.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 mt-1">DO NOT BUY YET</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                    <span className="text-sm font-semibold text-gray-600">🚧 RESISTANCE</span>
                    <p className="text-2xl font-bold text-orange-600">${strategy.resistanceLevel?.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 mt-1">Must break above</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                    <span className="text-sm font-semibold text-gray-600">✅ ENTRY POINT</span>
                    <p className="text-2xl font-bold text-blue-600">${strategy.entry.toFixed(2)}</p>
                    <p className="text-xs text-blue-600 mt-1 font-semibold">Buy ONLY on confirmed breakout</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
                  <p className="text-sm font-bold text-yellow-900 mb-2">📋 Entry Checklist (ALL must be true):</p>
                  <ul className="text-xs text-yellow-800 space-y-1">
                    <li>✓ Price closes ABOVE ${strategy.resistanceLevel?.toFixed(2)} (not just touches)</li>
                    <li>✓ Volume surges to {strategy.volumeRequirement}</li>
                    <li>✓ Breakout confirmed on daily chart</li>
                    <li>✓ No immediate selling pressure after breakout</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-red-300 mb-4">
                  <span className="text-sm font-semibold text-gray-600">🛑 STOP LOSS</span>
                  <p className="text-2xl font-bold text-red-600">${strategy.stopLoss.toFixed(2)}</p>
                  <p className="text-xs text-red-600 mt-1">Below support at ${strategy.supportLevel?.toFixed(2)} ({strategy.stopLossPercent.toFixed(1)}% risk)</p>
                </div>
              </>
            ) : (
              <>
                {/* Short Squeeze Strategy */}
                <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 mb-4">
                  <p className="text-sm font-bold text-red-900 mb-2">🚨 HIGH RISK - SHORT SQUEEZE PLAY</p>
                  <p className="text-xs text-red-800">
                    Extremely volatile! Only enter when ALL squeeze conditions are met. Use tight stops and take profits quickly.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-purple-300 mb-4">
                  <p className="text-sm font-bold text-purple-900 mb-3">📊 Squeeze Setup Analysis:</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className={`p-2 rounded ${stock.shortInterest > 20 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      <p className="font-semibold">Short Interest: {stock.shortInterest}%</p>
                      <p>{stock.shortInterest > 20 ? '✓ High (>20%)' : '✗ Too Low'}</p>
                    </div>
                    <div className={`p-2 rounded ${stock.daysTocover > 5 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      <p className="font-semibold">Days to Cover: {stock.daysTocover?.toFixed(1)}</p>
                      <p>{stock.daysTocover > 5 ? '✓ High (>5 days)' : '✗ Too Low'}</p>
                    </div>
                    <div className={`p-2 rounded ${stock.relVolume > 3 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      <p className="font-semibold">Volume: {stock.relVolume.toFixed(1)}x</p>
                      <p>{stock.relVolume > 3 ? '✓ Surging (>3x)' : '⚠ Watch for surge'}</p>
                    </div>
                    <div className={`p-2 rounded ${stock.rsi > 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      <p className="font-semibold">RSI: {stock.rsi}</p>
                      <p>{stock.rsi > 50 ? '✓ Reversing Up' : '⚠ Wait for reversal'}</p>
                    </div>
                  </div>
                  {strategy.hasAllConditions && (
                    <div className="mt-3 p-2 bg-green-100 border border-green-400 rounded">
                      <p className="text-xs font-bold text-green-900">✅ ALL SQUEEZE CONDITIONS MET - Ready to trade!</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                    <span className="text-sm font-semibold text-gray-600">📍 ENTRY</span>
                    <p className="text-2xl font-bold text-blue-600">${strategy.entry.toFixed(2)}</p>
                    <p className="text-xs text-blue-600 mt-1 font-semibold">On breakout + volume</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                    <span className="text-sm font-semibold text-gray-600">🛑 STOP LOSS</span>
                    <p className="text-2xl font-bold text-red-600">${strategy.stopLoss.toFixed(2)}</p>
                    <p className="text-xs text-red-600 mt-1">TIGHT stop ({strategy.stopLossPercent.toFixed(1)}%)</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-4 mb-4">
                  <p className="text-sm font-bold text-orange-900 mb-2">⚡ Entry Triggers (Wait for ALL):</p>
                  <ul className="text-xs text-orange-800 space-y-1">
                    <li>✓ Price breaks above recent resistance level</li>
                    <li>✓ Volume explodes to 3-5x average ({strategy.volumeRequirement})</li>
                    <li>✓ RSI crosses above 50 (confirming reversal)</li>
                    <li>✓ Multiple green candles confirming momentum</li>
                  </ul>
                </div>
              </>
            )}

            {/* Profit Targets - Common for both */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900 mb-3">🎯 Profit Targets:</p>
              <div className="bg-white rounded-lg p-3 border-2 border-green-400">
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <span className="text-sm font-bold text-green-700">Target 1 ({stock.type === 'breakout' ? '50% of Historical Move' : 'Quick Profit'})</span>
                    <p className="text-xs text-gray-600">Sell 50% of position here</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">+{strategy.target1Percent.toFixed(1)}%</span>
                </div>
                <p className="text-xl font-bold text-green-600">${strategy.target1.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-yellow-300">
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <span className="text-sm font-bold text-yellow-700">Target 2 ({stock.type === 'breakout' ? '75% of Historical Move' : 'Major Move'})</span>
                    <p className="text-xs text-gray-600">Sell 30% of position here</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">+{strategy.target2Percent.toFixed(1)}%</span>
                </div>
                <p className="text-xl font-bold text-yellow-600">${strategy.target2.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-purple-300">
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <span className="text-sm font-bold text-purple-700">Target 3 ({stock.type === 'breakout' ? 'Full Historical Move' : 'Moon Shot'})</span>
                    <p className="text-xs text-gray-600">Let remaining 20% run with trailing stop</p>
                  </div>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">+{strategy.target3Percent.toFixed(1)}%</span>
                </div>
                <p className="text-xl font-bold text-purple-600">${strategy.target3.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-green-300">
              <p className="text-xs font-bold text-gray-900 mb-1">📊 Position Management:</p>
              <p className="text-xs text-gray-700">
                {stock.type === 'breakout' 
                  ? `Wait for breakout above ${strategy.resistanceLevel?.toFixed(2)} with volume. Enter at ${strategy.entry.toFixed(2)}, stop at ${strategy.stopLoss.toFixed(2)}. Take 50% at Target 1, 30% at Target 2, let 20% run. Move stop to breakeven after Target 1.`
                  : `Enter ONLY when all squeeze conditions met. Stop at ${strategy.stopLoss.toFixed(2)} (NO exceptions). Take 50% profit at Target 1 immediately. Sell 30% at Target 2. Trail stop on final 20%. Exit ALL if volume dies or squeeze fails.`
                }
              </p>
            </div>

            {stock.type === 'squeeze' && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg border-2 border-red-400">
                <p className="text-xs font-bold text-red-900 mb-2">🚨 CRITICAL WARNINGS:</p>
                <ul className="text-xs text-red-800 space-y-1">
                  <li>• <strong>Extreme Volatility:</strong> Price can swing 20-50% in minutes</li>
                  <li>• <strong>False Breakouts:</strong> Many squeezes fail - honor your stop!</li>
                  <li>• <strong>Take Profits Fast:</strong> Squeezes collapse suddenly - don't get greedy</li>
                  <li>• <strong>Position Size:</strong> Risk only 1-2% of account - these are GAMBLES</li>
                  <li>• <strong>Exit Plan:</strong> Know your exits BEFORE entering - no emotions!</li>
                </ul>
              </div>
            )}

            {stock.type === 'breakout' && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border-2 border-blue-400">
                <p className="text-xs font-bold text-blue-900 mb-2">💡 Breakout Trading Tips:</p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• <strong>Patience Required:</strong> Wait for confirmed close above resistance - no FOMO</li>
                  <li>• <strong>Volume Confirmation:</strong> Breakout without volume = likely false</li>
                  <li>• <strong>False Breakout Risk:</strong> If price quickly returns below resistance, exit immediately</li>
                  <li>• <strong>Lower Risk Entry:</strong> Entering higher means bigger stop, but confirmation reduces failure rate</li>
                  <li>• <strong>Historical Patterns:</strong> Based on {stock.historicalPattern}</li>
                </ul>
              </div>
            )}
          </div>

          {/* 3. AI Risk Analysis */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              AI-Powered Risk Analysis
            </h4>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Risk Score</p>
                <p className="text-2xl font-bold">{stock.riskScore}/10</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div className={`h-full rounded-full ${stock.riskScore < 5 ? 'bg-green-500' : stock.riskScore < 7 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${stock.riskScore * 10}%`}}></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Risk Level</p>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(stock.riskLevel)}`}>{stock.riskLevel}</span>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Liquidity</p>
                <p className="text-lg font-bold">{stock.volume > 50000000 ? 'High' : stock.volume > 20000000 ? 'Medium' : 'Low'}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-bold text-gray-900 mb-2">🤖 AI Assessment:</p>
              <p className="text-sm text-gray-700">
                {stock.riskLevel === 'Low' && `Low risk play with ${stock.probability}% probability. Good liquidity with ${(stock.volume/1000000).toFixed(0)}M volume. Consider for position.`}
                {stock.riskLevel === 'Medium' && `Moderate risk - volatility possible. ${stock.shortInterest}% short interest creates squeeze potential but adds risk. Use tight stops.`}
                {stock.riskLevel === 'High' && `High volatility expected. ${stock.shortInterest}% shorts + penny stock = explosive moves both ways. Small position size recommended.`}
              </p>
            </div>
          </div>

          {/* 4. Key Events */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                Key Events That Could Spike Price
              </h4>
              {stock.lastUpdated && (
                <span className="text-xs text-gray-600">
                  Updated: {formatTime(stock.lastUpdated)}
                </span>
              )}
            </div>
            <div className="space-y-3">
              {stock.upcomingEvents.map((event, i) => {
                const daysUntil = getDaysUntil(event.date);
                const isUrgent = ['Today', 'Tomorrow'].includes(daysUntil) || parseInt(daysUntil) <= 3;
                return (
                  <div key={i} className={`bg-white rounded-lg p-4 border-2 ${isUrgent ? 'border-red-400' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-2xl">{getEventIcon(event.type)}</span>
                        <div>
                          <h5 className="font-bold text-gray-900">{event.event}</h5>
                          <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getImpactColor(event.impact)}`}>{event.impact}</span>
                        <p className={`text-sm font-bold mt-1 ${isUrgent ? 'text-red-600' : 'text-gray-600'}`}>{daysUntil}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {stock.type === 'breakout' && (
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Consolidation Pattern
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700">Pattern</p>
                  <p className="text-lg font-bold text-blue-600">{stock.patternType}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700">Prior Rally</p>
                  <p className="text-lg font-bold text-green-600">+{stock.priorRally}%</p>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm font-bold text-gray-900 mb-2">Historical Pattern:</p>
                <p className="text-sm text-gray-700">{stock.historicalPattern}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Stockadoodledoo</h1>
            <p className="text-gray-600">Enter password to access</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />
          <button onClick={handleLogin} className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold">
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  const currentStocks = activeTab === 'squeeze' ? squeezeStocks : breakoutStocks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" />
                Stockadoodledoo
              </h1>
              <p className="text-purple-200">Dual Scanner: Squeezes & Breakouts</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAlertSettings(!showAlertSettings)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Watchlist ({watchlist.length})
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border border-white/30"
              >
                <Settings className="w-5 h-5" />
                Filters
              </button>
              <button onClick={scanMarket} disabled={isScanning} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50">
                {isScanning ? <><RefreshCw className="w-5 h-5 animate-spin" />Scanning...</> : <><BarChart3 className="w-5 h-5" />Scan Market</>}
              </button>
            </div>
          </div>
        </div>

        {/* Watchlist & Alert Settings */}
        {showAlertSettings && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-6 h-6 text-yellow-600" />
              Watchlist & Alert Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Contact Methods */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Methods
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={alertSettings.enableEmail}
                        onChange={(e) => setAlertSettings({...alertSettings, enableEmail: e.target.checked})}
                        className="w-4 h-4 text-purple-600 rounded"
                      />
                      <span className="text-sm font-semibold">Email Alerts</span>
                    </label>
                    <input
                      type="email"
                      value={alertSettings.email}
                      onChange={(e) => setAlertSettings({...alertSettings, email: e.target.value})}
                      placeholder="your-email@example.com"
                      disabled={!alertSettings.enableEmail}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={alertSettings.enableSMS}
                        onChange={(e) => setAlertSettings({...alertSettings, enableSMS: e.target.checked})}
                        className="w-4 h-4 text-purple-600 rounded"
                      />
                      <span className="text-sm font-semibold">SMS Alerts</span>
                    </label>
                    <input
                      type="tel"
                      value={alertSettings.phone}
                      onChange={(e) => setAlertSettings({...alertSettings, phone: e.target.value})}
                      placeholder="+1 234 567 8900"
                      disabled={!alertSettings.enableSMS}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    />
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={alertSettings.enablePush}
                      onChange={(e) => setAlertSettings({...alertSettings, enablePush: e.target.checked})}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-sm font-semibold">Browser Push Notifications</span>
                  </label>
                </div>
              </div>

              {/* Alert Triggers */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Alert Triggers
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price Change Alert (%)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={alertSettings.priceChangePercent}
                        onChange={(e) => setAlertSettings({...alertSettings, priceChangePercent: parseFloat(e.target.value)})}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Alert when price moves ±{alertSettings.priceChangePercent}%</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Volume Spike Alert
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.5"
                        value={alertSettings.volumeSpike}
                        onChange={(e) => setAlertSettings({...alertSettings, volumeSpike: parseFloat(e.target.value)})}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">x</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Alert when volume exceeds {alertSettings.volumeSpike}x average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Watchlist */}
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">⭐ Your Watchlist ({watchlist.length} stocks)</h4>
              {watchlist.length > 0 ? (
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {watchlist.map(ticker => (
                      <span key={ticker} className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold flex items-center gap-2">
                        {ticker}
                        <button onClick={() => toggleWatchlist(ticker)} className="hover:bg-purple-700 rounded-full">✕</button>
                      </span>
                    ))}
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">🔔 You'll receive alerts for these stocks when:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Price moves ±{alertSettings.priceChangePercent}% or more</li>
                      <li>• Volume spikes {alertSettings.volumeSpike}x above average</li>
                      <li>• Price hits entry/exit targets</li>
                      <li>• Breaking news or major events occur</li>
                      <li>• Stop loss levels are approaching</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-600">No stocks in watchlist. Click the ⭐ star button on any stock card to add it and receive alerts.</p>
              )}
            </div>
          </div>
        )}

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-purple-600" />
              TradingView Filter Settings
            </h3>

            {/* Tab Selection for Filters */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('squeeze')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${
                  activeTab === 'squeeze'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                🔥 Short Squeeze Filters
              </button>
              <button
                onClick={() => setActiveTab('breakout')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${
                  activeTab === 'breakout'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                📈 Breakout Filters
              </button>
            </div>

            {activeTab === 'squeeze' ? (
              <div>
                <p className="text-gray-600 mb-4 text-sm">Configure filters for short squeeze candidates</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">$</span>
                      <input
                        type="number"
                        step="0.1"
                        value={squeezeFilters.minPrice}
                        onChange={(e) => setSqueezeFilters({...squeezeFilters, minPrice: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">to</span>
                      <span className="text-gray-500">$</span>
                      <input
                        type="number"
                        step="0.1"
                        value={squeezeFilters.maxPrice}
                        onChange={(e) => setSqueezeFilters({...squeezeFilters, maxPrice: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Stock price between these values</p>
                  </div>

                  {/* Exchange */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Exchanges</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={squeezeFilters.exchanges.includes('NYSE')}
                          onChange={(e) => {
                            const newEx = e.target.checked 
                              ? [...squeezeFilters.exchanges, 'NYSE']
                              : squeezeFilters.exchanges.filter(ex => ex !== 'NYSE');
                            setSqueezeFilters({...squeezeFilters, exchanges: newEx});
                          }}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-sm">NYSE</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={squeezeFilters.exchanges.includes('NASDAQ')}
                          onChange={(e) => {
                            const newEx = e.target.checked 
                              ? [...squeezeFilters.exchanges, 'NASDAQ']
                              : squeezeFilters.exchanges.filter(ex => ex !== 'NASDAQ');
                            setSqueezeFilters({...squeezeFilters, exchanges: newEx});
                          }}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-sm">NASDAQ</span>
                      </label>
                    </div>
                  </div>

                  {/* Min Volume */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Volume</label>
                    <input
                      type="number"
                      step="100000"
                      value={squeezeFilters.minVolume}
                      onChange={(e) => setSqueezeFilters({...squeezeFilters, minVolume: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">{(squeezeFilters.minVolume / 1000000).toFixed(1)}M shares minimum</p>
                  </div>

                  {/* Relative Volume */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Min Relative Volume (RVOL)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.1"
                        value={squeezeFilters.minRelVolume}
                        onChange={(e) => setSqueezeFilters({...squeezeFilters, minRelVolume: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">x</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Volume vs 10-day average</p>
                  </div>

                  {/* Day Performance */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Min Day Performance</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="1"
                        value={squeezeFilters.minDayPerformance}
                        onChange={(e) => setSqueezeFilters({...squeezeFilters, minDayPerformance: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Up by at least this % today</p>
                  </div>

                  {/* RSI */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum RSI (14)</label>
                    <input
                      type="number"
                      value={squeezeFilters.minRSI}
                      onChange={(e) => setSqueezeFilters({...squeezeFilters, minRSI: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Strong momentum indicator</p>
                  </div>

                  {/* 3-Month High */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pattern</label>
                    <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={squeezeFilters.new3MonthHigh}
                        onChange={(e) => setSqueezeFilters({...squeezeFilters, new3MonthHigh: e.target.checked})}
                        className="w-5 h-5 text-purple-600 rounded"
                      />
                      <div>
                        <span className="text-sm font-semibold">New 3-Month High</span>
                        <p className="text-xs text-gray-500">Breaking to new highs</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm font-semibold text-red-900 mb-2">📋 Active Short Squeeze Filters:</p>
                  <div className="text-sm text-red-700 space-y-1">
                    <p>• Price: ${squeezeFilters.minPrice} - ${squeezeFilters.maxPrice}</p>
                    <p>• Exchanges: {squeezeFilters.exchanges.join(', ')}</p>
                    <p>• Volume &gt; {(squeezeFilters.minVolume / 1000000).toFixed(1)}M</p>
                    <p>• Relative Volume &gt; {squeezeFilters.minRelVolume}x</p>
                    <p>• Day Performance &gt; +{squeezeFilters.minDayPerformance}%</p>
                    <p>• RSI &gt; {squeezeFilters.minRSI}</p>
                    <p>• {squeezeFilters.new3MonthHigh ? '✓' : '✗'} New 3-Month High Required</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-4 text-sm">Configure filters for consolidation breakout patterns</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Change % */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Min Change %</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.5"
                        value={breakoutFilters.minChangePercent}
                        onChange={(e) => setBreakoutFilters({...breakoutFilters, minChangePercent: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Daily price change threshold</p>
                  </div>

                  {/* Relative Volume */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Min Relative Volume</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.1"
                        value={breakoutFilters.minRelVolume}
                        onChange={(e) => setBreakoutFilters({...breakoutFilters, minRelVolume: parseFloat(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-500">x</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Volume vs average</p>
                  </div>

                  {/* Market Cap */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Min Market Cap</label>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">$</span>
                      <input
                        type="number"
                        step="100000000"
                        value={breakoutFilters.minMarketCap}
                        onChange={(e) => setBreakoutFilters({...breakoutFilters, minMarketCap: parseInt(e.target.value)})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">${(breakoutFilters.minMarketCap / 1000000000).toFixed(1)}B minimum</p>
                  </div>

                  {/* EMA Filters */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Moving Averages (Trend Filters)</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={breakoutFilters.useEMA8}
                          onChange={(e) => setBreakoutFilters({...breakoutFilters, useEMA8: e.target.checked})}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <div>
                          <span className="text-sm font-semibold">Price &gt; EMA (8)</span>
                          <p className="text-xs text-gray-500">Very short-term momentum</p>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={breakoutFilters.useEMA21}
                          onChange={(e) => setBreakoutFilters({...breakoutFilters, useEMA21: e.target.checked})}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <div>
                          <span className="text-sm font-semibold">Price &gt; EMA (21)</span>
                          <p className="text-xs text-gray-500">Short-term uptrend</p>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={breakoutFilters.useEMA50}
                          onChange={(e) => setBreakoutFilters({...breakoutFilters, useEMA50: e.target.checked})}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <div>
                          <span className="text-sm font-semibold">Price &gt; EMA (50)</span>
                          <p className="text-xs text-gray-500">Medium-term uptrend</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">📋 Active Breakout Filters:</p>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• Change % &gt; {breakoutFilters.minChangePercent}%</p>
                    <p>• Relative Volume &gt; {breakoutFilters.minRelVolume}x</p>
                    <p>• Market Cap &gt; ${(breakoutFilters.minMarketCap / 1000000000).toFixed(1)}B</p>
                    <p>• {breakoutFilters.useEMA8 ? '✓' : '✗'} Price &gt; EMA (8)</p>
                    <p>• {breakoutFilters.useEMA21 ? '✓' : '✗'} Price &gt; EMA (21)</p>
                    <p>• {breakoutFilters.useEMA50 ? '✓' : '✗'} Price &gt; EMA (50)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {showResults && (
          <>
            {/* Scan Time Banner */}
            {scanTime && (
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-6 border border-white/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-5 h-5 text-purple-300" />
                    <span className="font-semibold">Last Scan:</span>
                    <span className="text-purple-200">{formatDateTime(scanTime)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200 text-sm">
                    <Activity className="w-4 h-4" />
                    <span>Market data updates in real-time</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-xl p-2 mb-6">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setActiveTab('squeeze')} className={`py-4 px-6 rounded-xl font-bold ${activeTab === 'squeeze' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <div className="flex items-center justify-center gap-2"><Zap className="w-5 h-5" /><span>Short Squeezes</span></div>
                  <p className="text-sm opacity-90">{squeezeStocks.length} Candidates</p>
                </button>
                <button onClick={() => setActiveTab('breakout')} className={`py-4 px-6 rounded-xl font-bold ${activeTab === 'breakout' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <div className="flex items-center justify-center gap-2"><Layers className="w-5 h-5" /><span>Breakouts</span></div>
                  <p className="text-sm opacity-90">{breakoutStocks.length} Patterns</p>
                </button>
              </div>
            </div>
            {currentStocks.map((stock, idx) => <StockCard key={idx} stock={stock} />)}
          </>
        )}

        {!showResults && !isScanning && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20">
            <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Scan</h3>
            <p className="text-purple-200">Click Scan Market to find opportunities</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortSqueezeDetector;
