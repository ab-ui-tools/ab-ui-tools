import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { getActiveToasts } from '../store';
import { TOAST_RESET_DELAY } from '../consts';

export const useResetWhenEmpty = (): number => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const unsubscribe = toast.onChange(({ status }) => {
      clearTimeout(timer);
      if (status === 'removed' && !getActiveToasts().length) {
        timer = setTimeout(() => setResetKey(key => key + 1), TOAST_RESET_DELAY);
      }
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  return resetKey;
};
