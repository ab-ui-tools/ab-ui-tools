import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

export const dateLanguages = {
  hy,
  'hy-am': hy,
  'en-US': en,
  'en-GB': en,
  ru,
  en,
};

// For backward compatibility, the library previously used dayjs format tokens (e.g. 'YYYY', 'DD').
// date-fns uses different tokens (e.g. 'yyyy', 'dd'), so this function converts
// dayjs formats to date-fns equivalents to support both old and new format strings.

export const FORMAT_MAP: Record<string, string> = {
  YYYY: 'yyyy',
  YY: 'yy',

  MMMM: 'MMMM',
  MMM: 'MMM',
  MM: 'MM',
  M: 'M',

  DD: 'dd',
  D: 'd',

  dddd: 'EEEE',
  ddd: 'EEE',
  dd: 'EE',

  HH: 'HH',
  H: 'H',
  hh: 'hh',
  h: 'h',

  mm: 'mm',
  m: 'm',

  ss: 'ss',
  s: 's',

  SSS: 'SSS',

  A: 'aa',
  a: 'aaa',

  ZZ: 'xx',
  Z: 'xxx',

  X: 't',
  x: 'T',

  Q: 'Q',

  ww: 'ww',
  w: 'w',
};

export const convertFormat = (format: string | undefined | null): string | undefined | null => {
  if (!format || /\[.*\]/.test(format)) return format;

  const tokens = Object.keys(FORMAT_MAP).sort((a, b) => b.length - a.length);
  const regex = new RegExp(tokens.join('|'), 'g');
  return format.replace(regex, match => FORMAT_MAP[match] ?? match);
};
