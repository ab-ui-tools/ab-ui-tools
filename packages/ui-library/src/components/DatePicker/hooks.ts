import { registerLocale } from 'react-datepicker';
import { useEffect, useState } from 'react';
import { locale } from 'dayjs';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';
import en from 'date-fns/locale/en-GB';
import 'dayjs/locale/hy-am';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

registerLocale('hy', hy);
registerLocale('en', en);
registerLocale('ru', ru);

export function useImportFilesDynamically(dayjsLocale: string): void {
  const [_, setIsFilesLoaded] = useState(false);

  useEffect(() => {
    if (dayjsLocale) {
      (async () => {
        setIsFilesLoaded(false);
        locale(dayjsLocale);
        setTimeout(() => {
          setIsFilesLoaded(true);
        }, 0);
      })();
    }
  }, [dayjsLocale]);
}
