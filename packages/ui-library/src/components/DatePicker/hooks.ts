import { registerLocale } from 'react-datepicker';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

registerLocale('hy', hy);
registerLocale('ru', ru);
registerLocale('en', en);

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
          case 'en-US':
            await import('dayjs/locale/en.js');
            dayjs.locale('en');
            break;
        }
      } catch (error) {
        console.warn(`Failed to load dayjs locale: ${locale}`, error);
      }
    };

    loadDayjsLocale();
  }, [locale]);
}
