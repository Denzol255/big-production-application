/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode } from 'react';
import { getClassNames, Mods } from 'shared/lib/getClassNames/getClassNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
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
  const { isClosing, showContent, isMounted, close } = useModal({
    animationDelayHide: ANIMATION_DELAY_HIDE,
    animationDelayShow: ANIMATION_DELAY_SHOW,
    isOpen,
    onClose,
  });
  const modalMods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const contentMods: Mods = {
    [styles.contentOpen]: showContent,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassNames(styles.modal, modalMods, [className])}>
        <Overlay onClose={close} />
        <div
          className={getClassNames(styles.content, contentMods, [className])}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
