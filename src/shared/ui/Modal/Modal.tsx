/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getClassNames, Mods } from 'shared/lib/getClassNames/getClassNames';
import Overlay from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  children: ReactNode;
}

const ANIMATION_DELAY_SHOW = 0;
const ANIMATION_DELAY_HIDE = 300;

export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose, lazy } = props;
  // const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const [showContent, setShowContent] = useState<boolean>(false);
  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY_HIDE);
    }
  }, [onClose]);

  const onKeyPressHandler = useCallback(
    (e: MyKeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOnClose();
      }
    },
    [handleOnClose]
  );

  const modalMods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const contentMods: Mods = {
    [styles.contentOpen]: showContent,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timerRef.current = setTimeout(() => {
        setShowContent(true);
      }, ANIMATION_DELAY_SHOW);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyPressHandler);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyPressHandler);
    };
  }, [isOpen, onKeyPressHandler]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassNames(styles.modal, modalMods, [className])}>
        <Overlay onClose={handleOnClose} />
        <div
          className={getClassNames(styles.content, contentMods, [className])}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
