import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

export const getMonthOptions = (locale: string) => {
  const localeMap = { en, ru, hy };
  const dateFnsLocale = localeMap[locale as keyof typeof localeMap] ?? en;

  return Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: dateFnsLocale.localize?.month(i, { width: 'abbreviated' }),
  }));
};
