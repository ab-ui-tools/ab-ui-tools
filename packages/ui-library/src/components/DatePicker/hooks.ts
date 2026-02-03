import { registerLocale } from 'react-datepicker';
import { useEffect } from 'react';
import ruDayjs from 'dayjs/locale/ru';
import hyAmDayjs from 'dayjs/locale/hy-am';
import enDayjs from 'dayjs/locale/en';
import dayjs from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';

// Register date-fns locales for react-datepicker calendar
registerLocale('hy', hy);
registerLocale('en', en);
registerLocale('ru', ru);

// Register dayjs locales
dayjs.locale('hy-am', hyAmDayjs);
dayjs.locale('ru', ruDayjs);
dayjs.locale('en', enDayjs);

export function useImportFilesDynamically(locale: string): void {
  useEffect(() => {
    if (locale) {
      dayjs.locale(locale);
    }
  }, [locale]);
}
