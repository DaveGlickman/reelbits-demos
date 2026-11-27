// Money display. RGS amounts are integers with 6 decimal places (1_000_000 = 1.00).
// Wins are always shown exactly: extra decimals appear only when the amount needs them
// (e.g. a 0.05x win on a 0.01 play = 0.0005).

const M = {
  USD: { symbol: '$', decimals: 2 }, CAD: { symbol: 'CA$', decimals: 2 }, JPY: { symbol: '¥', decimals: 0 },
  EUR: { symbol: '€', decimals: 2 }, RUB: { symbol: '₽', decimals: 2 }, CNY: { symbol: 'CN¥', decimals: 2 },
  PHP: { symbol: '₱', decimals: 2 }, INR: { symbol: '₹', decimals: 2 }, IDR: { symbol: 'Rp', decimals: 0 },
  KRW: { symbol: '₩', decimals: 0 }, BRL: { symbol: 'R$', decimals: 2 }, MXN: { symbol: 'MX$', decimals: 2 },
  DKK: { symbol: 'kr', decimals: 2, after: true }, PLN: { symbol: 'zł', decimals: 2, after: true },
  VND: { symbol: '₫', decimals: 0, after: true }, TRY: { symbol: '₺', decimals: 2 },
  CLP: { symbol: 'CLP', decimals: 0, after: true }, ARS: { symbol: 'ARS', decimals: 2, after: true },
  PEN: { symbol: 'S/', decimals: 2 }, NGN: { symbol: '₦', decimals: 2 }, SAR: { symbol: 'SAR', decimals: 2, after: true },
  ILS: { symbol: '₪', decimals: 2 }, AED: { symbol: 'AED', decimals: 2, after: true }, TWD: { symbol: 'NT$', decimals: 2 },
  NOK: { symbol: 'kr', decimals: 2, after: true }, KWD: { symbol: 'KD', decimals: 3 }, JOD: { symbol: 'JD', decimals: 3 },
  CRC: { symbol: '₡', decimals: 2 }, TND: { symbol: 'TND', decimals: 3, after: true }, SGD: { symbol: 'SG$', decimals: 2 },
  MYR: { symbol: 'RM', decimals: 2 }, OMR: { symbol: 'OMR', decimals: 3, after: true }, QAR: { symbol: 'QAR', decimals: 2, after: true },
  BHD: { symbol: 'BD', decimals: 3 }, PKR: { symbol: '₨', decimals: 2 }, EGP: { symbol: 'EGP', decimals: 2, after: true },
  NZD: { symbol: 'NZ$', decimals: 2 }, BOB: { symbol: 'Bs', decimals: 2 }, GHS: { symbol: 'GH₵', decimals: 2 },
  KES: { symbol: 'KSh', decimals: 2 }, MAD: { symbol: 'MAD', decimals: 2, after: true }, BAM: { symbol: 'KM', decimals: 2 },
  ISK: { symbol: 'kr', decimals: 0, after: true }, TZS: { symbol: 'TSh', decimals: 2 }, UGX: { symbol: 'USh', decimals: 0 },
  XOF: { symbol: 'CFA', decimals: 0, after: true }, AUD: { symbol: 'A$', decimals: 2 }, BWP: { symbol: 'P', decimals: 2 },
  GEL: { symbol: '₾', decimals: 2 }, HNL: { symbol: 'L', decimals: 2 }, JMD: { symbol: 'J$', decimals: 2 },
  KGS: { symbol: 'KGS', decimals: 2, after: true }, MZN: { symbol: 'MZN', decimals: 2, after: true }, PGK: { symbol: 'K', decimals: 2 },
  TMT: { symbol: 'TMT', decimals: 2, after: true }, TTD: { symbol: 'TT$', decimals: 2 }, UAH: { symbol: '₴', decimals: 2 },
  XCD: { symbol: 'EC$', decimals: 2 }, APE: { symbol: 'APE', decimals: 4, after: true }, BCH: { symbol: 'BCH', decimals: 6, after: true },
  BNB: { symbol: 'BNB', decimals: 6, after: true }, BTC: { symbol: 'BTC', decimals: 6, after: true }, BUSD: { symbol: 'BUSD', decimals: 2, after: true },
  CRO: { symbol: 'CRO', decimals: 4, after: true }, DAI: { symbol: 'DAI', decimals: 2, after: true }, DOGE: { symbol: 'DOGE', decimals: 4, after: true },
  EOS: { symbol: 'EOS', decimals: 4, after: true }, ETH: { symbol: 'ETH', decimals: 6, after: true }, LINK: { symbol: 'LINK', decimals: 4, after: true },
  LTC: { symbol: 'LTC', decimals: 6, after: true }, POL: { symbol: 'POL', decimals: 4, after: true }, SAND: { symbol: 'SAND', decimals: 4, after: true },
  SHIB: { symbol: 'SHIB', decimals: 0, after: true }, SOL: { symbol: 'SOL', decimals: 6, after: true }, TRUMP: { symbol: 'TRUMP', decimals: 4, after: true },
  TRX: { symbol: 'TRX', decimals: 4, after: true }, UNI: { symbol: 'UNI', decimals: 4, after: true }, USDC: { symbol: 'USDC', decimals: 2, after: true },
  USDT: { symbol: 'USDT', decimals: 2, after: true }, XRP: { symbol: 'XRP', decimals: 4, after: true },
  XGC: { symbol: 'GC', decimals: 2, after: true }, XSC: { symbol: 'SC', decimals: 2, after: true }, XEC: { symbol: 'SC', decimals: 2, after: true },
  XRC: { symbol: 'SC', decimals: 2, after: true }, WRW: { symbol: 'SC', decimals: 2, after: true },
};

export function meta(currency) {
  return M[currency] ?? { symbol: currency || '', decimals: 2, after: true };
}

/** Exact decimal string of a 6-decimal integer amount, at least `min` decimals, more only if needed. */
export function exactNumber(amount, min) {
  const neg = amount < 0;
  let a = Math.round(Math.abs(amount));
  const whole = Math.floor(a / 1_000_000);
  let frac = String(a % 1_000_000).padStart(6, '0');
  // trim trailing zeros, keep at least `min`
  let keep = 6;
  while (keep > min && frac[keep - 1] === '0') keep--;
  frac = frac.slice(0, keep);
  const w = whole.toLocaleString('en-US');
  return (neg ? '-' : '') + (keep > 0 ? `${w}.${frac}` : w);
}

/** Balance-style amount: currency decimals (balance never needs more). */
export function fmtBalance(amount, currency) {
  const m = meta(currency);
  const v = (Math.floor(amount / 10 ** (6 - m.decimals)) / 10 ** m.decimals).toLocaleString('en-US', {
    minimumFractionDigits: m.decimals,
    maximumFractionDigits: m.decimals,
  });
  return wrap(v, m);
}

/** Win / play amounts: exact, never rounded (sub-cent wins show extra decimals). */
export function fmtMoney(amount, currency) {
  const m = meta(currency);
  return wrap(exactNumber(amount, m.decimals), m);
}

function wrap(v, m) {
  if (!m.symbol) return v;
  return m.after ? `${v} ${m.symbol}` : `${m.symbol}${v}`;
}

/** payout in hundredths of the base play -> 6-decimal money amount (exact integer maths). */
export function payoutAmount(bet, hundredths) {
  return Math.round((bet * hundredths) / 100);
}

export function fmtMult(hundredths) {
  const v = hundredths / 100;
  return `${v.toLocaleString('en-US', { maximumFractionDigits: 2 })}x`;
}
