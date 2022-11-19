import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    targetRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={getClassNames(styles.page, {}, [className])}
    >
      {children}
      <div className={styles.loadTrigger} ref={targetRef} />
    </section>
  );
};
