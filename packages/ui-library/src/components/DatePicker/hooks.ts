import { registerLocale } from 'react-datepicker';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

registerLocale('hy', hy);
registerLocale('en', en);
registerLocale('ru', ru);

export function useImportFilesDynamically(locale: string): void {
  useEffect(() => {
    if (!locale) return;

    const loadDayjsLocale = async () => {
      try {
        switch (locale) {
          case 'hy-am':
          case 'hy':
            await import('dayjs/locale/hy-am.js');
            dayjs.locale('hy-am');
            break;
          case 'ru':
            await import('dayjs/locale/ru.js');
            dayjs.locale('ru');
            break;
          case 'en':
            await import('dayjs/locale/en.js');
            dayjs.locale('en');
            break;
          default:
            await import(`dayjs/locale/${locale}.js`);
            dayjs.locale(locale);
        }
      } catch (error) {
        console.warn(`Failed to load dayjs locale: ${locale}`, error);
      }
    };

    loadDayjsLocale();
  }, [locale]);
}
