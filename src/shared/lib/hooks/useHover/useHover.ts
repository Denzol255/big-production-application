import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

type UseHoverReturn = [boolean, UseHoverBind];

export function useHover(): UseHoverReturn {
  const [isHover, setIsHover] = useState<boolean>(false);
  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);
  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  return useMemo(() => {
    return [isHover, { onMouseLeave, onMouseEnter }];
  }, [isHover, onMouseEnter, onMouseLeave]);
}
