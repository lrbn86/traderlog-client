export interface Trade {
  id: number;
  status: string;
  date: string;
  symbol: string;
  entry: number;
  exit: number;
  size: number;
  side: string;
  returnDollar: number;
  returnPercent: number;
}
