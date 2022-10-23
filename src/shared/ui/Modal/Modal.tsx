/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getClassNames, Mods } from 'shared/lib/getClassNames/getClassNames';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isOpen, onClose, lazy } = props;
  // const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
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

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
    // [styles.isOpening]: isOpening,
  };
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // setIsOpening(true);
      // timerRef.current = setTimeout(() => {
      //   setIsOpening(false);
      // }, ANIMATION_DELAY);
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
      <div className={getClassNames(styles.modal, mods, [className])}>
        <div
          className={styles.overlay}
          onClick={handleOnClose}
          role='button'
          tabIndex={0}
        >
          <div
            className={styles.content}
            onClick={handleContentClick}
            role='button'
            tabIndex={-1}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
