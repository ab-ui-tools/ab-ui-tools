/** Seconds → `mm:ss`*/
export const formatCountdown = (seconds: number): string => {
  const safe = Math.max(0, Math.ceil(seconds));
  const minutes = String(Math.floor(safe / 60)).padStart(2, '0');
  const rest = String(safe % 60).padStart(2, '0');
  return `${minutes}:${rest}`;
};

export const clampProgress = (value: number): number => Math.min(1, Math.max(0, value));
