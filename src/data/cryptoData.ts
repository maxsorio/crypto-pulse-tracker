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

export const initialCryptoData: CryptoData[] = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', pair: 'USDT', bybit: 43256.78, okx: 43261.23, mexc: 43248.90, binance: 43259.45, bitget: 43255.12, bingx: 43252.67, gateio: 43260.34, kucoin: 43257.89 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', pair: 'USDT', bybit: 2268.45, okx: 2269.12, mexc: 2267.89, binance: 2268.78, bitget: 2268.23, bingx: 2267.56, gateio: 2269.34, kucoin: 2268.67 },
  { id: 3, name: 'BNB', symbol: 'BNB', pair: 'USDT', bybit: 312.45, okx: 312.67, mexc: 312.23, binance: 312.56, bitget: 312.34, bingx: 312.12, gateio: 312.78, kucoin: 312.45 },
  { id: 4, name: 'Solana', symbol: 'SOL', pair: 'USDT', bybit: 98.45, okx: 98.67, mexc: 98.23, binance: 98.56, bitget: 98.34, bingx: 98.12, gateio: 98.78, kucoin: 98.45 },
  { id: 5, name: 'XRP', symbol: 'XRP', pair: 'USDT', bybit: 0.6234, okx: 0.6245, mexc: 0.6228, binance: 0.6241, bitget: 0.6237, bingx: 0.6225, gateio: 0.6248, kucoin: 0.6236 },
  { id: 6, name: 'Cardano', symbol: 'ADA', pair: 'USDT', bybit: 0.5123, okx: 0.5134, mexc: 0.5118, binance: 0.5129, bitget: 0.5125, bingx: 0.5115, gateio: 0.5137, kucoin: 0.5124 },
  { id: 7, name: 'Avalanche', symbol: 'AVAX', pair: 'USDT', bybit: 35.67, okx: 35.78, mexc: 35.56, binance: 35.72, bitget: 35.68, bingx: 35.54, gateio: 35.81, kucoin: 35.69 },
  { id: 8, name: 'Dogecoin', symbol: 'DOGE', pair: 'USDT', bybit: 0.0823, okx: 0.0825, mexc: 0.0821, binance: 0.0824, bitget: 0.0822, bingx: 0.0820, gateio: 0.0826, kucoin: 0.0823 },
  { id: 9, name: 'Polkadot', symbol: 'DOT', pair: 'USDT', bybit: 7.45, okx: 7.48, mexc: 7.43, binance: 7.47, bitget: 7.46, bingx: 7.42, gateio: 7.49, kucoin: 7.45 },
  { id: 10, name: 'Polygon', symbol: 'MATIC', pair: 'USDT', bybit: 0.8934, okx: 0.8956, mexc: 0.8923, binance: 0.8945, bitget: 0.8938, bingx: 0.8918, gateio: 0.8961, kucoin: 0.8936 },
  { id: 11, name: 'Chainlink', symbol: 'LINK', pair: 'USDT', bybit: 14.56, okx: 14.62, mexc: 14.52, binance: 14.59, bitget: 14.57, bingx: 14.50, gateio: 14.64, kucoin: 14.55 },
  { id: 12, name: 'Litecoin', symbol: 'LTC', pair: 'USDT', bybit: 72.34, okx: 72.45, mexc: 72.28, binance: 72.41, bitget: 72.36, bingx: 72.25, gateio: 72.48, kucoin: 72.35 },
  { id: 13, name: 'Bitcoin Cash', symbol: 'BCH', pair: 'USDT', bybit: 234.56, okx: 234.78, mexc: 234.34, binance: 234.67, bitget: 234.59, bingx: 234.28, gateio: 234.84, kucoin: 234.58 },
  { id: 14, name: 'Uniswap', symbol: 'UNI', pair: 'USDT', bybit: 6.23, okx: 6.26, mexc: 6.21, binance: 6.25, bitget: 6.24, bingx: 6.20, gateio: 6.27, kucoin: 6.23 },
  { id: 15, name: 'Stellar', symbol: 'XLM', pair: 'USDT', bybit: 0.1234, okx: 0.1238, mexc: 0.1231, binance: 0.1236, bitget: 0.1235, bingx: 0.1229, gateio: 0.1240, kucoin: 0.1234 },
];

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
