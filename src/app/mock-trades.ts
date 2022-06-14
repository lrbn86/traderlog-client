export interface Stock {
  id: number;
  status: string;
  date: string;
  symbol: string;
  entry: number;
  exit: number;
  size: number;
  side: string;
  returnDollars: number;
  returnPercent: number;
}

export const stocks: Stock[] = [
  {
    id: 1,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 2,
    status: 'LOSE',
    date: '06/19/2022',
    symbol: 'MSFT',
    entry: 140.02,
    exit: 100.03,
    size: 120,
    side: 'LONG',
    returnDollars: -2,
    returnPercent: -1
  },
  {
    id: 3,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 4,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 5,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 6,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 7,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 8,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 9,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
  {
    id: 10,
    status: 'WIN',
    date: '06/14/2022',
    symbol: 'AMZN',
    entry: 104.02,
    exit: 126.03,
    size: 100,
    side: 'LONG',
    returnDollars: 200,
    returnPercent: 5
  },
]
