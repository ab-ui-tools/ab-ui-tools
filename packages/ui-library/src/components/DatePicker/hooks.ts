import { registerLocale } from 'react-datepicker';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';
import 'dayjs/locale/hy-am';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

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
            dayjs.locale('hy-am');
            break;
          case 'ru':
            dayjs.locale('ru');
            break;
          case 'en':
            dayjs.locale('en');
            break;
          default:
            await import(`dayjs/locale/${locale}`);
            dayjs.locale(locale);
        }
      } catch (error) {
        console.warn(`Failed to load dayjs locale: ${locale}`, error);
      }
    };

    void loadDayjsLocale();
  }, [locale]);
}
