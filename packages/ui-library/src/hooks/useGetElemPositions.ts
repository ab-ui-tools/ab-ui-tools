type TPositionReturnTypes = {
  left: number;
  top: number;
  bottom: number;
  right: number;
  x?: number;
  y?: number;
};

const defaultPosition = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
};

export const useGetElemPositions = (elemRef: HTMLElement | null): TPositionReturnTypes => {
  if (typeof window === 'undefined') {
    return defaultPosition;
  }
  if (!elemRef || !elemRef.getBoundingClientRect) {
    return defaultPosition;
  }

  const elemDimensions = elemRef.getBoundingClientRect();

  return {
    left: elemDimensions.left,
    right: elemDimensions.right,
    top: elemDimensions.top,
    bottom: elemDimensions.bottom,
  };
};
