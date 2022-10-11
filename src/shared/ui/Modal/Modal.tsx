/* eslint-disable jsx-a11y/click-events-have-key-events */
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import React, { FC, useCallback, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import { useEffect } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

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

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyPressHandler);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyPressHandler);
    };
  }, [isOpen, onKeyPressHandler]);

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
