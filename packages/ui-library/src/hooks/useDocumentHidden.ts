import { useEffect, useState } from 'react';

/** `true` while the browser tab is in the background. */
export const useDocumentHidden = (): boolean => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleChange = () => setIsHidden(document.visibilityState === 'hidden');

    handleChange();
    document.addEventListener('visibilitychange', handleChange);

    return () => document.removeEventListener('visibilitychange', handleChange);
  }, []);

  return isHidden;
};
