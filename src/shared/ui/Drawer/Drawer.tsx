import {
  memo,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import Overlay from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  lazy?: boolean;
}

const ANIMATION_DELAY_SHOW = 100;
const ANIMATION_DELAY_HIDE = 200;

const Drawer = memo((props: DrawerProps) => {
  const { className, isOpen, onClose, content, lazy } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const drawerMods = {
    [styles.opened]: isOpen,
  };
  const contentMods = {
    [styles.contentOpen]: showContent,
    [styles.contentClosing]: isClosing,
  };

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY_HIDE);
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timerRef.current = setTimeout(() => {
        setShowContent(true);
      }, ANIMATION_DELAY_SHOW);
    }
    return () => {
      setShowContent(false);
      setIsMounted(false);
      clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassNames(styles.drawer, drawerMods, [className])}>
        <Overlay onClose={handleOnClose} />
        <div className={getClassNames(styles.contentWrapper, contentMods, [])}>
          {content}
        </div>
      </div>
    </Portal>
  );
});

export default Drawer;
