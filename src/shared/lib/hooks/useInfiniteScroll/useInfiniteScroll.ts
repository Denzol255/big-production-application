import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptios {
  wrapperRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll({
  callback,
  targetRef,
  wrapperRef,
}: UseInfiniteScrollOptios) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = targetRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }
    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, targetRef, wrapperRef]);
}
