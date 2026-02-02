import { registerLocale } from 'react-datepicker';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

// Register date-fns locales for react-datepicker calendar
registerLocale('hy', hy);
registerLocale('en', en);
registerLocale('ru', ru);

export function useImportFilesDynamically(dayjsLocale: string): void {
  useEffect(() => {
    if (!dayjsLocale) return;

    // Dynamically import dayjs locale files on-demand to avoid bundling them
    const loadDayjsLocale = async () => {
      try {
        switch (dayjsLocale) {
          case 'hy-am':
            await import('dayjs/locale/hy-am');
            dayjs.locale('hy-am');
            break;
          case 'ru':
            await import('dayjs/locale/ru');
            dayjs.locale('ru');
            break;
          case 'en':
            await import('dayjs/locale/en');
            dayjs.locale('en');
            break;
          default:
            // For any other locale, try to load it dynamically
            await import(`dayjs/locale/${dayjsLocale}`);
            dayjs.locale(dayjsLocale);
        }
      } catch (error) {
        console.warn(`Failed to load dayjs locale: ${dayjsLocale}`, error);
      }
    };

    loadDayjsLocale();
  }, [dayjsLocale]);
}
