export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  pair: 'USDT' | 'USDC';
  bybit: number;
  okx: number;
  mexc: number;
  binance: number;
  bitget: number;
  bingx: number;
  gateio: number;
  kucoin: number;
}

// Helper to generate random price with small variations across exchanges
const generatePrices = (basePrice: number) => {
  const variance = basePrice * 0.001; // 0.1% variance
  return {
    bybit: basePrice + (Math.random() - 0.5) * variance,
    okx: basePrice + (Math.random() - 0.5) * variance,
    mexc: basePrice + (Math.random() - 0.5) * variance,
    binance: basePrice + (Math.random() - 0.5) * variance,
    bitget: basePrice + (Math.random() - 0.5) * variance,
    bingx: basePrice + (Math.random() - 0.5) * variance,
    gateio: basePrice + (Math.random() - 0.5) * variance,
    kucoin: basePrice + (Math.random() - 0.5) * variance,
  };
};

const cryptoList = [
  { name: 'Bitcoin', symbol: 'BTC', basePrice: 43256.78 },
  { name: 'Ethereum', symbol: 'ETH', basePrice: 2268.45 },
  { name: 'BNB', symbol: 'BNB', basePrice: 312.45 },
  { name: 'Solana', symbol: 'SOL', basePrice: 98.45 },
  { name: 'XRP', symbol: 'XRP', basePrice: 0.6234 },
  { name: 'Cardano', symbol: 'ADA', basePrice: 0.5123 },
  { name: 'Avalanche', symbol: 'AVAX', basePrice: 35.67 },
  { name: 'Dogecoin', symbol: 'DOGE', basePrice: 0.0823 },
  { name: 'Polkadot', symbol: 'DOT', basePrice: 7.45 },
  { name: 'Polygon', symbol: 'MATIC', basePrice: 0.8934 },
  { name: 'Chainlink', symbol: 'LINK', basePrice: 14.56 },
  { name: 'Litecoin', symbol: 'LTC', basePrice: 72.34 },
  { name: 'Bitcoin Cash', symbol: 'BCH', basePrice: 234.56 },
  { name: 'Uniswap', symbol: 'UNI', basePrice: 6.23 },
  { name: 'Stellar', symbol: 'XLM', basePrice: 0.1234 },
  { name: 'Cosmos', symbol: 'ATOM', basePrice: 9.87 },
  { name: 'Monero', symbol: 'XMR', basePrice: 156.78 },
  { name: 'Ethereum Classic', symbol: 'ETC', basePrice: 19.45 },
  { name: 'Filecoin', symbol: 'FIL', basePrice: 5.67 },
  { name: 'Hedera', symbol: 'HBAR', basePrice: 0.0567 },
  { name: 'Internet Computer', symbol: 'ICP', basePrice: 12.34 },
  { name: 'Cronos', symbol: 'CRO', basePrice: 0.0789 },
  { name: 'VeChain', symbol: 'VET', basePrice: 0.0234 },
  { name: 'Aptos', symbol: 'APT', basePrice: 8.56 },
  { name: 'Arbitrum', symbol: 'ARB', basePrice: 1.23 },
  { name: 'Optimism', symbol: 'OP', basePrice: 2.45 },
  { name: 'Near Protocol', symbol: 'NEAR', basePrice: 3.67 },
  { name: 'Aave', symbol: 'AAVE', basePrice: 89.45 },
  { name: 'The Graph', symbol: 'GRT', basePrice: 0.1567 },
  { name: 'Maker', symbol: 'MKR', basePrice: 1456.78 },
  { name: 'Render', symbol: 'RNDR', basePrice: 4.56 },
  { name: 'Injective', symbol: 'INJ', basePrice: 23.45 },
  { name: 'Immutable', symbol: 'IMX', basePrice: 1.89 },
  { name: 'Sei', symbol: 'SEI', basePrice: 0.567 },
  { name: 'Stacks', symbol: 'STX', basePrice: 1.45 },
  { name: 'Algorand', symbol: 'ALGO', basePrice: 0.1789 },
  { name: 'THORChain', symbol: 'RUNE', basePrice: 5.23 },
  { name: 'Fantom', symbol: 'FTM', basePrice: 0.3456 },
  { name: 'The Sandbox', symbol: 'SAND', basePrice: 0.4567 },
  { name: 'Decentraland', symbol: 'MANA', basePrice: 0.4123 },
  { name: 'Axie Infinity', symbol: 'AXS', basePrice: 7.89 },
  { name: 'Gala', symbol: 'GALA', basePrice: 0.0234 },
  { name: 'Enjin Coin', symbol: 'ENJ', basePrice: 0.2789 },
  { name: 'Flow', symbol: 'FLOW', basePrice: 0.789 },
  { name: 'Chiliz', symbol: 'CHZ', basePrice: 0.0789 },
  { name: 'Curve DAO', symbol: 'CRV', basePrice: 0.5678 },
  { name: 'Lido DAO', symbol: 'LDO', basePrice: 2.34 },
  { name: 'Rocket Pool', symbol: 'RPL', basePrice: 23.45 },
  { name: 'Compound', symbol: 'COMP', basePrice: 45.67 },
  { name: 'SushiSwap', symbol: 'SUSHI', basePrice: 1.23 },
  { name: 'PancakeSwap', symbol: 'CAKE', basePrice: 2.45 },
  { name: '1inch', symbol: '1INCH', basePrice: 0.3456 },
  { name: 'dYdX', symbol: 'DYDX', basePrice: 2.78 },
  { name: 'GMX', symbol: 'GMX', basePrice: 34.56 },
  { name: 'Synthetix', symbol: 'SNX', basePrice: 2.89 },
  { name: 'Frax Share', symbol: 'FXS', basePrice: 6.78 },
  { name: 'Convex Finance', symbol: 'CVX', basePrice: 3.45 },
  { name: 'Yearn Finance', symbol: 'YFI', basePrice: 7890.12 },
  { name: 'Balancer', symbol: 'BAL', basePrice: 3.67 },
  { name: 'Loopring', symbol: 'LRC', basePrice: 0.2345 },
  { name: 'Zcash', symbol: 'ZEC', basePrice: 23.45 },
  { name: 'Dash', symbol: 'DASH', basePrice: 28.67 },
  { name: 'NEO', symbol: 'NEO', basePrice: 11.23 },
  { name: 'Waves', symbol: 'WAVES', basePrice: 1.89 },
  { name: 'IOTA', symbol: 'IOTA', basePrice: 0.2123 },
  { name: 'Tezos', symbol: 'XTZ', basePrice: 0.8789 },
  { name: 'EOS', symbol: 'EOS', basePrice: 0.6789 },
  { name: 'Theta Network', symbol: 'THETA', basePrice: 1.23 },
  { name: 'Elrond', symbol: 'EGLD', basePrice: 45.67 },
  { name: 'Kava', symbol: 'KAVA', basePrice: 0.5678 },
  { name: 'Celo', symbol: 'CELO', basePrice: 0.5123 },
  { name: 'Ankr', symbol: 'ANKR', basePrice: 0.0234 },
  { name: 'Ocean Protocol', symbol: 'OCEAN', basePrice: 0.3456 },
  { name: 'Fetch.ai', symbol: 'FET', basePrice: 0.5678 },
  { name: 'SingularityNET', symbol: 'AGIX', basePrice: 0.2789 },
  { name: 'Oasis Network', symbol: 'ROSE', basePrice: 0.0789 },
  { name: 'IoTeX', symbol: 'IOTX', basePrice: 0.0234 },
  { name: 'Qtum', symbol: 'QTUM', basePrice: 2.89 },
  { name: 'Ontology', symbol: 'ONT', basePrice: 0.2123 },
  { name: 'Zilliqa', symbol: 'ZIL', basePrice: 0.0178 },
  { name: 'ICON', symbol: 'ICX', basePrice: 0.1789 },
  { name: 'Ravencoin', symbol: 'RVN', basePrice: 0.0189 },
  { name: 'Horizen', symbol: 'ZEN', basePrice: 8.45 },
  { name: 'DigiByte', symbol: 'DGB', basePrice: 0.0078 },
  { name: 'Siacoin', symbol: 'SC', basePrice: 0.0045 },
  { name: 'Holo', symbol: 'HOT', basePrice: 0.0012 },
  { name: 'Basic Attention', symbol: 'BAT', basePrice: 0.2123 },
  { name: 'Livepeer', symbol: 'LPT', basePrice: 8.56 },
  { name: 'Arweave', symbol: 'AR', basePrice: 8.23 },
  { name: 'Storj', symbol: 'STORJ', basePrice: 0.5234 },
  { name: 'Mask Network', symbol: 'MASK', basePrice: 3.12 },
  { name: 'Band Protocol', symbol: 'BAND', basePrice: 1.34 },
  { name: 'API3', symbol: 'API3', basePrice: 1.67 },
  { name: 'Celer Network', symbol: 'CELR', basePrice: 0.0178 },
  { name: 'Cartesi', symbol: 'CTSI', basePrice: 0.1456 },
  { name: 'Chromia', symbol: 'CHR', basePrice: 0.1789 },
  { name: 'Ren', symbol: 'REN', basePrice: 0.0456 },
  { name: 'NuCypher', symbol: 'NU', basePrice: 0.0678 },
  { name: 'Origin Protocol', symbol: 'OGN', basePrice: 0.0989 },
  { name: 'Request', symbol: 'REQ', basePrice: 0.0789 },
  { name: 'Civic', symbol: 'CVC', basePrice: 0.1234 },
  { name: 'Status', symbol: 'SNT', basePrice: 0.0234 },
  { name: 'Power Ledger', symbol: 'POWR', basePrice: 0.2345 },
  { name: 'Numeraire', symbol: 'NMR', basePrice: 14.56 },
  { name: 'Rally', symbol: 'RLY', basePrice: 0.0067 },
  { name: 'Ampleforth', symbol: 'AMPL', basePrice: 1.12 },
  { name: 'Tellor', symbol: 'TRB', basePrice: 78.90 },
  { name: 'Perpetual Protocol', symbol: 'PERP', basePrice: 0.7890 },
  { name: 'Mirror Protocol', symbol: 'MIR', basePrice: 0.0234 },
  { name: 'Kyber Network', symbol: 'KNC', basePrice: 0.5678 },
  { name: 'UMA', symbol: 'UMA', basePrice: 2.34 },
  { name: 'Badger DAO', symbol: 'BADGER', basePrice: 2.89 },
  { name: 'Harvest Finance', symbol: 'FARM', basePrice: 34.56 },
  { name: 'Alpha Finance', symbol: 'ALPHA', basePrice: 0.0789 },
  { name: 'Cream Finance', symbol: 'CREAM', basePrice: 12.34 },
  { name: 'Tornado Cash', symbol: 'TORN', basePrice: 3.45 },
  { name: 'Keep Network', symbol: 'KEEP', basePrice: 0.0567 },
  { name: 'Audius', symbol: 'AUDIO', basePrice: 0.1789 },
  { name: 'Radicle', symbol: 'RAD', basePrice: 1.23 },
  { name: 'Gitcoin', symbol: 'GTC', basePrice: 1.45 },
  { name: 'Shiba Inu', symbol: 'SHIB', basePrice: 0.00000912 },
  { name: 'Pepe', symbol: 'PEPE', basePrice: 0.00000145 },
  { name: 'Floki', symbol: 'FLOKI', basePrice: 0.0000234 },
  { name: 'Bonk', symbol: 'BONK', basePrice: 0.00000789 },
  { name: 'Memecoin', symbol: 'MEME', basePrice: 0.0234 },
  { name: 'Worldcoin', symbol: 'WLD', basePrice: 2.34 },
  { name: 'Blur', symbol: 'BLUR', basePrice: 0.3456 },
  { name: 'Sui', symbol: 'SUI', basePrice: 1.23 },
  { name: 'Celestia', symbol: 'TIA', basePrice: 12.34 },
  { name: 'Jupiter', symbol: 'JUP', basePrice: 0.789 },
  { name: 'Pyth Network', symbol: 'PYTH', basePrice: 0.3456 },
  { name: 'Jito', symbol: 'JTO', basePrice: 2.89 },
  { name: 'Wormhole', symbol: 'W', basePrice: 0.5678 },
  { name: 'Ethena', symbol: 'ENA', basePrice: 0.789 },
  { name: 'Ondo', symbol: 'ONDO', basePrice: 1.23 },
  { name: 'Pendle', symbol: 'PENDLE', basePrice: 4.56 },
  { name: 'Starknet', symbol: 'STRK', basePrice: 1.12 },
  { name: 'zkSync', symbol: 'ZK', basePrice: 0.1789 },
  { name: 'LayerZero', symbol: 'ZRO', basePrice: 3.45 },
  { name: 'Eigenlayer', symbol: 'EIGEN', basePrice: 3.78 },
  { name: 'Movement', symbol: 'MOVE', basePrice: 0.789 },
  { name: 'Hyperliquid', symbol: 'HYPE', basePrice: 23.45 },
  { name: 'Usual', symbol: 'USUAL', basePrice: 1.12 },
];

let idCounter = 1;
export const initialCryptoData: CryptoData[] = [];

// Generate USDT pairs
cryptoList.forEach((crypto) => {
  initialCryptoData.push({
    id: idCounter++,
    name: crypto.name,
    symbol: crypto.symbol,
    pair: 'USDT',
    ...generatePrices(crypto.basePrice),
  });
});

// Generate USDC pairs
cryptoList.forEach((crypto) => {
  initialCryptoData.push({
    id: idCounter++,
    name: crypto.name,
    symbol: crypto.symbol,
    pair: 'USDC',
    ...generatePrices(crypto.basePrice * 0.9998), // Slight variance for USDC pairs
  });
});

export const exchangeNames = ['bybit', 'okx', 'mexc', 'binance', 'bitget', 'bingx', 'gateio', 'kucoin'] as const;

export type ExchangeName = typeof exchangeNames[number];

export const exchangeDisplayNames: Record<ExchangeName, string> = {
  bybit: 'Bybit',
  okx: 'OKX',
  mexc: 'MEXC',
  binance: 'Binance',
  bitget: 'Bitget',
  bingx: 'BingX',
  gateio: 'Gate.io',
  kucoin: 'KuCoin',
};
